// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class GrantCreated extends ethereum.Event {
  get params(): GrantCreated__Params {
    return new GrantCreated__Params(this);
  }
}

export class GrantCreated__Params {
  _event: GrantCreated;

  constructor(event: GrantCreated) {
    this._event = event;
  }

  get grantId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get milestoneAmounts(): Array<BigInt> {
    return this._event.parameters[1].value.toBigIntArray();
  }

  get creator(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get ipfsHash(): string {
    return this._event.parameters[3].value.toString();
  }
}

export class GrantMilestone extends ethereum.Event {
  get params(): GrantMilestone__Params {
    return new GrantMilestone__Params(this);
  }
}

export class GrantMilestone__Params {
  _event: GrantMilestone;

  constructor(event: GrantMilestone) {
    this._event = event;
  }

  get grantId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get milestoneId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get ipfsHash(): string {
    return this._event.parameters[3].value.toString();
  }

  get approved(): boolean {
    return this._event.parameters[4].value.toBoolean();
  }
}

export class GrantMilestoneApplied extends ethereum.Event {
  get params(): GrantMilestoneApplied__Params {
    return new GrantMilestoneApplied__Params(this);
  }
}

export class GrantMilestoneApplied__Params {
  _event: GrantMilestoneApplied;

  constructor(event: GrantMilestoneApplied) {
    this._event = event;
  }

  get grantId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get milestoneId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get ipfsHash(): string {
    return this._event.parameters[2].value.toString();
  }
}

export class GrantState extends ethereum.Event {
  get params(): GrantState__Params {
    return new GrantState__Params(this);
  }
}

export class GrantState__Params {
  _event: GrantState;

  constructor(event: GrantState) {
    this._event = event;
  }

  get grantId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get state(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class UbeGrants__getGrantResultValue0Struct extends ethereum.Tuple {
  get id(): BigInt {
    return this[0].toBigInt();
  }

  get grantee(): Address {
    return this[1].toAddress();
  }

  get ipfsHash(): string {
    return this[2].toString();
  }

  get state(): i32 {
    return this[3].toI32();
  }

  get nextPayout(): BigInt {
    return this[4].toBigInt();
  }

  get totalAmount(): BigInt {
    return this[5].toBigInt();
  }

  get milestoneAmounts(): Array<BigInt> {
    return this[6].toBigIntArray();
  }

  get milestoneDeliveries(): Array<string> {
    return this[7].toStringArray();
  }
}

export class UbeGrants__grantsResult {
  value0: BigInt;
  value1: Address;
  value2: string;
  value3: i32;
  value4: BigInt;
  value5: BigInt;

  constructor(
    value0: BigInt,
    value1: Address,
    value2: string,
    value3: i32,
    value4: BigInt,
    value5: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromString(this.value2));
    map.set(
      "value3",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value3))
    );
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    map.set("value5", ethereum.Value.fromUnsignedBigInt(this.value5));
    return map;
  }
}

export class UbeGrants extends ethereum.SmartContract {
  static bind(address: Address): UbeGrants {
    return new UbeGrants("UbeGrants", address);
  }

  daoMultisig(): Address {
    let result = super.call("daoMultisig", "daoMultisig():(address)", []);

    return result[0].toAddress();
  }

