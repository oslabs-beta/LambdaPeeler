import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { SerdeContext as __SerdeContext } from "@smithy/types";
import { ActivateEventSourceCommandInput, ActivateEventSourceCommandOutput } from "../commands/ActivateEventSourceCommand";
import { CancelReplayCommandInput, CancelReplayCommandOutput } from "../commands/CancelReplayCommand";
import { CreateApiDestinationCommandInput, CreateApiDestinationCommandOutput } from "../commands/CreateApiDestinationCommand";
import { CreateArchiveCommandInput, CreateArchiveCommandOutput } from "../commands/CreateArchiveCommand";
import { CreateConnectionCommandInput, CreateConnectionCommandOutput } from "../commands/CreateConnectionCommand";
import { CreateEndpointCommandInput, CreateEndpointCommandOutput } from "../commands/CreateEndpointCommand";
import { CreateEventBusCommandInput, CreateEventBusCommandOutput } from "../commands/CreateEventBusCommand";
import { CreatePartnerEventSourceCommandInput, CreatePartnerEventSourceCommandOutput } from "../commands/CreatePartnerEventSourceCommand";
import { DeactivateEventSourceCommandInput, DeactivateEventSourceCommandOutput } from "../commands/DeactivateEventSourceCommand";
import { DeauthorizeConnectionCommandInput, DeauthorizeConnectionCommandOutput } from "../commands/DeauthorizeConnectionCommand";
import { DeleteApiDestinationCommandInput, DeleteApiDestinationCommandOutput } from "../commands/DeleteApiDestinationCommand";
import { DeleteArchiveCommandInput, DeleteArchiveCommandOutput } from "../commands/DeleteArchiveCommand";
import { DeleteConnectionCommandInput, DeleteConnectionCommandOutput } from "../commands/DeleteConnectionCommand";
import { DeleteEndpointCommandInput, DeleteEndpointCommandOutput } from "../commands/DeleteEndpointCommand";
import { DeleteEventBusCommandInput, DeleteEventBusCommandOutput } from "../commands/DeleteEventBusCommand";
import { DeletePartnerEventSourceCommandInput, DeletePartnerEventSourceCommandOutput } from "../commands/DeletePartnerEventSourceCommand";
import { DeleteRuleCommandInput, DeleteRuleCommandOutput } from "../commands/DeleteRuleCommand";
import { DescribeApiDestinationCommandInput, DescribeApiDestinationCommandOutput } from "../commands/DescribeApiDestinationCommand";
import { DescribeArchiveCommandInput, DescribeArchiveCommandOutput } from "../commands/DescribeArchiveCommand";
import { DescribeConnectionCommandInput, DescribeConnectionCommandOutput } from "../commands/DescribeConnectionCommand";
import { DescribeEndpointCommandInput, DescribeEndpointCommandOutput } from "../commands/DescribeEndpointCommand";
import { DescribeEventBusCommandInput, DescribeEventBusCommandOutput } from "../commands/DescribeEventBusCommand";
import { DescribeEventSourceCommandInput, DescribeEventSourceCommandOutput } from "../commands/DescribeEventSourceCommand";
import { DescribePartnerEventSourceCommandInput, DescribePartnerEventSourceCommandOutput } from "../commands/DescribePartnerEventSourceCommand";
import { DescribeReplayCommandInput, DescribeReplayCommandOutput } from "../commands/DescribeReplayCommand";
import { DescribeRuleCommandInput, DescribeRuleCommandOutput } from "../commands/DescribeRuleCommand";
import { DisableRuleCommandInput, DisableRuleCommandOutput } from "../commands/DisableRuleCommand";
import { EnableRuleCommandInput, EnableRuleCommandOutput } from "../commands/EnableRuleCommand";
import { ListApiDestinationsCommandInput, ListApiDestinationsCommandOutput } from "../commands/ListApiDestinationsCommand";
import { ListArchivesCommandInput, ListArchivesCommandOutput } from "../commands/ListArchivesCommand";
import { ListConnectionsCommandInput, ListConnectionsCommandOutput } from "../commands/ListConnectionsCommand";
import { ListEndpointsCommandInput, ListEndpointsCommandOutput } from "../commands/ListEndpointsCommand";
import { ListEventBusesCommandInput, ListEventBusesCommandOutput } from "../commands/ListEventBusesCommand";
import { ListEventSourcesCommandInput, ListEventSourcesCommandOutput } from "../commands/ListEventSourcesCommand";
import { ListPartnerEventSourceAccountsCommandInput, ListPartnerEventSourceAccountsCommandOutput } from "../commands/ListPartnerEventSourceAccountsCommand";
import { ListPartnerEventSourcesCommandInput, ListPartnerEventSourcesCommandOutput } from "../commands/ListPartnerEventSourcesCommand";
import { ListReplaysCommandInput, ListReplaysCommandOutput } from "../commands/ListReplaysCommand";
import { ListRuleNamesByTargetCommandInput, ListRuleNamesByTargetCommandOutput } from "../commands/ListRuleNamesByTargetCommand";
import { ListRulesCommandInput, ListRulesCommandOutput } from "../commands/ListRulesCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "../commands/ListTagsForResourceCommand";
import { ListTargetsByRuleCommandInput, ListTargetsByRuleCommandOutput } from "../commands/ListTargetsByRuleCommand";
import { PutEventsCommandInput, PutEventsCommandOutput } from "../commands/PutEventsCommand";
import { PutPartnerEventsCommandInput, PutPartnerEventsCommandOutput } from "../commands/PutPartnerEventsCommand";
import { PutPermissionCommandInput, PutPermissionCommandOutput } from "../commands/PutPermissionCommand";
import { PutRuleCommandInput, PutRuleCommandOutput } from "../commands/PutRuleCommand";
import { PutTargetsCommandInput, PutTargetsCommandOutput } from "../commands/PutTargetsCommand";
import { RemovePermissionCommandInput, RemovePermissionCommandOutput } from "../commands/RemovePermissionCommand";
import { RemoveTargetsCommandInput, RemoveTargetsCommandOutput } from "../commands/RemoveTargetsCommand";
import { StartReplayCommandInput, StartReplayCommandOutput } from "../commands/StartReplayCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { TestEventPatternCommandInput, TestEventPatternCommandOutput } from "../commands/TestEventPatternCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateApiDestinationCommandInput, UpdateApiDestinationCommandOutput } from "../commands/UpdateApiDestinationCommand";
import { UpdateArchiveCommandInput, UpdateArchiveCommandOutput } from "../commands/UpdateArchiveCommand";
import { UpdateConnectionCommandInput, UpdateConnectionCommandOutput } from "../commands/UpdateConnectionCommand";
import { UpdateEndpointCommandInput, UpdateEndpointCommandOutput } from "../commands/UpdateEndpointCommand";
/**
 * serializeAws_json1_1ActivateEventSourceCommand
 */
