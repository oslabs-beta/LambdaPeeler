import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";
import {
  ActivateEventSourceCommandInput,
  ActivateEventSourceCommandOutput,
} from "./commands/ActivateEventSourceCommand";
import {
  CancelReplayCommandInput,
  CancelReplayCommandOutput,
} from "./commands/CancelReplayCommand";
import {
  CreateApiDestinationCommandInput,
  CreateApiDestinationCommandOutput,
} from "./commands/CreateApiDestinationCommand";
import {
  CreateArchiveCommandInput,
  CreateArchiveCommandOutput,
} from "./commands/CreateArchiveCommand";
import {
  CreateConnectionCommandInput,
  CreateConnectionCommandOutput,
} from "./commands/CreateConnectionCommand";
import {
  CreateEndpointCommandInput,
  CreateEndpointCommandOutput,
} from "./commands/CreateEndpointCommand";
import {
  CreateEventBusCommandInput,
  CreateEventBusCommandOutput,
} from "./commands/CreateEventBusCommand";
import {
  CreatePartnerEventSourceCommandInput,
  CreatePartnerEventSourceCommandOutput,
} from "./commands/CreatePartnerEventSourceCommand";
import {
  DeactivateEventSourceCommandInput,
  DeactivateEventSourceCommandOutput,
} from "./commands/DeactivateEventSourceCommand";
import {
  DeauthorizeConnectionCommandInput,
  DeauthorizeConnectionCommandOutput,
} from "./commands/DeauthorizeConnectionCommand";
import {
  DeleteApiDestinationCommandInput,
  DeleteApiDestinationCommandOutput,
} from "./commands/DeleteApiDestinationCommand";
import {
  DeleteArchiveCommandInput,
  DeleteArchiveCommandOutput,
} from "./commands/DeleteArchiveCommand";
import {
  DeleteConnectionCommandInput,
  DeleteConnectionCommandOutput,
} from "./commands/DeleteConnectionCommand";
import {
  DeleteEndpointCommandInput,
  DeleteEndpointCommandOutput,
} from "./commands/DeleteEndpointCommand";
import {
  DeleteEventBusCommandInput,
  DeleteEventBusCommandOutput,
} from "./commands/DeleteEventBusCommand";
import {
  DeletePartnerEventSourceCommandInput,
  DeletePartnerEventSourceCommandOutput,
} from "./commands/DeletePartnerEventSourceCommand";
import {
  DeleteRuleCommandInput,
  DeleteRuleCommandOutput,
} from "./commands/DeleteRuleCommand";
import {
  DescribeApiDestinationCommandInput,
  DescribeApiDestinationCommandOutput,
} from "./commands/DescribeApiDestinationCommand";
import {
  DescribeArchiveCommandInput,
  DescribeArchiveCommandOutput,
} from "./commands/DescribeArchiveCommand";
import {
  DescribeConnectionCommandInput,
  DescribeConnectionCommandOutput,
} from "./commands/DescribeConnectionCommand";
import {
  DescribeEndpointCommandInput,
  DescribeEndpointCommandOutput,
} from "./commands/DescribeEndpointCommand";
import {
  DescribeEventBusCommandInput,
  DescribeEventBusCommandOutput,
} from "./commands/DescribeEventBusCommand";
import {
  DescribeEventSourceCommandInput,
  DescribeEventSourceCommandOutput,
} from "./commands/DescribeEventSourceCommand";
import {
  DescribePartnerEventSourceCommandInput,
  DescribePartnerEventSourceCommandOutput,
} from "./commands/DescribePartnerEventSourceCommand";
import {
  DescribeReplayCommandInput,
  DescribeReplayCommandOutput,
} from "./commands/DescribeReplayCommand";
import {
  DescribeRuleCommandInput,
  DescribeRuleCommandOutput,
} from "./commands/DescribeRuleCommand";
import {
  DisableRuleCommandInput,
  DisableRuleCommandOutput,
} from "./commands/DisableRuleCommand";
import {
  EnableRuleCommandInput,
  EnableRuleCommandOutput,
} from "./commands/EnableRuleCommand";
import {
  ListApiDestinationsCommandInput,
  ListApiDestinationsCommandOutput,
} from "./commands/ListApiDestinationsCommand";
import {
  ListArchivesCommandInput,
  ListArchivesCommandOutput,
} from "./commands/ListArchivesCommand";
import {
  ListConnectionsCommandInput,
  ListConnectionsCommandOutput,
} from "./commands/ListConnectionsCommand";
import {
  ListEndpointsCommandInput,
  ListEndpointsCommandOutput,
} from "./commands/ListEndpointsCommand";
import {
  ListEventBusesCommandInput,
  ListEventBusesCommandOutput,
} from "./commands/ListEventBusesCommand";
import {
  ListEventSourcesCommandInput,
  ListEventSourcesCommandOutput,
} from "./commands/ListEventSourcesCommand";
import {
  ListPartnerEventSourceAccountsCommandInput,
  ListPartnerEventSourceAccountsCommandOutput,
} from "./commands/ListPartnerEventSourceAccountsCommand";
import {
  ListPartnerEventSourcesCommandInput,
  ListPartnerEventSourcesCommandOutput,
} from "./commands/ListPartnerEventSourcesCommand";
import {
  ListReplaysCommandInput,
  ListReplaysCommandOutput,
} from "./commands/ListReplaysCommand";
import {
  ListRuleNamesByTargetCommandInput,
  ListRuleNamesByTargetCommandOutput,
} from "./commands/ListRuleNamesByTargetCommand";
import {
  ListRulesCommandInput,
  ListRulesCommandOutput,
} from "./commands/ListRulesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListTargetsByRuleCommandInput,
  ListTargetsByRuleCommandOutput,
} from "./commands/ListTargetsByRuleCommand";
import {
  PutEventsCommandInput,
  PutEventsCommandOutput,
} from "./commands/PutEventsCommand";
import {
  PutPartnerEventsCommandInput,
  PutPartnerEventsCommandOutput,
} from "./commands/PutPartnerEventsCommand";
import {
  PutPermissionCommandInput,
  PutPermissionCommandOutput,
} from "./commands/PutPermissionCommand";
import {
  PutRuleCommandInput,
  PutRuleCommandOutput,
} from "./commands/PutRuleCommand";
import {
  PutTargetsCommandInput,
  PutTargetsCommandOutput,
} from "./commands/PutTargetsCommand";
import {
  RemovePermissionCommandInput,
  RemovePermissionCommandOutput,
} from "./commands/RemovePermissionCommand";
import {
  RemoveTargetsCommandInput,
  RemoveTargetsCommandOutput,
} from "./commands/RemoveTargetsCommand";
import {
  StartReplayCommandInput,
  StartReplayCommandOutput,
} from "./commands/StartReplayCommand";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput,
} from "./commands/TagResourceCommand";
import {
  TestEventPatternCommandInput,
  TestEventPatternCommandOutput,
} from "./commands/TestEventPatternCommand";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateApiDestinationCommandInput,
  UpdateApiDestinationCommandOutput,
} from "./commands/UpdateApiDestinationCommand";
import {
  UpdateArchiveCommandInput,
  UpdateArchiveCommandOutput,
} from "./commands/UpdateArchiveCommand";
import {
  UpdateConnectionCommandInput,
  UpdateConnectionCommandOutput,
} from "./commands/UpdateConnectionCommand";
import {
  UpdateEndpointCommandInput,
  UpdateEndpointCommandOutput,
} from "./commands/UpdateEndpointCommand";
import { EventBridgeClient } from "./EventBridgeClient";
export interface EventBridge {
  activateEventSource(
    args: ActivateEventSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ActivateEventSourceCommandOutput>;
  activateEventSource(
    args: ActivateEventSourceCommandInput,
    cb: (err: any, data?: ActivateEventSourceCommandOutput) => void
  ): void;
  activateEventSource(
    args: ActivateEventSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ActivateEventSourceCommandOutput) => void
  ): void;
  cancelReplay(
    args: CancelReplayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelReplayCommandOutput>;
  cancelReplay(
    args: CancelReplayCommandInput,
    cb: (err: any, data?: CancelReplayCommandOutput) => void
  ): void;
  cancelReplay(
    args: CancelReplayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelReplayCommandOutput) => void
  ): void;
  createApiDestination(
    args: CreateApiDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateApiDestinationCommandOutput>;
  createApiDestination(
    args: CreateApiDestinationCommandInput,
    cb: (err: any, data?: CreateApiDestinationCommandOutput) => void
  ): void;
  createApiDestination(
    args: CreateApiDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateApiDestinationCommandOutput) => void
  ): void;
  createArchive(
    args: CreateArchiveCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateArchiveCommandOutput>;
  createArchive(
    args: CreateArchiveCommandInput,
    cb: (err: any, data?: CreateArchiveCommandOutput) => void
  ): void;
  createArchive(
    args: CreateArchiveCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateArchiveCommandOutput) => void
  ): void;
  createConnection(
    args: CreateConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateConnectionCommandOutput>;
  createConnection(
    args: CreateConnectionCommandInput,
    cb: (err: any, data?: CreateConnectionCommandOutput) => void
  ): void;
  createConnection(
    args: CreateConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateConnectionCommandOutput) => void
  ): void;
  createEndpoint(
    args: CreateEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEndpointCommandOutput>;
  createEndpoint(
    args: CreateEndpointCommandInput,
    cb: (err: any, data?: CreateEndpointCommandOutput) => void
  ): void;
  createEndpoint(
    args: CreateEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEndpointCommandOutput) => void
  ): void;
  createEventBus(
    args: CreateEventBusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEventBusCommandOutput>;
  createEventBus(
    args: CreateEventBusCommandInput,
    cb: (err: any, data?: CreateEventBusCommandOutput) => void
  ): void;
  createEventBus(
    args: CreateEventBusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEventBusCommandOutput) => void
  ): void;
  createPartnerEventSource(
    args: CreatePartnerEventSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePartnerEventSourceCommandOutput>;
  createPartnerEventSource(
    args: CreatePartnerEventSourceCommandInput,
    cb: (err: any, data?: CreatePartnerEventSourceCommandOutput) => void
  ): void;
  createPartnerEventSource(
    args: CreatePartnerEventSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePartnerEventSourceCommandOutput) => void
  ): void;
  deactivateEventSource(
    args: DeactivateEventSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeactivateEventSourceCommandOutput>;
  deactivateEventSource(
    args: DeactivateEventSourceCommandInput,
    cb: (err: any, data?: DeactivateEventSourceCommandOutput) => void
  ): void;
  deactivateEventSource(
    args: DeactivateEventSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeactivateEventSourceCommandOutput) => void
  ): void;
  deauthorizeConnection(
    args: DeauthorizeConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeauthorizeConnectionCommandOutput>;
  deauthorizeConnection(
    args: DeauthorizeConnectionCommandInput,
    cb: (err: any, data?: DeauthorizeConnectionCommandOutput) => void
  ): void;
  deauthorizeConnection(
    args: DeauthorizeConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeauthorizeConnectionCommandOutput) => void
  ): void;
  deleteApiDestination(
    args: DeleteApiDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteApiDestinationCommandOutput>;
  deleteApiDestination(
    args: DeleteApiDestinationCommandInput,
    cb: (err: any, data?: DeleteApiDestinationCommandOutput) => void
  ): void;
  deleteApiDestination(
    args: DeleteApiDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteApiDestinationCommandOutput) => void
  ): void;
  deleteArchive(
    args: DeleteArchiveCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteArchiveCommandOutput>;
  deleteArchive(
    args: DeleteArchiveCommandInput,
    cb: (err: any, data?: DeleteArchiveCommandOutput) => void
  ): void;
  deleteArchive(
    args: DeleteArchiveCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteArchiveCommandOutput) => void
  ): void;
  deleteConnection(
    args: DeleteConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteConnectionCommandOutput>;
  deleteConnection(
    args: DeleteConnectionCommandInput,
    cb: (err: any, data?: DeleteConnectionCommandOutput) => void
  ): void;
  deleteConnection(
    args: DeleteConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteConnectionCommandOutput) => void
  ): void;
  deleteEndpoint(
    args: DeleteEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEndpointCommandOutput>;
  deleteEndpoint(
    args: DeleteEndpointCommandInput,
    cb: (err: any, data?: DeleteEndpointCommandOutput) => void
  ): void;
  deleteEndpoint(
    args: DeleteEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEndpointCommandOutput) => void
  ): void;
  deleteEventBus(
    args: DeleteEventBusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEventBusCommandOutput>;
  deleteEventBus(
    args: DeleteEventBusCommandInput,
    cb: (err: any, data?: DeleteEventBusCommandOutput) => void
  ): void;
  deleteEventBus(
    args: DeleteEventBusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEventBusCommandOutput) => void
  ): void;
  deletePartnerEventSource(
    args: DeletePartnerEventSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePartnerEventSourceCommandOutput>;
  deletePartnerEventSource(
    args: DeletePartnerEventSourceCommandInput,
    cb: (err: any, data?: DeletePartnerEventSourceCommandOutput) => void
  ): void;
  deletePartnerEventSource(
    args: DeletePartnerEventSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePartnerEventSourceCommandOutput) => void
  ): void;
  deleteRule(
    args: DeleteRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRuleCommandOutput>;
  deleteRule(
    args: DeleteRuleCommandInput,
    cb: (err: any, data?: DeleteRuleCommandOutput) => void
  ): void;
  deleteRule(
    args: DeleteRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRuleCommandOutput) => void
  ): void;
  describeApiDestination(
    args: DescribeApiDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeApiDestinationCommandOutput>;
  describeApiDestination(
    args: DescribeApiDestinationCommandInput,
    cb: (err: any, data?: DescribeApiDestinationCommandOutput) => void
  ): void;
  describeApiDestination(
    args: DescribeApiDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeApiDestinationCommandOutput) => void
  ): void;
  describeArchive(
    args: DescribeArchiveCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeArchiveCommandOutput>;
  describeArchive(
    args: DescribeArchiveCommandInput,
    cb: (err: any, data?: DescribeArchiveCommandOutput) => void
  ): void;
  describeArchive(
    args: DescribeArchiveCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeArchiveCommandOutput) => void
  ): void;
  describeConnection(
    args: DescribeConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeConnectionCommandOutput>;
  describeConnection(
    args: DescribeConnectionCommandInput,
    cb: (err: any, data?: DescribeConnectionCommandOutput) => void
  ): void;
  describeConnection(
    args: DescribeConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeConnectionCommandOutput) => void
  ): void;
  describeEndpoint(
    args: DescribeEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEndpointCommandOutput>;
  describeEndpoint(
    args: DescribeEndpointCommandInput,
    cb: (err: any, data?: DescribeEndpointCommandOutput) => void
  ): void;
  describeEndpoint(
    args: DescribeEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEndpointCommandOutput) => void
  ): void;
  describeEventBus(
    args: DescribeEventBusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEventBusCommandOutput>;
  describeEventBus(
    args: DescribeEventBusCommandInput,
    cb: (err: any, data?: DescribeEventBusCommandOutput) => void
  ): void;
  describeEventBus(
    args: DescribeEventBusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEventBusCommandOutput) => void
  ): void;
  describeEventSource(
    args: DescribeEventSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEventSourceCommandOutput>;
  describeEventSource(
    args: DescribeEventSourceCommandInput,
    cb: (err: any, data?: DescribeEventSourceCommandOutput) => void
  ): void;
  describeEventSource(
    args: DescribeEventSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEventSourceCommandOutput) => void
  ): void;
  describePartnerEventSource(
    args: DescribePartnerEventSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePartnerEventSourceCommandOutput>;
  describePartnerEventSource(
    args: DescribePartnerEventSourceCommandInput,
    cb: (err: any, data?: DescribePartnerEventSourceCommandOutput) => void
  ): void;
  describePartnerEventSource(
    args: DescribePartnerEventSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePartnerEventSourceCommandOutput) => void
  ): void;
  describeReplay(
    args: DescribeReplayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeReplayCommandOutput>;
  describeReplay(
    args: DescribeReplayCommandInput,
    cb: (err: any, data?: DescribeReplayCommandOutput) => void
  ): void;
  describeReplay(
    args: DescribeReplayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeReplayCommandOutput) => void
  ): void;
  describeRule(
    args: DescribeRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRuleCommandOutput>;
  describeRule(
    args: DescribeRuleCommandInput,
    cb: (err: any, data?: DescribeRuleCommandOutput) => void
  ): void;
  describeRule(
    args: DescribeRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRuleCommandOutput) => void
  ): void;
  disableRule(
    args: DisableRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisableRuleCommandOutput>;
  disableRule(
    args: DisableRuleCommandInput,
    cb: (err: any, data?: DisableRuleCommandOutput) => void
  ): void;
  disableRule(
    args: DisableRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableRuleCommandOutput) => void
  ): void;
  enableRule(
    args: EnableRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnableRuleCommandOutput>;
  enableRule(
    args: EnableRuleCommandInput,
    cb: (err: any, data?: EnableRuleCommandOutput) => void
  ): void;
  enableRule(
    args: EnableRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableRuleCommandOutput) => void
  ): void;
  listApiDestinations(
    args: ListApiDestinationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListApiDestinationsCommandOutput>;
  listApiDestinations(
    args: ListApiDestinationsCommandInput,
    cb: (err: any, data?: ListApiDestinationsCommandOutput) => void
  ): void;
  listApiDestinations(
    args: ListApiDestinationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListApiDestinationsCommandOutput) => void
  ): void;
  listArchives(
    args: ListArchivesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListArchivesCommandOutput>;
  listArchives(
    args: ListArchivesCommandInput,
    cb: (err: any, data?: ListArchivesCommandOutput) => void
  ): void;
  listArchives(
    args: ListArchivesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListArchivesCommandOutput) => void
  ): void;
  listConnections(
    args: ListConnectionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListConnectionsCommandOutput>;
  listConnections(
    args: ListConnectionsCommandInput,
    cb: (err: any, data?: ListConnectionsCommandOutput) => void
  ): void;
  listConnections(
    args: ListConnectionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListConnectionsCommandOutput) => void
  ): void;
  listEndpoints(
    args: ListEndpointsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEndpointsCommandOutput>;
  listEndpoints(
    args: ListEndpointsCommandInput,
    cb: (err: any, data?: ListEndpointsCommandOutput) => void
  ): void;
  listEndpoints(
    args: ListEndpointsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEndpointsCommandOutput) => void
  ): void;
  listEventBuses(
    args: ListEventBusesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEventBusesCommandOutput>;
  listEventBuses(
    args: ListEventBusesCommandInput,
    cb: (err: any, data?: ListEventBusesCommandOutput) => void
  ): void;
  listEventBuses(
    args: ListEventBusesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEventBusesCommandOutput) => void
  ): void;
  listEventSources(
    args: ListEventSourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEventSourcesCommandOutput>;
  listEventSources(
    args: ListEventSourcesCommandInput,
    cb: (err: any, data?: ListEventSourcesCommandOutput) => void
  ): void;
  listEventSources(
    args: ListEventSourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEventSourcesCommandOutput) => void
  ): void;
  listPartnerEventSourceAccounts(
    args: ListPartnerEventSourceAccountsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPartnerEventSourceAccountsCommandOutput>;
  listPartnerEventSourceAccounts(
    args: ListPartnerEventSourceAccountsCommandInput,
    cb: (err: any, data?: ListPartnerEventSourceAccountsCommandOutput) => void
  ): void;
  listPartnerEventSourceAccounts(
    args: ListPartnerEventSourceAccountsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPartnerEventSourceAccountsCommandOutput) => void
  ): void;
  listPartnerEventSources(
    args: ListPartnerEventSourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPartnerEventSourcesCommandOutput>;
  listPartnerEventSources(
    args: ListPartnerEventSourcesCommandInput,
    cb: (err: any, data?: ListPartnerEventSourcesCommandOutput) => void
  ): void;
  listPartnerEventSources(
    args: ListPartnerEventSourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPartnerEventSourcesCommandOutput) => void
  ): void;
  listReplays(
    args: ListReplaysCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListReplaysCommandOutput>;
  listReplays(
    args: ListReplaysCommandInput,
    cb: (err: any, data?: ListReplaysCommandOutput) => void
  ): void;
  listReplays(
    args: ListReplaysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListReplaysCommandOutput) => void
  ): void;
  listRuleNamesByTarget(
    args: ListRuleNamesByTargetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRuleNamesByTargetCommandOutput>;
  listRuleNamesByTarget(
    args: ListRuleNamesByTargetCommandInput,
    cb: (err: any, data?: ListRuleNamesByTargetCommandOutput) => void
  ): void;
  listRuleNamesByTarget(
    args: ListRuleNamesByTargetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRuleNamesByTargetCommandOutput) => void
  ): void;
  listRules(
    args: ListRulesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRulesCommandOutput>;
  listRules(
    args: ListRulesCommandInput,
    cb: (err: any, data?: ListRulesCommandOutput) => void
  ): void;
  listRules(
    args: ListRulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRulesCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTargetsByRule(
    args: ListTargetsByRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTargetsByRuleCommandOutput>;
  listTargetsByRule(
    args: ListTargetsByRuleCommandInput,
    cb: (err: any, data?: ListTargetsByRuleCommandOutput) => void
  ): void;
  listTargetsByRule(
    args: ListTargetsByRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTargetsByRuleCommandOutput) => void
  ): void;
  putEvents(
    args: PutEventsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutEventsCommandOutput>;
  putEvents(
    args: PutEventsCommandInput,
    cb: (err: any, data?: PutEventsCommandOutput) => void
  ): void;
  putEvents(
    args: PutEventsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutEventsCommandOutput) => void
  ): void;
  putPartnerEvents(
    args: PutPartnerEventsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutPartnerEventsCommandOutput>;
  putPartnerEvents(
    args: PutPartnerEventsCommandInput,
    cb: (err: any, data?: PutPartnerEventsCommandOutput) => void
  ): void;
  putPartnerEvents(
    args: PutPartnerEventsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutPartnerEventsCommandOutput) => void
  ): void;
  putPermission(
    args: PutPermissionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutPermissionCommandOutput>;
  putPermission(
    args: PutPermissionCommandInput,
    cb: (err: any, data?: PutPermissionCommandOutput) => void
  ): void;
  putPermission(
    args: PutPermissionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutPermissionCommandOutput) => void
  ): void;
  putRule(
    args: PutRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutRuleCommandOutput>;
  putRule(
    args: PutRuleCommandInput,
    cb: (err: any, data?: PutRuleCommandOutput) => void
  ): void;
  putRule(
    args: PutRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutRuleCommandOutput) => void
  ): void;
  putTargets(
    args: PutTargetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutTargetsCommandOutput>;
  putTargets(
    args: PutTargetsCommandInput,
    cb: (err: any, data?: PutTargetsCommandOutput) => void
  ): void;
  putTargets(
    args: PutTargetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutTargetsCommandOutput) => void
  ): void;
  removePermission(
    args: RemovePermissionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemovePermissionCommandOutput>;
  removePermission(
    args: RemovePermissionCommandInput,
    cb: (err: any, data?: RemovePermissionCommandOutput) => void
  ): void;
  removePermission(
    args: RemovePermissionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemovePermissionCommandOutput) => void
  ): void;
  removeTargets(
    args: RemoveTargetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveTargetsCommandOutput>;
  removeTargets(
    args: RemoveTargetsCommandInput,
    cb: (err: any, data?: RemoveTargetsCommandOutput) => void
  ): void;
  removeTargets(
    args: RemoveTargetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveTargetsCommandOutput) => void
  ): void;
  startReplay(
    args: StartReplayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartReplayCommandOutput>;
  startReplay(
    args: StartReplayCommandInput,
    cb: (err: any, data?: StartReplayCommandOutput) => void
  ): void;
  startReplay(
    args: StartReplayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartReplayCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  testEventPattern(
    args: TestEventPatternCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TestEventPatternCommandOutput>;
  testEventPattern(
    args: TestEventPatternCommandInput,
    cb: (err: any, data?: TestEventPatternCommandOutput) => void
  ): void;
  testEventPattern(
    args: TestEventPatternCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TestEventPatternCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  updateApiDestination(
    args: UpdateApiDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateApiDestinationCommandOutput>;
  updateApiDestination(
    args: UpdateApiDestinationCommandInput,
    cb: (err: any, data?: UpdateApiDestinationCommandOutput) => void
  ): void;
  updateApiDestination(
    args: UpdateApiDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateApiDestinationCommandOutput) => void
  ): void;
  updateArchive(
    args: UpdateArchiveCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateArchiveCommandOutput>;
  updateArchive(
    args: UpdateArchiveCommandInput,
    cb: (err: any, data?: UpdateArchiveCommandOutput) => void
  ): void;
  updateArchive(
    args: UpdateArchiveCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateArchiveCommandOutput) => void
  ): void;
  updateConnection(
    args: UpdateConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateConnectionCommandOutput>;
  updateConnection(
    args: UpdateConnectionCommandInput,
    cb: (err: any, data?: UpdateConnectionCommandOutput) => void
  ): void;
  updateConnection(
    args: UpdateConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateConnectionCommandOutput) => void
  ): void;
  updateEndpoint(
    args: UpdateEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateEndpointCommandOutput>;
  updateEndpoint(
    args: UpdateEndpointCommandInput,
    cb: (err: any, data?: UpdateEndpointCommandOutput) => void
  ): void;
  updateEndpoint(
    args: UpdateEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateEndpointCommandOutput) => void
  ): void;
}
export declare class EventBridge
  extends EventBridgeClient
  implements EventBridge {}
