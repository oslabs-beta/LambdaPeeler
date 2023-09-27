"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DynamoDB = void 0;
const smithy_client_1 = require("@smithy/smithy-client");
const BatchExecuteStatementCommand_1 = require("./commands/BatchExecuteStatementCommand");
const BatchGetItemCommand_1 = require("./commands/BatchGetItemCommand");
const BatchWriteItemCommand_1 = require("./commands/BatchWriteItemCommand");
const CreateBackupCommand_1 = require("./commands/CreateBackupCommand");
const CreateGlobalTableCommand_1 = require("./commands/CreateGlobalTableCommand");
const CreateTableCommand_1 = require("./commands/CreateTableCommand");
const DeleteBackupCommand_1 = require("./commands/DeleteBackupCommand");
const DeleteItemCommand_1 = require("./commands/DeleteItemCommand");
const DeleteTableCommand_1 = require("./commands/DeleteTableCommand");
const DescribeBackupCommand_1 = require("./commands/DescribeBackupCommand");
const DescribeContinuousBackupsCommand_1 = require("./commands/DescribeContinuousBackupsCommand");
const DescribeContributorInsightsCommand_1 = require("./commands/DescribeContributorInsightsCommand");
const DescribeEndpointsCommand_1 = require("./commands/DescribeEndpointsCommand");
const DescribeExportCommand_1 = require("./commands/DescribeExportCommand");
const DescribeGlobalTableCommand_1 = require("./commands/DescribeGlobalTableCommand");
const DescribeGlobalTableSettingsCommand_1 = require("./commands/DescribeGlobalTableSettingsCommand");
const DescribeImportCommand_1 = require("./commands/DescribeImportCommand");
const DescribeKinesisStreamingDestinationCommand_1 = require("./commands/DescribeKinesisStreamingDestinationCommand");
const DescribeLimitsCommand_1 = require("./commands/DescribeLimitsCommand");
const DescribeTableCommand_1 = require("./commands/DescribeTableCommand");
const DescribeTableReplicaAutoScalingCommand_1 = require("./commands/DescribeTableReplicaAutoScalingCommand");
const DescribeTimeToLiveCommand_1 = require("./commands/DescribeTimeToLiveCommand");
const DisableKinesisStreamingDestinationCommand_1 = require("./commands/DisableKinesisStreamingDestinationCommand");
const EnableKinesisStreamingDestinationCommand_1 = require("./commands/EnableKinesisStreamingDestinationCommand");
const ExecuteStatementCommand_1 = require("./commands/ExecuteStatementCommand");
const ExecuteTransactionCommand_1 = require("./commands/ExecuteTransactionCommand");
const ExportTableToPointInTimeCommand_1 = require("./commands/ExportTableToPointInTimeCommand");
const GetItemCommand_1 = require("./commands/GetItemCommand");
const ImportTableCommand_1 = require("./commands/ImportTableCommand");
const ListBackupsCommand_1 = require("./commands/ListBackupsCommand");
const ListContributorInsightsCommand_1 = require("./commands/ListContributorInsightsCommand");
const ListExportsCommand_1 = require("./commands/ListExportsCommand");
const ListGlobalTablesCommand_1 = require("./commands/ListGlobalTablesCommand");
const ListImportsCommand_1 = require("./commands/ListImportsCommand");
const ListTablesCommand_1 = require("./commands/ListTablesCommand");
const ListTagsOfResourceCommand_1 = require("./commands/ListTagsOfResourceCommand");
const PutItemCommand_1 = require("./commands/PutItemCommand");
const QueryCommand_1 = require("./commands/QueryCommand");
const RestoreTableFromBackupCommand_1 = require("./commands/RestoreTableFromBackupCommand");
const RestoreTableToPointInTimeCommand_1 = require("./commands/RestoreTableToPointInTimeCommand");
const ScanCommand_1 = require("./commands/ScanCommand");
const TagResourceCommand_1 = require("./commands/TagResourceCommand");
const TransactGetItemsCommand_1 = require("./commands/TransactGetItemsCommand");
const TransactWriteItemsCommand_1 = require("./commands/TransactWriteItemsCommand");
const UntagResourceCommand_1 = require("./commands/UntagResourceCommand");
const UpdateContinuousBackupsCommand_1 = require("./commands/UpdateContinuousBackupsCommand");
const UpdateContributorInsightsCommand_1 = require("./commands/UpdateContributorInsightsCommand");
const UpdateGlobalTableCommand_1 = require("./commands/UpdateGlobalTableCommand");
const UpdateGlobalTableSettingsCommand_1 = require("./commands/UpdateGlobalTableSettingsCommand");
const UpdateItemCommand_1 = require("./commands/UpdateItemCommand");
const UpdateTableCommand_1 = require("./commands/UpdateTableCommand");
const UpdateTableReplicaAutoScalingCommand_1 = require("./commands/UpdateTableReplicaAutoScalingCommand");
const UpdateTimeToLiveCommand_1 = require("./commands/UpdateTimeToLiveCommand");
const DynamoDBClient_1 = require("./DynamoDBClient");
const commands = {
    BatchExecuteStatementCommand: BatchExecuteStatementCommand_1.BatchExecuteStatementCommand,
    BatchGetItemCommand: BatchGetItemCommand_1.BatchGetItemCommand,
    BatchWriteItemCommand: BatchWriteItemCommand_1.BatchWriteItemCommand,
    CreateBackupCommand: CreateBackupCommand_1.CreateBackupCommand,
    CreateGlobalTableCommand: CreateGlobalTableCommand_1.CreateGlobalTableCommand,
    CreateTableCommand: CreateTableCommand_1.CreateTableCommand,
    DeleteBackupCommand: DeleteBackupCommand_1.DeleteBackupCommand,
    DeleteItemCommand: DeleteItemCommand_1.DeleteItemCommand,
    DeleteTableCommand: DeleteTableCommand_1.DeleteTableCommand,
    DescribeBackupCommand: DescribeBackupCommand_1.DescribeBackupCommand,
    DescribeContinuousBackupsCommand: DescribeContinuousBackupsCommand_1.DescribeContinuousBackupsCommand,
    DescribeContributorInsightsCommand: DescribeContributorInsightsCommand_1.DescribeContributorInsightsCommand,
    DescribeEndpointsCommand: DescribeEndpointsCommand_1.DescribeEndpointsCommand,
    DescribeExportCommand: DescribeExportCommand_1.DescribeExportCommand,
    DescribeGlobalTableCommand: DescribeGlobalTableCommand_1.DescribeGlobalTableCommand,
    DescribeGlobalTableSettingsCommand: DescribeGlobalTableSettingsCommand_1.DescribeGlobalTableSettingsCommand,
    DescribeImportCommand: DescribeImportCommand_1.DescribeImportCommand,
    DescribeKinesisStreamingDestinationCommand: DescribeKinesisStreamingDestinationCommand_1.DescribeKinesisStreamingDestinationCommand,
    DescribeLimitsCommand: DescribeLimitsCommand_1.DescribeLimitsCommand,
    DescribeTableCommand: DescribeTableCommand_1.DescribeTableCommand,
    DescribeTableReplicaAutoScalingCommand: DescribeTableReplicaAutoScalingCommand_1.DescribeTableReplicaAutoScalingCommand,
    DescribeTimeToLiveCommand: DescribeTimeToLiveCommand_1.DescribeTimeToLiveCommand,
    DisableKinesisStreamingDestinationCommand: DisableKinesisStreamingDestinationCommand_1.DisableKinesisStreamingDestinationCommand,
    EnableKinesisStreamingDestinationCommand: EnableKinesisStreamingDestinationCommand_1.EnableKinesisStreamingDestinationCommand,
    ExecuteStatementCommand: ExecuteStatementCommand_1.ExecuteStatementCommand,
    ExecuteTransactionCommand: ExecuteTransactionCommand_1.ExecuteTransactionCommand,
    ExportTableToPointInTimeCommand: ExportTableToPointInTimeCommand_1.ExportTableToPointInTimeCommand,
    GetItemCommand: GetItemCommand_1.GetItemCommand,
    ImportTableCommand: ImportTableCommand_1.ImportTableCommand,
    ListBackupsCommand: ListBackupsCommand_1.ListBackupsCommand,
    ListContributorInsightsCommand: ListContributorInsightsCommand_1.ListContributorInsightsCommand,
    ListExportsCommand: ListExportsCommand_1.ListExportsCommand,
    ListGlobalTablesCommand: ListGlobalTablesCommand_1.ListGlobalTablesCommand,
    ListImportsCommand: ListImportsCommand_1.ListImportsCommand,
    ListTablesCommand: ListTablesCommand_1.ListTablesCommand,
    ListTagsOfResourceCommand: ListTagsOfResourceCommand_1.ListTagsOfResourceCommand,
    PutItemCommand: PutItemCommand_1.PutItemCommand,
    QueryCommand: QueryCommand_1.QueryCommand,
    RestoreTableFromBackupCommand: RestoreTableFromBackupCommand_1.RestoreTableFromBackupCommand,
    RestoreTableToPointInTimeCommand: RestoreTableToPointInTimeCommand_1.RestoreTableToPointInTimeCommand,
    ScanCommand: ScanCommand_1.ScanCommand,
    TagResourceCommand: TagResourceCommand_1.TagResourceCommand,
    TransactGetItemsCommand: TransactGetItemsCommand_1.TransactGetItemsCommand,
    TransactWriteItemsCommand: TransactWriteItemsCommand_1.TransactWriteItemsCommand,
    UntagResourceCommand: UntagResourceCommand_1.UntagResourceCommand,
    UpdateContinuousBackupsCommand: UpdateContinuousBackupsCommand_1.UpdateContinuousBackupsCommand,
    UpdateContributorInsightsCommand: UpdateContributorInsightsCommand_1.UpdateContributorInsightsCommand,
    UpdateGlobalTableCommand: UpdateGlobalTableCommand_1.UpdateGlobalTableCommand,
    UpdateGlobalTableSettingsCommand: UpdateGlobalTableSettingsCommand_1.UpdateGlobalTableSettingsCommand,
    UpdateItemCommand: UpdateItemCommand_1.UpdateItemCommand,
    UpdateTableCommand: UpdateTableCommand_1.UpdateTableCommand,
    UpdateTableReplicaAutoScalingCommand: UpdateTableReplicaAutoScalingCommand_1.UpdateTableReplicaAutoScalingCommand,
    UpdateTimeToLiveCommand: UpdateTimeToLiveCommand_1.UpdateTimeToLiveCommand,
};
class DynamoDB extends DynamoDBClient_1.DynamoDBClient {
}
exports.DynamoDB = DynamoDB;
(0, smithy_client_1.createAggregatedClient)(commands, DynamoDB);
