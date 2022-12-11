import { BigInt } from "@graphprotocol/graph-ts"
import {
  UbeGrants,
  GrantCreated,
  GrantStateChanged,
  GrantMilestoneStatus,
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
  grant.time = event.block.timestamp
  grant.nextPayout = new BigInt(0)
  
  grant.save()
}

export function handleGrantStateChanged(event: GrantStateChanged): void {
  let evParams = event.params

  let grant = Grant.load(evParams.grantId.toString())!

  grant.state = evParams.state
  grant.save()
}

export function handleGrantMilestoneApplied(event: GrantMilestoneApplied): void {
  let evParams = event.params
  
  let grant = Grant.load(evParams.grantId.toString())!

  let deliver = new GrantMilestoneDelivery(evParams.grantId.toString() + "-" + evParams.milestoneId.toString())
  deliver.ipfsHash = evParams.ipfsHash
  deliver.time = event.block.timestamp
  deliver.grant = grant.id.toString()
  deliver.save()
}

export function handleGrantMilestoneStatus(event: GrantMilestoneStatus): void {
  let evParams = event.params

  let deliverId = evParams.grantId.toString() + "-" + evParams.milestoneId.toString()

  let grant = Grant.load(evParams.grantId.toString())!
  let one = new BigInt(1)

  if (evParams.approved === true) {
    grant.nextPayout = grant.nextPayout.plus(one)
  }
  
  let deliver = GrantMilestoneDelivery.load(deliverId)!
  
  let two = new BigInt(2)
  
  deliver.state = evParams.approved
  
  grant.save()
  deliver.save()
}


export function handleOwnershipTransferred(event: OwnershipTransferred): void {
  let evParams = event.params

  let contractOwner = new ContractOwner(event.transaction.hash.toHexString())
  contractOwner.contract = event.address
  contractOwner.owner = evParams.newOwner
  contractOwner.block = event.block.number
  contractOwner.time = event.block.timestamp

  contractOwner.save()
}