export declare const se_ActivateEventSourceCommand: (input: ActivateEventSourceCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1CancelReplayCommand
 */
export declare const se_CancelReplayCommand: (input: CancelReplayCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1CreateApiDestinationCommand
 */
export declare const se_CreateApiDestinationCommand: (input: CreateApiDestinationCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1CreateArchiveCommand
 */
export declare const se_CreateArchiveCommand: (input: CreateArchiveCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1CreateConnectionCommand
 */
export declare const se_CreateConnectionCommand: (input: CreateConnectionCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1CreateEndpointCommand
 */
export declare const se_CreateEndpointCommand: (input: CreateEndpointCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1CreateEventBusCommand
 */
export declare const se_CreateEventBusCommand: (input: CreateEventBusCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1CreatePartnerEventSourceCommand
 */
export declare const se_CreatePartnerEventSourceCommand: (input: CreatePartnerEventSourceCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1DeactivateEventSourceCommand
 */
export declare const se_DeactivateEventSourceCommand: (input: DeactivateEventSourceCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1DeauthorizeConnectionCommand
 */
export declare const se_DeauthorizeConnectionCommand: (input: DeauthorizeConnectionCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1DeleteApiDestinationCommand
 */
export declare const se_DeleteApiDestinationCommand: (input: DeleteApiDestinationCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1DeleteArchiveCommand
 */
export declare const se_DeleteArchiveCommand: (input: DeleteArchiveCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1DeleteConnectionCommand
 */
export declare const se_DeleteConnectionCommand: (input: DeleteConnectionCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1DeleteEndpointCommand
 */
export declare const se_DeleteEndpointCommand: (input: DeleteEndpointCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1DeleteEventBusCommand
 */
export declare const se_DeleteEventBusCommand: (input: DeleteEventBusCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1DeletePartnerEventSourceCommand
 */
export declare const se_DeletePartnerEventSourceCommand: (input: DeletePartnerEventSourceCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1DeleteRuleCommand
 */
export declare const se_DeleteRuleCommand: (input: DeleteRuleCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1DescribeApiDestinationCommand
 */
export declare const se_DescribeApiDestinationCommand: (input: DescribeApiDestinationCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1DescribeArchiveCommand
 */
export declare const se_DescribeArchiveCommand: (input: DescribeArchiveCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1DescribeConnectionCommand
 */
export declare const se_DescribeConnectionCommand: (input: DescribeConnectionCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1DescribeEndpointCommand
 */
export declare const se_DescribeEndpointCommand: (input: DescribeEndpointCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1DescribeEventBusCommand
 */
export declare const se_DescribeEventBusCommand: (input: DescribeEventBusCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1DescribeEventSourceCommand
 */
export declare const se_DescribeEventSourceCommand: (input: DescribeEventSourceCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1DescribePartnerEventSourceCommand
 */
export declare const se_DescribePartnerEventSourceCommand: (input: DescribePartnerEventSourceCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1DescribeReplayCommand
 */
export declare const se_DescribeReplayCommand: (input: DescribeReplayCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1DescribeRuleCommand
 */
export declare const se_DescribeRuleCommand: (input: DescribeRuleCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1DisableRuleCommand
 */
export declare const se_DisableRuleCommand: (input: DisableRuleCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1EnableRuleCommand
 */
export declare const se_EnableRuleCommand: (input: EnableRuleCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1ListApiDestinationsCommand
 */
export declare const se_ListApiDestinationsCommand: (input: ListApiDestinationsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1ListArchivesCommand
 */
export declare const se_ListArchivesCommand: (input: ListArchivesCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1ListConnectionsCommand
 */
export declare const se_ListConnectionsCommand: (input: ListConnectionsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1ListEndpointsCommand
 */
export declare const se_ListEndpointsCommand: (input: ListEndpointsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1ListEventBusesCommand
 */
export declare const se_ListEventBusesCommand: (input: ListEventBusesCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1ListEventSourcesCommand
 */
export declare const se_ListEventSourcesCommand: (input: ListEventSourcesCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1ListPartnerEventSourceAccountsCommand
 */
export declare const se_ListPartnerEventSourceAccountsCommand: (input: ListPartnerEventSourceAccountsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1ListPartnerEventSourcesCommand
 */
export declare const se_ListPartnerEventSourcesCommand: (input: ListPartnerEventSourcesCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1ListReplaysCommand
 */
export declare const se_ListReplaysCommand: (input: ListReplaysCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1ListRuleNamesByTargetCommand
 */
export declare const se_ListRuleNamesByTargetCommand: (input: ListRuleNamesByTargetCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1ListRulesCommand
 */
export declare const se_ListRulesCommand: (input: ListRulesCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1ListTagsForResourceCommand
 */
export declare const se_ListTagsForResourceCommand: (input: ListTagsForResourceCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1ListTargetsByRuleCommand
 */
export declare const se_ListTargetsByRuleCommand: (input: ListTargetsByRuleCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1PutEventsCommand
 */
export declare const se_PutEventsCommand: (input: PutEventsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1PutPartnerEventsCommand
 */
export declare const se_PutPartnerEventsCommand: (input: PutPartnerEventsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1PutPermissionCommand
 */
export declare const se_PutPermissionCommand: (input: PutPermissionCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1PutRuleCommand
 */
export declare const se_PutRuleCommand: (input: PutRuleCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1PutTargetsCommand
 */
export declare const se_PutTargetsCommand: (input: PutTargetsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1RemovePermissionCommand
 */
export declare const se_RemovePermissionCommand: (input: RemovePermissionCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1RemoveTargetsCommand
 */
export declare const se_RemoveTargetsCommand: (input: RemoveTargetsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1StartReplayCommand
 */
export declare const se_StartReplayCommand: (input: StartReplayCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1TagResourceCommand
 */
export declare const se_TagResourceCommand: (input: TagResourceCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1TestEventPatternCommand
 */
export declare const se_TestEventPatternCommand: (input: TestEventPatternCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1UntagResourceCommand
 */
export declare const se_UntagResourceCommand: (input: UntagResourceCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1UpdateApiDestinationCommand
 */
export declare const se_UpdateApiDestinationCommand: (input: UpdateApiDestinationCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1UpdateArchiveCommand
 */
export declare const se_UpdateArchiveCommand: (input: UpdateArchiveCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1UpdateConnectionCommand
 */
export declare const se_UpdateConnectionCommand: (input: UpdateConnectionCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1UpdateEndpointCommand
 */
export declare const se_UpdateEndpointCommand: (input: UpdateEndpointCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * deserializeAws_json1_1ActivateEventSourceCommand
 */
export declare const de_ActivateEventSourceCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ActivateEventSourceCommandOutput>;
/**
 * deserializeAws_json1_1CancelReplayCommand
 */
export declare const de_CancelReplayCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<CancelReplayCommandOutput>;
/**
 * deserializeAws_json1_1CreateApiDestinationCommand
 */
export declare const de_CreateApiDestinationCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<CreateApiDestinationCommandOutput>;
/**
 * deserializeAws_json1_1CreateArchiveCommand
 */
export declare const de_CreateArchiveCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<CreateArchiveCommandOutput>;
/**
 * deserializeAws_json1_1CreateConnectionCommand
 */
export declare const de_CreateConnectionCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<CreateConnectionCommandOutput>;
/**
 * deserializeAws_json1_1CreateEndpointCommand
 */
export declare const de_CreateEndpointCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<CreateEndpointCommandOutput>;
/**
 * deserializeAws_json1_1CreateEventBusCommand
 */
export declare const de_CreateEventBusCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<CreateEventBusCommandOutput>;
/**
 * deserializeAws_json1_1CreatePartnerEventSourceCommand
 */
export declare const de_CreatePartnerEventSourceCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<CreatePartnerEventSourceCommandOutput>;
/**
 * deserializeAws_json1_1DeactivateEventSourceCommand
 */
export declare const de_DeactivateEventSourceCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeactivateEventSourceCommandOutput>;
/**
 * deserializeAws_json1_1DeauthorizeConnectionCommand
 */
export declare const de_DeauthorizeConnectionCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeauthorizeConnectionCommandOutput>;
/**
 * deserializeAws_json1_1DeleteApiDestinationCommand
 */
export declare const de_DeleteApiDestinationCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeleteApiDestinationCommandOutput>;
/**
 * deserializeAws_json1_1DeleteArchiveCommand
 */
export declare const de_DeleteArchiveCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeleteArchiveCommandOutput>;
/**
 * deserializeAws_json1_1DeleteConnectionCommand
 */
export declare const de_DeleteConnectionCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeleteConnectionCommandOutput>;
/**
 * deserializeAws_json1_1DeleteEndpointCommand
 */
export declare const de_DeleteEndpointCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeleteEndpointCommandOutput>;
/**
 * deserializeAws_json1_1DeleteEventBusCommand
 */
export declare const de_DeleteEventBusCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeleteEventBusCommandOutput>;
/**
 * deserializeAws_json1_1DeletePartnerEventSourceCommand
 */
export declare const de_DeletePartnerEventSourceCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeletePartnerEventSourceCommandOutput>;
/**
 * deserializeAws_json1_1DeleteRuleCommand
 */
export declare const de_DeleteRuleCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeleteRuleCommandOutput>;
/**
 * deserializeAws_json1_1DescribeApiDestinationCommand
 */
export declare const de_DescribeApiDestinationCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DescribeApiDestinationCommandOutput>;
/**
 * deserializeAws_json1_1DescribeArchiveCommand
 */
export declare const de_DescribeArchiveCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DescribeArchiveCommandOutput>;
/**
 * deserializeAws_json1_1DescribeConnectionCommand
 */
export declare const de_DescribeConnectionCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DescribeConnectionCommandOutput>;
/**
 * deserializeAws_json1_1DescribeEndpointCommand
 */
export declare const de_DescribeEndpointCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DescribeEndpointCommandOutput>;
/**
 * deserializeAws_json1_1DescribeEventBusCommand
 */
export declare const de_DescribeEventBusCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DescribeEventBusCommandOutput>;
/**
 * deserializeAws_json1_1DescribeEventSourceCommand
 */
export declare const de_DescribeEventSourceCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DescribeEventSourceCommandOutput>;
/**
 * deserializeAws_json1_1DescribePartnerEventSourceCommand
 */
export declare const de_DescribePartnerEventSourceCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DescribePartnerEventSourceCommandOutput>;
/**
 * deserializeAws_json1_1DescribeReplayCommand
 */
export declare const de_DescribeReplayCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DescribeReplayCommandOutput>;
/**
 * deserializeAws_json1_1DescribeRuleCommand
 */
export declare const de_DescribeRuleCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DescribeRuleCommandOutput>;
/**
 * deserializeAws_json1_1DisableRuleCommand
 */
export declare const de_DisableRuleCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DisableRuleCommandOutput>;
/**
 * deserializeAws_json1_1EnableRuleCommand
 */
export declare const de_EnableRuleCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<EnableRuleCommandOutput>;
/**
 * deserializeAws_json1_1ListApiDestinationsCommand
 */
export declare const de_ListApiDestinationsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListApiDestinationsCommandOutput>;
/**
 * deserializeAws_json1_1ListArchivesCommand
 */
export declare const de_ListArchivesCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListArchivesCommandOutput>;
/**
 * deserializeAws_json1_1ListConnectionsCommand
 */
export declare const de_ListConnectionsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListConnectionsCommandOutput>;
/**
 * deserializeAws_json1_1ListEndpointsCommand
 */
export declare const de_ListEndpointsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListEndpointsCommandOutput>;
/**
 * deserializeAws_json1_1ListEventBusesCommand
 */
export declare const de_ListEventBusesCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListEventBusesCommandOutput>;
/**
 * deserializeAws_json1_1ListEventSourcesCommand
 */
export declare const de_ListEventSourcesCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListEventSourcesCommandOutput>;
/**
 * deserializeAws_json1_1ListPartnerEventSourceAccountsCommand
 */
export declare const de_ListPartnerEventSourceAccountsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListPartnerEventSourceAccountsCommandOutput>;
/**
 * deserializeAws_json1_1ListPartnerEventSourcesCommand
 */
export declare const de_ListPartnerEventSourcesCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListPartnerEventSourcesCommandOutput>;
/**
 * deserializeAws_json1_1ListReplaysCommand
 */
export declare const de_ListReplaysCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListReplaysCommandOutput>;
/**
 * deserializeAws_json1_1ListRuleNamesByTargetCommand
 */
export declare const de_ListRuleNamesByTargetCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListRuleNamesByTargetCommandOutput>;
/**
 * deserializeAws_json1_1ListRulesCommand
 */
export declare const de_ListRulesCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListRulesCommandOutput>;
/**
 * deserializeAws_json1_1ListTagsForResourceCommand
 */
export declare const de_ListTagsForResourceCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListTagsForResourceCommandOutput>;
/**
 * deserializeAws_json1_1ListTargetsByRuleCommand
 */
export declare const de_ListTargetsByRuleCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListTargetsByRuleCommandOutput>;
/**
 * deserializeAws_json1_1PutEventsCommand
 */
export declare const de_PutEventsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<PutEventsCommandOutput>;
/**
 * deserializeAws_json1_1PutPartnerEventsCommand
 */
export declare const de_PutPartnerEventsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<PutPartnerEventsCommandOutput>;
/**
 * deserializeAws_json1_1PutPermissionCommand
 */
export declare const de_PutPermissionCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<PutPermissionCommandOutput>;
/**
 * deserializeAws_json1_1PutRuleCommand
 */
export declare const de_PutRuleCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<PutRuleCommandOutput>;
/**
 * deserializeAws_json1_1PutTargetsCommand
 */
export declare const de_PutTargetsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<PutTargetsCommandOutput>;
/**
 * deserializeAws_json1_1RemovePermissionCommand
 */
export declare const de_RemovePermissionCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<RemovePermissionCommandOutput>;
/**
 * deserializeAws_json1_1RemoveTargetsCommand
 */
export declare const de_RemoveTargetsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<RemoveTargetsCommandOutput>;
/**
 * deserializeAws_json1_1StartReplayCommand
 */
export declare const de_StartReplayCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<StartReplayCommandOutput>;
/**
 * deserializeAws_json1_1TagResourceCommand
 */
export declare const de_TagResourceCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<TagResourceCommandOutput>;
/**
 * deserializeAws_json1_1TestEventPatternCommand
 */
export declare const de_TestEventPatternCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<TestEventPatternCommandOutput>;
/**
 * deserializeAws_json1_1UntagResourceCommand
 */
export declare const de_UntagResourceCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<UntagResourceCommandOutput>;
/**
 * deserializeAws_json1_1UpdateApiDestinationCommand
 */
export declare const de_UpdateApiDestinationCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<UpdateApiDestinationCommandOutput>;
/**
 * deserializeAws_json1_1UpdateArchiveCommand
 */
export declare const de_UpdateArchiveCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<UpdateArchiveCommandOutput>;
/**
 * deserializeAws_json1_1UpdateConnectionCommand
 */
export declare const de_UpdateConnectionCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<UpdateConnectionCommandOutput>;
/**
 * deserializeAws_json1_1UpdateEndpointCommand
 */
export declare const de_UpdateEndpointCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<UpdateEndpointCommandOutput>;
