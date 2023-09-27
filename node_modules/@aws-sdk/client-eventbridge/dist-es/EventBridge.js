import { createAggregatedClient } from "@smithy/smithy-client";
import { ActivateEventSourceCommand, } from "./commands/ActivateEventSourceCommand";
import { CancelReplayCommand, } from "./commands/CancelReplayCommand";
import { CreateApiDestinationCommand, } from "./commands/CreateApiDestinationCommand";
import { CreateArchiveCommand, } from "./commands/CreateArchiveCommand";
import { CreateConnectionCommand, } from "./commands/CreateConnectionCommand";
import { CreateEndpointCommand, } from "./commands/CreateEndpointCommand";
import { CreateEventBusCommand, } from "./commands/CreateEventBusCommand";
import { CreatePartnerEventSourceCommand, } from "./commands/CreatePartnerEventSourceCommand";
import { DeactivateEventSourceCommand, } from "./commands/DeactivateEventSourceCommand";
import { DeauthorizeConnectionCommand, } from "./commands/DeauthorizeConnectionCommand";
import { DeleteApiDestinationCommand, } from "./commands/DeleteApiDestinationCommand";
import { DeleteArchiveCommand, } from "./commands/DeleteArchiveCommand";
import { DeleteConnectionCommand, } from "./commands/DeleteConnectionCommand";
import { DeleteEndpointCommand, } from "./commands/DeleteEndpointCommand";
import { DeleteEventBusCommand, } from "./commands/DeleteEventBusCommand";
import { DeletePartnerEventSourceCommand, } from "./commands/DeletePartnerEventSourceCommand";
import { DeleteRuleCommand } from "./commands/DeleteRuleCommand";
import { DescribeApiDestinationCommand, } from "./commands/DescribeApiDestinationCommand";
import { DescribeArchiveCommand, } from "./commands/DescribeArchiveCommand";
import { DescribeConnectionCommand, } from "./commands/DescribeConnectionCommand";
import { DescribeEndpointCommand, } from "./commands/DescribeEndpointCommand";
import { DescribeEventBusCommand, } from "./commands/DescribeEventBusCommand";
import { DescribeEventSourceCommand, } from "./commands/DescribeEventSourceCommand";
import { DescribePartnerEventSourceCommand, } from "./commands/DescribePartnerEventSourceCommand";
import { DescribeReplayCommand, } from "./commands/DescribeReplayCommand";
import { DescribeRuleCommand, } from "./commands/DescribeRuleCommand";
import { DisableRuleCommand } from "./commands/DisableRuleCommand";
import { EnableRuleCommand } from "./commands/EnableRuleCommand";
import { ListApiDestinationsCommand, } from "./commands/ListApiDestinationsCommand";
import { ListArchivesCommand, } from "./commands/ListArchivesCommand";
import { ListConnectionsCommand, } from "./commands/ListConnectionsCommand";
import { ListEndpointsCommand, } from "./commands/ListEndpointsCommand";
import { ListEventBusesCommand, } from "./commands/ListEventBusesCommand";
import { ListEventSourcesCommand, } from "./commands/ListEventSourcesCommand";
import { ListPartnerEventSourceAccountsCommand, } from "./commands/ListPartnerEventSourceAccountsCommand";
import { ListPartnerEventSourcesCommand, } from "./commands/ListPartnerEventSourcesCommand";
import { ListReplaysCommand } from "./commands/ListReplaysCommand";
import { ListRuleNamesByTargetCommand, } from "./commands/ListRuleNamesByTargetCommand";
import { ListRulesCommand } from "./commands/ListRulesCommand";
import { ListTagsForResourceCommand, } from "./commands/ListTagsForResourceCommand";
import { ListTargetsByRuleCommand, } from "./commands/ListTargetsByRuleCommand";
import { PutEventsCommand } from "./commands/PutEventsCommand";
import { PutPartnerEventsCommand, } from "./commands/PutPartnerEventsCommand";
import { PutPermissionCommand, } from "./commands/PutPermissionCommand";
import { PutRuleCommand } from "./commands/PutRuleCommand";
import { PutTargetsCommand } from "./commands/PutTargetsCommand";
import { RemovePermissionCommand, } from "./commands/RemovePermissionCommand";
import { RemoveTargetsCommand, } from "./commands/RemoveTargetsCommand";
import { StartReplayCommand } from "./commands/StartReplayCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { TestEventPatternCommand, } from "./commands/TestEventPatternCommand";
import { UntagResourceCommand, } from "./commands/UntagResourceCommand";
import { UpdateApiDestinationCommand, } from "./commands/UpdateApiDestinationCommand";
import { UpdateArchiveCommand, } from "./commands/UpdateArchiveCommand";
import { UpdateConnectionCommand, } from "./commands/UpdateConnectionCommand";
import { UpdateEndpointCommand, } from "./commands/UpdateEndpointCommand";
import { EventBridgeClient } from "./EventBridgeClient";
const commands = {
    ActivateEventSourceCommand,
    CancelReplayCommand,
    CreateApiDestinationCommand,
    CreateArchiveCommand,
    CreateConnectionCommand,
    CreateEndpointCommand,
    CreateEventBusCommand,
    CreatePartnerEventSourceCommand,
    DeactivateEventSourceCommand,
    DeauthorizeConnectionCommand,
    DeleteApiDestinationCommand,
    DeleteArchiveCommand,
    DeleteConnectionCommand,
    DeleteEndpointCommand,
    DeleteEventBusCommand,
    DeletePartnerEventSourceCommand,
    DeleteRuleCommand,
    DescribeApiDestinationCommand,
    DescribeArchiveCommand,
    DescribeConnectionCommand,
    DescribeEndpointCommand,
    DescribeEventBusCommand,
    DescribeEventSourceCommand,
    DescribePartnerEventSourceCommand,
    DescribeReplayCommand,
    DescribeRuleCommand,
    DisableRuleCommand,
    EnableRuleCommand,
    ListApiDestinationsCommand,
    ListArchivesCommand,
    ListConnectionsCommand,
    ListEndpointsCommand,
    ListEventBusesCommand,
    ListEventSourcesCommand,
    ListPartnerEventSourceAccountsCommand,
    ListPartnerEventSourcesCommand,
    ListReplaysCommand,
    ListRuleNamesByTargetCommand,
    ListRulesCommand,
    ListTagsForResourceCommand,
    ListTargetsByRuleCommand,
    PutEventsCommand,
    PutPartnerEventsCommand,
    PutPermissionCommand,
    PutRuleCommand,
    PutTargetsCommand,
    RemovePermissionCommand,
    RemoveTargetsCommand,
    StartReplayCommand,
    TagResourceCommand,
    TestEventPatternCommand,
    UntagResourceCommand,
    UpdateApiDestinationCommand,
    UpdateArchiveCommand,
    UpdateConnectionCommand,
    UpdateEndpointCommand,
};
export class EventBridge extends EventBridgeClient {
}
createAggregatedClient(commands, EventBridge);
