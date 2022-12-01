import { BigInt } from "@graphprotocol/graph-ts"
import {
  UbeGrants,
  GrantCreated,
  GrantMilestone,
  GrantState,
  OwnershipTransferred,
  GrantMilestoneApplied
} from "../generated/UbeGrants/UbeGrants"
import { Grant, ContractOwner, GrantMilestoneDelivery } from "../generated/schema"

export function handleGrantCreated(event: GrantCreated): void {
  let evParams = event.params

  let grant = new Grant(evParams.grantId.toString())

  grant.grantId = evParams.grantId
  grant.state = new BigInt(0)
  grant.ipfs = evParams.ipfsHash
  grant.grantee = evParams.creator
  grant.milestoneAmounts = evParams.milestoneAmounts
  grant.block = event.block.number
  grant.milestoneDeliveries = new Array<string>()
  grant.time = event.block.timestamp
  grant.nextPayout = new BigInt(0)

  grant.save()
}

export function handleGrantMilestoneApplied(event: GrantMilestoneApplied): void {
  let evParams = event.params
  
  let grant = Grant.load(event.params.grantId.toString())!

  let deliver = new GrantMilestoneDelivery(evParams.ipfsHash.toString())
  deliver.ipfsHash = evParams.ipfsHash
  deliver.approved = false
  deliver.time = event.block.timestamp
  deliver.save()

  grant.milestoneDeliveries.push(deliver.id)
  grant.save()
}

export function handleGrantMilestone(event: GrantMilestone): void {
  let evParams = event.params

  let grant = Grant.load(evParams.grantId.toString())!
  let deliver = GrantMilestoneDelivery.load(evParams.ipfsHash.toString())!
  
  if (evParams.approved) {
    grant.nextPayout = grant.nextPayout.plus(new BigInt(1))
    deliver.approved = true
  }

  deliver.save()
  grant.save()
}

export function handleGrantState(event: GrantState): void {
  let evParams = event.params

  let grant = Grant.load(evParams.grantId.toString())!
  grant.state = evParams.state
  
  grant.save()
}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {
  let evParams = event.params

  let contractOwner = new ContractOwner(event.transaction.hash.toHexString())
  contractOwner.contract = event.address
  contractOwner.owner = evParams.newOwner
  contractOwner.block = event.block.number
  contractOwner.time = event.block.timestamp
}