  try_daoMultisig(): ethereum.CallResult<Address> {
    let result = super.tryCall("daoMultisig", "daoMultisig():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getGrant(grantId: BigInt): UbeGrants__getGrantResultValue0Struct {
    let result = super.call(
      "getGrant",
      "getGrant(uint256):((uint256,address,string,uint8,uint256,uint256,uint256[],string[]))",
      [ethereum.Value.fromUnsignedBigInt(grantId)]
    );

    return result[0].toTuple() as UbeGrants__getGrantResultValue0Struct;
  }

  try_getGrant(
    grantId: BigInt
  ): ethereum.CallResult<UbeGrants__getGrantResultValue0Struct> {
    let result = super.tryCall(
      "getGrant",
      "getGrant(uint256):((uint256,address,string,uint8,uint256,uint256,uint256[],string[]))",
      [ethereum.Value.fromUnsignedBigInt(grantId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTuple() as UbeGrants__getGrantResultValue0Struct
    );
  }

  grants(param0: BigInt): UbeGrants__grantsResult {
    let result = super.call(
      "grants",
      "grants(uint256):(uint256,address,string,uint8,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new UbeGrants__grantsResult(
      result[0].toBigInt(),
      result[1].toAddress(),
      result[2].toString(),
      result[3].toI32(),
      result[4].toBigInt(),
      result[5].toBigInt()
    );
  }

  try_grants(param0: BigInt): ethereum.CallResult<UbeGrants__grantsResult> {
    let result = super.tryCall(
      "grants",
      "grants(uint256):(uint256,address,string,uint8,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new UbeGrants__grantsResult(
        value[0].toBigInt(),
        value[1].toAddress(),
        value[2].toString(),
        value[3].toI32(),
        value[4].toBigInt(),
        value[5].toBigInt()
      )
    );
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  ubeTokenAddress(): Address {
    let result = super.call(
      "ubeTokenAddress",
      "ubeTokenAddress():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_ubeTokenAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "ubeTokenAddress",
      "ubeTokenAddress():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _daoMultisig(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _ubeTokenAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ApplyForGrantCall extends ethereum.Call {
  get inputs(): ApplyForGrantCall__Inputs {
    return new ApplyForGrantCall__Inputs(this);
  }

  get outputs(): ApplyForGrantCall__Outputs {
    return new ApplyForGrantCall__Outputs(this);
  }
}

export class ApplyForGrantCall__Inputs {
  _call: ApplyForGrantCall;

  constructor(call: ApplyForGrantCall) {
    this._call = call;
  }

  get _ipfsHash(): string {
    return this._call.inputValues[0].value.toString();
  }

  get milestoneAmounts(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }
}

export class ApplyForGrantCall__Outputs {
  _call: ApplyForGrantCall;

  constructor(call: ApplyForGrantCall) {
    this._call = call;
  }
}

export class ApplyForGrantMilestoneCall extends ethereum.Call {
  get inputs(): ApplyForGrantMilestoneCall__Inputs {
    return new ApplyForGrantMilestoneCall__Inputs(this);
  }

  get outputs(): ApplyForGrantMilestoneCall__Outputs {
    return new ApplyForGrantMilestoneCall__Outputs(this);
  }
}

export class ApplyForGrantMilestoneCall__Inputs {
  _call: ApplyForGrantMilestoneCall;

  constructor(call: ApplyForGrantMilestoneCall) {
    this._call = call;
  }

  get grantId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get ipfsHash(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class ApplyForGrantMilestoneCall__Outputs {
  _call: ApplyForGrantMilestoneCall;

  constructor(call: ApplyForGrantMilestoneCall) {
    this._call = call;
  }
}

export class ApproveOrRejectGrantCall extends ethereum.Call {
  get inputs(): ApproveOrRejectGrantCall__Inputs {
    return new ApproveOrRejectGrantCall__Inputs(this);
  }

  get outputs(): ApproveOrRejectGrantCall__Outputs {
    return new ApproveOrRejectGrantCall__Outputs(this);
  }
}

export class ApproveOrRejectGrantCall__Inputs {
  _call: ApproveOrRejectGrantCall;

  constructor(call: ApproveOrRejectGrantCall) {
    this._call = call;
  }

  get _grantId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get approve(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class ApproveOrRejectGrantCall__Outputs {
  _call: ApproveOrRejectGrantCall;

  constructor(call: ApproveOrRejectGrantCall) {
    this._call = call;
  }
}

export class ApproveOrRejectMilestoneCall extends ethereum.Call {
  get inputs(): ApproveOrRejectMilestoneCall__Inputs {
    return new ApproveOrRejectMilestoneCall__Inputs(this);
  }

  get outputs(): ApproveOrRejectMilestoneCall__Outputs {
    return new ApproveOrRejectMilestoneCall__Outputs(this);
  }
}

export class ApproveOrRejectMilestoneCall__Inputs {
  _call: ApproveOrRejectMilestoneCall;

  constructor(call: ApproveOrRejectMilestoneCall) {
    this._call = call;
  }

  get grantId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get approve(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class ApproveOrRejectMilestoneCall__Outputs {
  _call: ApproveOrRejectMilestoneCall;

  constructor(call: ApproveOrRejectMilestoneCall) {
    this._call = call;
  }
}

export class CancelGrantCall extends ethereum.Call {
  get inputs(): CancelGrantCall__Inputs {
    return new CancelGrantCall__Inputs(this);
  }

  get outputs(): CancelGrantCall__Outputs {
    return new CancelGrantCall__Outputs(this);
  }
}

export class CancelGrantCall__Inputs {
  _call: CancelGrantCall;

  constructor(call: CancelGrantCall) {
    this._call = call;
  }

  get _grantId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class CancelGrantCall__Outputs {
  _call: CancelGrantCall;

  constructor(call: CancelGrantCall) {
    this._call = call;
  }
}

export class ChangeDaoAddressCall extends ethereum.Call {
  get inputs(): ChangeDaoAddressCall__Inputs {
    return new ChangeDaoAddressCall__Inputs(this);
  }

  get outputs(): ChangeDaoAddressCall__Outputs {
    return new ChangeDaoAddressCall__Outputs(this);
  }
}

export class ChangeDaoAddressCall__Inputs {
  _call: ChangeDaoAddressCall;

  constructor(call: ChangeDaoAddressCall) {
    this._call = call;
  }

  get _newDaoMultisig(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ChangeDaoAddressCall__Outputs {
  _call: ChangeDaoAddressCall;

  constructor(call: ChangeDaoAddressCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}
