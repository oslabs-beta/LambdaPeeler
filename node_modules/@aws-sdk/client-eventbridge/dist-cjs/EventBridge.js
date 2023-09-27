"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventBridge = void 0;
const smithy_client_1 = require("@smithy/smithy-client");
const ActivateEventSourceCommand_1 = require("./commands/ActivateEventSourceCommand");
const CancelReplayCommand_1 = require("./commands/CancelReplayCommand");
const CreateApiDestinationCommand_1 = require("./commands/CreateApiDestinationCommand");
const CreateArchiveCommand_1 = require("./commands/CreateArchiveCommand");
const CreateConnectionCommand_1 = require("./commands/CreateConnectionCommand");
const CreateEndpointCommand_1 = require("./commands/CreateEndpointCommand");
const CreateEventBusCommand_1 = require("./commands/CreateEventBusCommand");
const CreatePartnerEventSourceCommand_1 = require("./commands/CreatePartnerEventSourceCommand");
const DeactivateEventSourceCommand_1 = require("./commands/DeactivateEventSourceCommand");
const DeauthorizeConnectionCommand_1 = require("./commands/DeauthorizeConnectionCommand");
const DeleteApiDestinationCommand_1 = require("./commands/DeleteApiDestinationCommand");
const DeleteArchiveCommand_1 = require("./commands/DeleteArchiveCommand");
const DeleteConnectionCommand_1 = require("./commands/DeleteConnectionCommand");
const DeleteEndpointCommand_1 = require("./commands/DeleteEndpointCommand");
const DeleteEventBusCommand_1 = require("./commands/DeleteEventBusCommand");
const DeletePartnerEventSourceCommand_1 = require("./commands/DeletePartnerEventSourceCommand");
const DeleteRuleCommand_1 = require("./commands/DeleteRuleCommand");
const DescribeApiDestinationCommand_1 = require("./commands/DescribeApiDestinationCommand");
const DescribeArchiveCommand_1 = require("./commands/DescribeArchiveCommand");
const DescribeConnectionCommand_1 = require("./commands/DescribeConnectionCommand");
const DescribeEndpointCommand_1 = require("./commands/DescribeEndpointCommand");
const DescribeEventBusCommand_1 = require("./commands/DescribeEventBusCommand");
const DescribeEventSourceCommand_1 = require("./commands/DescribeEventSourceCommand");
const DescribePartnerEventSourceCommand_1 = require("./commands/DescribePartnerEventSourceCommand");
const DescribeReplayCommand_1 = require("./commands/DescribeReplayCommand");
const DescribeRuleCommand_1 = require("./commands/DescribeRuleCommand");
const DisableRuleCommand_1 = require("./commands/DisableRuleCommand");
const EnableRuleCommand_1 = require("./commands/EnableRuleCommand");
const ListApiDestinationsCommand_1 = require("./commands/ListApiDestinationsCommand");
const ListArchivesCommand_1 = require("./commands/ListArchivesCommand");
const ListConnectionsCommand_1 = require("./commands/ListConnectionsCommand");
const ListEndpointsCommand_1 = require("./commands/ListEndpointsCommand");
const ListEventBusesCommand_1 = require("./commands/ListEventBusesCommand");
const ListEventSourcesCommand_1 = require("./commands/ListEventSourcesCommand");
const ListPartnerEventSourceAccountsCommand_1 = require("./commands/ListPartnerEventSourceAccountsCommand");
const ListPartnerEventSourcesCommand_1 = require("./commands/ListPartnerEventSourcesCommand");
const ListReplaysCommand_1 = require("./commands/ListReplaysCommand");
const ListRuleNamesByTargetCommand_1 = require("./commands/ListRuleNamesByTargetCommand");
const ListRulesCommand_1 = require("./commands/ListRulesCommand");
const ListTagsForResourceCommand_1 = require("./commands/ListTagsForResourceCommand");
const ListTargetsByRuleCommand_1 = require("./commands/ListTargetsByRuleCommand");
const PutEventsCommand_1 = require("./commands/PutEventsCommand");
const PutPartnerEventsCommand_1 = require("./commands/PutPartnerEventsCommand");
const PutPermissionCommand_1 = require("./commands/PutPermissionCommand");
const PutRuleCommand_1 = require("./commands/PutRuleCommand");
const PutTargetsCommand_1 = require("./commands/PutTargetsCommand");
const RemovePermissionCommand_1 = require("./commands/RemovePermissionCommand");
const RemoveTargetsCommand_1 = require("./commands/RemoveTargetsCommand");
const StartReplayCommand_1 = require("./commands/StartReplayCommand");
const TagResourceCommand_1 = require("./commands/TagResourceCommand");
const TestEventPatternCommand_1 = require("./commands/TestEventPatternCommand");
const UntagResourceCommand_1 = require("./commands/UntagResourceCommand");
const UpdateApiDestinationCommand_1 = require("./commands/UpdateApiDestinationCommand");
const UpdateArchiveCommand_1 = require("./commands/UpdateArchiveCommand");
const UpdateConnectionCommand_1 = require("./commands/UpdateConnectionCommand");
const UpdateEndpointCommand_1 = require("./commands/UpdateEndpointCommand");
const EventBridgeClient_1 = require("./EventBridgeClient");
const commands = {
    ActivateEventSourceCommand: ActivateEventSourceCommand_1.ActivateEventSourceCommand,
    CancelReplayCommand: CancelReplayCommand_1.CancelReplayCommand,
    CreateApiDestinationCommand: CreateApiDestinationCommand_1.CreateApiDestinationCommand,
    CreateArchiveCommand: CreateArchiveCommand_1.CreateArchiveCommand,
    CreateConnectionCommand: CreateConnectionCommand_1.CreateConnectionCommand,
    CreateEndpointCommand: CreateEndpointCommand_1.CreateEndpointCommand,
    CreateEventBusCommand: CreateEventBusCommand_1.CreateEventBusCommand,
    CreatePartnerEventSourceCommand: CreatePartnerEventSourceCommand_1.CreatePartnerEventSourceCommand,
    DeactivateEventSourceCommand: DeactivateEventSourceCommand_1.DeactivateEventSourceCommand,
    DeauthorizeConnectionCommand: DeauthorizeConnectionCommand_1.DeauthorizeConnectionCommand,
    DeleteApiDestinationCommand: DeleteApiDestinationCommand_1.DeleteApiDestinationCommand,
    DeleteArchiveCommand: DeleteArchiveCommand_1.DeleteArchiveCommand,
    DeleteConnectionCommand: DeleteConnectionCommand_1.DeleteConnectionCommand,
    DeleteEndpointCommand: DeleteEndpointCommand_1.DeleteEndpointCommand,
    DeleteEventBusCommand: DeleteEventBusCommand_1.DeleteEventBusCommand,
    DeletePartnerEventSourceCommand: DeletePartnerEventSourceCommand_1.DeletePartnerEventSourceCommand,
    DeleteRuleCommand: DeleteRuleCommand_1.DeleteRuleCommand,
    DescribeApiDestinationCommand: DescribeApiDestinationCommand_1.DescribeApiDestinationCommand,
    DescribeArchiveCommand: DescribeArchiveCommand_1.DescribeArchiveCommand,
    DescribeConnectionCommand: DescribeConnectionCommand_1.DescribeConnectionCommand,
    DescribeEndpointCommand: DescribeEndpointCommand_1.DescribeEndpointCommand,
    DescribeEventBusCommand: DescribeEventBusCommand_1.DescribeEventBusCommand,
    DescribeEventSourceCommand: DescribeEventSourceCommand_1.DescribeEventSourceCommand,
    DescribePartnerEventSourceCommand: DescribePartnerEventSourceCommand_1.DescribePartnerEventSourceCommand,
    DescribeReplayCommand: DescribeReplayCommand_1.DescribeReplayCommand,
    DescribeRuleCommand: DescribeRuleCommand_1.DescribeRuleCommand,
    DisableRuleCommand: DisableRuleCommand_1.DisableRuleCommand,
    EnableRuleCommand: EnableRuleCommand_1.EnableRuleCommand,
    ListApiDestinationsCommand: ListApiDestinationsCommand_1.ListApiDestinationsCommand,
    ListArchivesCommand: ListArchivesCommand_1.ListArchivesCommand,
    ListConnectionsCommand: ListConnectionsCommand_1.ListConnectionsCommand,
    ListEndpointsCommand: ListEndpointsCommand_1.ListEndpointsCommand,
    ListEventBusesCommand: ListEventBusesCommand_1.ListEventBusesCommand,
    ListEventSourcesCommand: ListEventSourcesCommand_1.ListEventSourcesCommand,
    ListPartnerEventSourceAccountsCommand: ListPartnerEventSourceAccountsCommand_1.ListPartnerEventSourceAccountsCommand,
    ListPartnerEventSourcesCommand: ListPartnerEventSourcesCommand_1.ListPartnerEventSourcesCommand,
    ListReplaysCommand: ListReplaysCommand_1.ListReplaysCommand,
    ListRuleNamesByTargetCommand: ListRuleNamesByTargetCommand_1.ListRuleNamesByTargetCommand,
    ListRulesCommand: ListRulesCommand_1.ListRulesCommand,
    ListTagsForResourceCommand: ListTagsForResourceCommand_1.ListTagsForResourceCommand,
    ListTargetsByRuleCommand: ListTargetsByRuleCommand_1.ListTargetsByRuleCommand,
    PutEventsCommand: PutEventsCommand_1.PutEventsCommand,
    PutPartnerEventsCommand: PutPartnerEventsCommand_1.PutPartnerEventsCommand,
    PutPermissionCommand: PutPermissionCommand_1.PutPermissionCommand,
    PutRuleCommand: PutRuleCommand_1.PutRuleCommand,
    PutTargetsCommand: PutTargetsCommand_1.PutTargetsCommand,
    RemovePermissionCommand: RemovePermissionCommand_1.RemovePermissionCommand,
    RemoveTargetsCommand: RemoveTargetsCommand_1.RemoveTargetsCommand,
    StartReplayCommand: StartReplayCommand_1.StartReplayCommand,
    TagResourceCommand: TagResourceCommand_1.TagResourceCommand,
    TestEventPatternCommand: TestEventPatternCommand_1.TestEventPatternCommand,
    UntagResourceCommand: UntagResourceCommand_1.UntagResourceCommand,
    UpdateApiDestinationCommand: UpdateApiDestinationCommand_1.UpdateApiDestinationCommand,
    UpdateArchiveCommand: UpdateArchiveCommand_1.UpdateArchiveCommand,
    UpdateConnectionCommand: UpdateConnectionCommand_1.UpdateConnectionCommand,
    UpdateEndpointCommand: UpdateEndpointCommand_1.UpdateEndpointCommand,
};
class EventBridge extends EventBridgeClient_1.EventBridgeClient {
}
exports.EventBridge = EventBridge;
(0, smithy_client_1.createAggregatedClient)(commands, EventBridge);
