import { z as zod } from "zod";

export type Maybe<T> = T | null;

export interface AccountSettingsActiveFeaturesObject {
  advanced_analytics: boolean;
  agent_forwarding: boolean;
  allow_ccs: boolean;
  allow_email_template_customization: boolean;
  automatic_answers: boolean;
  bcc_archiving: boolean;
  benchmark_opt_out: boolean;
  business_hours: boolean;
  chat: boolean;
  chat_about_my_ticket: boolean;
  csat_reason_code: boolean;
  custom_dkim_domain: boolean;
  customer_context_as_default: boolean;
  customer_satisfaction: boolean;
  dynamic_contents: boolean;
  explore: boolean;
  explore_on_support_ent_plan: boolean;
  explore_on_support_pro_plan: boolean;
  facebook: boolean;
  facebook_login: boolean;
  fallback_composer: boolean;
  forum_analytics: boolean;
  good_data_and_explore: boolean;
  google_login: boolean;
  insights: boolean;
  is_abusive: boolean;
  light_agents: boolean;
  markdown: boolean;
  on_hold_status: boolean;
  rich_content_in_emails: boolean;
  sandbox: boolean;
  satisfaction_prediction: boolean;
  suspended_ticket_notification: boolean;
  ticket_forms: boolean;
  ticket_tagging: boolean;
  topic_suggestion: boolean;
  twitter: boolean;
  twitter_login: boolean;
  user_org_fields: boolean;
  user_tagging: boolean;
  voice: boolean;
}

export interface AccountSettingsAgentObject {
  agent_home: boolean;
  agent_workspace: boolean;
  aw_self_serve_migration_enabled: boolean;
  focus_mode: boolean;
  idle_timeout_enabled: boolean;
  unified_agent_statuses: boolean;
}

export interface AccountSettingsApiObject {
  accepted_api_agreement: boolean;
  api_password_access: string;
  api_token_access: string;
}

export interface AccountSettingsAppsObject {
  create_private: boolean;
  create_public: boolean;
  use: boolean;
}

export interface AccountSettingsBillingObject {
  backend: string;
}

export interface AccountSettingsBrandingObject {
  favicon_url: Maybe<string>;
  header_color: string;
  header_logo_url: Maybe<string>;
  page_background_color: string;
  tab_background_color: string;
  text_color: string;
}

export interface AccountSettingsBrandsObject {
  default_brand_id: number;
  require_brand_on_new_tickets: boolean;
}

export interface AccountSettingsCdnObject {
  cdn_provider: string;
  fallback_cdn_provider: string;
  hosts: {
    name: string;
    url: string;
  }[];
}

export interface AccountSettingsChatObject {
  available: boolean;
  enabled: boolean;
  integrated: boolean;
  maximum_request_count: number;
  welcome_message: string;
}

export interface AccountSettingsCrossSellObject {
  show_chat_tooltip: boolean;
  xsell_source: Maybe<string>;
}

export interface AccountSettingsGooddataAdvancedAnalyticsObject {
  enabled: boolean;
}

export interface AccountSettingsGoogleAppsObject {
  has_google_apps: boolean;
  has_google_apps_admin: boolean;
}

export interface AccountSettingsGroupObject {
  check_group_name_uniqueness: boolean;
}

export interface AccountSettingsLimitsObject {
  attachment_size: number;
}

export interface AccountSettingsLocalizationObject {
  locale_ids: number[];
}

export interface AccountSettingsLotusObject {
  pod_id: number;
  prefer_lotus: boolean;
  reporting: boolean;
}

export interface AccountSettingsMetricsObject {
  account_size: string;
}

export interface AccountSettingsOnboardingObject {
  checklist_onboarding_version: number;
  onboarding_segments: Maybe<string>;
  product_sign_up: Maybe<string>;
}

export interface AccountSettingsRoutingObject {
  autorouting_tag: string;
  enabled: boolean;
  max_email_capacity: number;
  max_messaging_capacity: number;
  reassignment_messaging_enabled: boolean;
  reassignment_messaging_timeout: number;
  reassignment_talk_timeout: number;
}

export interface AccountSettingsRuleObject {
  macro_most_used: boolean;
  macro_order: string;
  skill_based_filtered_views: Record<string, unknown>[];
  using_skill_based_routing: boolean;
}

export interface AccountSettingsSideConversationsObject {
  email_channel: boolean;
  msteams_channel: boolean;
  show_in_context_panel: boolean;
  slack_channel: boolean;
  tickets_channel: boolean;
}

export interface AccountSettingsStatisticsObject {
  forum: boolean;
  rule_usage: boolean;
  search: boolean;
}

export interface AccountSettingsTicketFormObject {
  raw_ticket_forms_instructions: string;
  ticket_forms_instructions: string;
}

export interface AccountSettingsTicketObject {
  accepted_new_collaboration_tos: boolean;
  agent_collision: boolean;
  agent_invitation_enabled: boolean;
  agent_ticket_deletion: boolean;
  allow_group_reset: boolean;
  assign_default_organization: boolean;
  assign_tickets_upon_solve: boolean;
  auto_translation_enabled: boolean;
  auto_updated_ccs_followers_rules: boolean;
  collaboration: boolean;
  comments_public_by_default: boolean;
  email_attachments: boolean;
  emoji_autocompletion: boolean;
  follower_and_email_cc_collaborations: boolean;
  has_color_text: boolean;
  is_first_comment_private_enabled: boolean;
  light_agent_email_ccs_allowed: boolean;
  list_empty_views: boolean;
  list_newest_comments_first: boolean;
  markdown_ticket_comments: boolean;
  maximum_personal_views_to_list: number;
  private_attachments: boolean;
  rich_text_comments: boolean;
  status_hold: boolean;
  tagging: boolean;
  using_skill_based_routing: boolean;
}

export interface AccountSettingsTicketSharingPartnersObject {
  support_addresses: string[];
}

export interface AccountSettingsTwitterObject {
  shorten_url: string;
}

export interface AccountSettingsUserObject {
  agent_created_welcome_emails: boolean;
  end_user_phone_number_validation: boolean;
  have_gravatars_enabled: boolean;
  language_selection: boolean;
  multiple_organizations: boolean;
  tagging: boolean;
  time_zone_selection: boolean;
}

export interface AccountSettingsVoiceObject {
  agent_confirmation_when_forwarding: boolean;
  agent_wrap_up_after_calls: boolean;
  enabled: boolean;
  logging: boolean;
  maximum_queue_size: number;
  maximum_queue_wait_time: number;
  only_during_business_hours: boolean;
  outbound_enabled: boolean;
  recordings_public: boolean;
  uk_mobile_forwarding: boolean;
}

export interface AccountSettingsObject {
  active_features: AccountSettingsActiveFeaturesObject;
  agents: AccountSettingsAgentObject;
  api: AccountSettingsApiObject;
  apps: AccountSettingsAppsObject;
  billing: AccountSettingsBillingObject;
  branding: AccountSettingsBrandingObject;
  brands: AccountSettingsBrandsObject;
  cdn: AccountSettingsCdnObject;
  chat: AccountSettingsChatObject;
  cross_sell: AccountSettingsCrossSellObject;
  gooddata_advanced_analytics: AccountSettingsGooddataAdvancedAnalyticsObject;
  google_apps: AccountSettingsGoogleAppsObject;
  groups: AccountSettingsGroupObject;
  limits: AccountSettingsLimitsObject;
  localization: AccountSettingsLocalizationObject;
  lotus: AccountSettingsLotusObject;
  metrics: AccountSettingsMetricsObject;
  onboarding: AccountSettingsOnboardingObject;
  routing: AccountSettingsRoutingObject;
  rule: AccountSettingsRuleObject;
  side_conversations: AccountSettingsSideConversationsObject;
  statistics: AccountSettingsStatisticsObject;
  ticket_form: AccountSettingsTicketFormObject;
  ticket_sharing_partners: AccountSettingsTicketSharingPartnersObject;
  tickets: AccountSettingsTicketObject;
  twitter: AccountSettingsTwitterObject;
  user: AccountSettingsUserObject;
  voice: AccountSettingsVoiceObject;
}

export interface AccountSettingsResponse {
  settings: AccountSettingsObject;
}

export interface ActionObject {
  field: string;
  value: string;
}

export interface ActionsObject {
  actions: ActionObject[];
}

export interface ActivitiesCountResponse {
  count: {
    refreshed_at: string;
    value: number;
  };
}

export interface AssigneeFieldAssignableAgentObject {
  avatar_url: Maybe<string>;
  id: number;
  name: string;
}

export interface AssigneeFieldAssignableGroupAgentsResponse {
  agents: AssigneeFieldAssignableAgentObject[];
  count: number;
  next_page: Maybe<string>;
  previous_page: Maybe<string>;
}

export interface AssigneeFieldAssignableGroupObject {
  description: string;
  id: number;
  name: string;
}

export interface AssigneeFieldAssignableGroupsResponse {
  count: number;
  groups: AssigneeFieldAssignableGroupObject[];
  next_page: Maybe<string>;
  previous_page: Maybe<string>;
}

export interface AssigneeFieldAssignableSearchAgentObject {
  group: string;
  group_id: number;
  id: number;
  name: string;
  photo_url: Maybe<string>;
}

export interface AssigneeFieldAssignableSearchGroupObject {
  id: number;
  name: string;
}

export interface AssigneeFieldAssignableGroupsAndAgentsSearchResponse {
  agents: AssigneeFieldAssignableSearchAgentObject[];
  count: number;
  groups: AssigneeFieldAssignableSearchGroupObject[];
}

export interface AttachmentBaseObject {
  content_type: string;
  content_url: string;
  deleted: boolean;
  file_name: string;
  height: string;
  id: number;
  inline: boolean;
  malware_access_override: boolean;
  malware_scan_result: string;
  mapped_content_url: string;
  size: number;
  url: string;
  width: string;
}

export interface AttachmentThumbnails {
  thumbnails: AttachmentBaseObject[];
}

export type AttachmentObject = AttachmentBaseObject & AttachmentThumbnails;

export interface AttachmentResponse {
  attachment: AttachmentObject;
}

export interface AttachmentUpdateInput {
  malware_access_override: boolean;
}

export interface AttachmentUpdateRequest {
  attachment: AttachmentUpdateInput;
}

export interface AttachmentUploadResponse {
  upload: {
    attachment: AttachmentObject;
    attachments: AttachmentObject[];
    token: string;
  };
}

export interface AuditLogObject {
  action: string;
  action_label: string;
  actor_id: number;
  actor_name: string;
  change_description: string;
  created_at: string;
  id: number;
  ip_address: string;
  source_id: number;
  source_label: string;
  source_type: string;
  url: string;
}

export interface AuditLogResponse {
  audit_log: AuditLogObject;
}

export interface AuditLogsResponse {
  audit_logs: AuditLogObject[];
}

export interface AuthorObject {
  email: string;
  id: number;
  name: string;
}

export interface BookmarkInput {
  ticket_id: number;
}

export interface BookmarkCreateRequest {
  bookmark: BookmarkInput;
}

export interface BrandObject {
  active: boolean;
  brand_url: string;
  created_at: string;
  default: boolean;
  has_help_center: boolean;
  help_center_state: "enabled" | "disabled" | "restricted";
  host_mapping: string;
  id: number;
  is_deleted: boolean;
  logo: AttachmentObject;
  name: string;
  signature_template: string;
  subdomain: string;
  ticket_form_ids: unknown[];
  updated_at: string;
  url: string;
}

export interface BrandCreateRequest {
  brand: BrandObject;
}

export interface BrandResponse {
  brand: BrandObject;
}

export interface BrandUpdateRequest {
  brand: BrandObject;
}

export interface BulkUpdateDefaultCustomStatusRequest {
  ids: string;
}

export interface BulkUpdateDefaultCustomStatusResponse {}

export interface ChannelFrameworkResultStatusObject {
  code: string;
  description: string;
}

export interface ChannelFrameworkResultObject {
  external_resource_id: string;
  status: ChannelFrameworkResultStatusObject;
}

export interface ChannelFrameworkPushResultsResponse {
  results: ChannelFrameworkResultObject[];
}

export interface CollaboratorObject {
  email: string;
  name: string;
}

export interface ComplianceDeletionStatusObject {
  account_subdomain: string;
  action: string;
  application: string;
  created_at: string;
  executer_id: Maybe<number>;
  user_id: number;
}

export interface ComplianceDeletionStatusesResponse {
  compliance_deletion_statuses: ComplianceDeletionStatusObject[];
}

export interface ConditionObject {
  field: string;
  operator: string;
  value: string | unknown[];
}

export interface ConditionsObject {
  all: ConditionObject[];
  any: ConditionObject[];
}

export interface AutomationObject {
  actions: ActionObject[];
  active: boolean;
  conditions: ConditionsObject;
  created_at: string;
  default: boolean;
  id: number;
  position: number;
  raw_title: string;
  title: string;
  updated_at: string;
}

export interface AutomationResponse {
  automation: AutomationObject;
}

export interface AutomationsResponse {
  automations: AutomationObject[];
  count: number;
  next_page: Maybe<string>;
  previous_page: Maybe<string>;
}

export interface CountOrganizationObject {
  refreshed_at: string;
  value: number;
}

export interface CountOrganizationResponse {
  count: CountOrganizationObject;
}

export interface CountResponse {
  count: {
    refreshed_at: string;
    value: number;
  };
}

export interface CreateResourceResult {
  id: number;
  index: number;
}

export interface CustomFieldOptionObject {
  id: number;
  name: string;
  position: number;
  raw_name: string;
  url: string;
  value: string;
}

export interface CustomFieldObject {
  active: boolean;
  created_at: string;
  custom_field_options: CustomFieldOptionObject[];
  description: string;
  id: number;
  key: string;
  position: number;
  raw_description: string;
  raw_title: string;
  regexp_for_validation: Maybe<string>;
  relationship_filter: Record<string, unknown>;
  relationship_target_type: string;
  system: boolean;
  tag: string;
  title: string;
  type: string;
  updated_at: string;
  url: string;
}

export interface CustomFieldOptionResponse {
  custom_field_option: CustomFieldOptionObject;
}

export interface CustomFieldOptionsResponse {
  count: number;
  custom_field_options: CustomFieldOptionObject[];
  next_page: Maybe<string>;
  previous_page: Maybe<string>;
}

export interface CustomObject {
  created_at: string;
  created_by_user_id: string;
  description: string;
  key: string;
  raw_description: string;
  raw_title: string;
  raw_title_pluralized: string;
  title: string;
  title_pluralized: string;
  updated_at: string;
  updated_by_user_id: string;
  url: string;
}

export interface CustomObjectCreateInput {
  key: string;
  title: string;
  title_pluralized: string;
}

export type CustomObjectField = CustomFieldObject;

export interface CustomObjectFieldResponse {
  custom_object_field: CustomObjectField;
}

export interface CustomObjectFieldsCreateRequest {
  custom_object_field: CustomObjectField;
}

export interface CustomObjectFieldsResponse {
  custom_object_fields: CustomObjectField[];
}

export interface CustomObjectLimitsResponse {
  count: number;
  limit: number;
}

export interface CustomObjectRecord {
  created_at: string;
  created_by_user_id: string;
  custom_object_fields: Record<string, unknown>;
  custom_object_key: string;
  external_id: Maybe<string>;
  id: string;
  name: string;
  updated_at: string;
  updated_by_user_id: string;
  url: string;
}

export interface CustomObjectRecordResponse {
  custom_object_record: CustomObjectRecord;
}

export interface CustomObjectRecordsBulkCreateRequest {
  job: {
    action: string;
    items: CustomObjectRecord[];
  };
}

export interface CustomObjectRecordsCreateRequest {
  custom_object_record: CustomObjectRecord;
}

export interface CustomObjectRecordsJobsResponse {
  job_status: {
    id: string;
    message: Maybe<string>;
    progress: Maybe<number>;
    results: Maybe<CustomObjectRecord[]>;
    status: string;
    total: number;
    url: string;
  };
}

export interface CustomObjectRecordsResponse {
  count: number;
  custom_object_records: CustomObjectRecord[];
  links: {
    next: Maybe<string>;
    prev: Maybe<string>;
  };
  meta: {
    after_cursor: Maybe<string>;
    before_cursor: Maybe<string>;
    has_more: boolean;
  };
}

export interface CustomObjectRecordsUpsertRequest {
  custom_object_record: CustomObjectRecord;
}

export interface CustomObjectResponse {
  custom_object: CustomObject;
}

export interface CustomObjectsCreateRequest {
  custom_object: CustomObjectCreateInput;
}

export interface CustomObjectsResponse {
  custom_objects: CustomObject[];
}

export interface CustomRoleConfigurationObject {
  assign_tickets_to_any_group: boolean;
  chat_access: boolean;
  end_user_list_access: string;
  end_user_profile_access: string;
  explore_access: string;
  forum_access: string;
  forum_access_restricted_content: boolean;
  group_access: boolean;
  light_agent: boolean;
  macro_access: string;
  manage_business_rules: boolean;
  manage_contextual_workspaces: boolean;
  manage_dynamic_content: boolean;
  manage_extensions_and_channels: boolean;
  manage_facebook: boolean;
  manage_organization_fields: boolean;
  manage_ticket_fields: boolean;
  manage_ticket_forms: boolean;
  manage_user_fields: boolean;
  moderate_forums: boolean;
  organization_editing: boolean;
  organization_notes_editing: boolean;
  report_access: string;
  side_conversation_create: boolean;
  ticket_access: string;
  ticket_comment_access: string;
  ticket_deletion: boolean;
  ticket_editing: boolean;
  ticket_merge: boolean;
  ticket_tag_editing: boolean;
  twitter_search_access: boolean;
  user_view_access: string;
  view_access: string;
  view_deleted_tickets: boolean;
  voice_access: boolean;
  voice_dashboard_access: boolean;
}

export interface CustomRoleObject {
  configuration: CustomRoleConfigurationObject;
  created_at: string;
  description: string;
  id: number;
  name: string;
  role_type: number;
  team_member_count: number;
  updated_at: string;
}

export interface CustomRoleResponse {
  custom_role: CustomRoleObject;
}

export interface CustomRolesResponse {
  custom_roles: CustomRoleObject[];
}

export interface CustomStatusObject {
  active: boolean;
  agent_label: string;
  created_at: string;
  default: boolean;
  description: string;
  end_user_description: string;
  end_user_label: string;
  id: number;
  raw_agent_label: string;
  raw_description: string;
  raw_end_user_description: string;
  raw_end_user_label: string;
  status_category: "new" | "open" | "pending" | "hold" | "solved";
  updated_at: string;
}

export interface CustomStatusResponse {
  custom_status: CustomStatusObject;
}

export interface CustomStatusUpdateInput {
  active: boolean;
  agent_label: string;
  description: string;
  end_user_description: string;
  end_user_label: string;
}

export type CustomStatusCreateInput = CustomStatusUpdateInput & {
  status_category: "new" | "open" | "pending" | "hold" | "solved";
};

export interface CustomStatusCreateRequest {
  custom_status: CustomStatusCreateInput;
}

export interface CustomStatusUpdateRequest {
  custom_status: CustomStatusUpdateInput;
}

export interface CustomStatusesResponse {
  custom_statuses: CustomStatusObject[];
}

export interface DeletedUserObject {
  active: boolean;
  created_at: string;
  email: string;
  id: number;
  locale: string;
  locale_id: number;
  name: string;
  organization_id: number;
  phone: Maybe<string>;
  photo: Maybe<Record<string, unknown>>;
  role: string;
  shared_phone_number: Maybe<string>;
  time_zone: string;
  updated_at: string;
  url: string;
}

export interface DeletedUserResponse {
  deleted_user: DeletedUserObject;
}

export interface DeletedUsersResponse {
  deleted_users: DeletedUserObject[];
}

export interface DynamicContentVariantObject {
  active: boolean;
  content: string;
  created_at: string;
  default: boolean;
  id: number;
  locale_id: number;
  outdated: boolean;
  updated_at: string;
  url: string;
}

export interface DynamicContentObject {
  created_at: string;
  default_locale_id: number;
  id: number;
  name: string;
  outdated: boolean;
  placeholder: string;
  updated_at: string;
  url: string;
  variants: DynamicContentVariantObject[];
}

export interface DynamicContentResponse {
  item: DynamicContentObject;
}

export interface DynamicContentVariantResponse {
  variant: DynamicContentVariantObject;
}

export interface DynamicContentVariantsResponse {
  variants: DynamicContentVariantObject[];
}

export interface DynamicContentsResponse {
  items: DynamicContentObject[];
}

export interface Error {
  code: string;
  detail: string;
  id: string;
  links: Record<string, unknown>;
  source: Record<string, unknown>;
  status: string;
  title: string;
}

export type BatchErrorItem = Error & {
  trigger_id: string;
};

export interface Errors {
  errors: Error[];
}

export interface EssentialsCardObject {
  created_at: string;
  default: boolean;
  fields: Record<string, unknown>[];
  id: Maybe<string>;
  key: string;
  layout: string;
  max_count: number;
  updated_at: string;
}

export interface EssentialsCardResponse {
  object_layout: EssentialsCardObject;
}

export interface EssentialsCardsResponse {
  object_layouts: EssentialsCardObject[];
}

export interface FollowerObject {
  action: "put" | "delete";
  user_email: string;
  user_id: string;
}

export type EmailCCObject = FollowerObject & {
  action: "put" | "delete";
  user_email: string;
  user_id: string;
  user_name: string;
};

export interface GroupMembershipObject {
  created_at: string;
  default: boolean;
  group_id: number;
  id: number;
  updated_at: string;
  url: string;
  user_id: number;
}

export interface GroupMembershipResponse {
  group_membership: GroupMembershipObject;
}

export interface GroupMembershipsResponse {
  group_memberships: GroupMembershipObject[];
}

export interface GroupObject {
  created_at: string;
  default: boolean;
  deleted: boolean;
  description: string;
  id: number;
  is_public: boolean;
  name: string;
  updated_at: string;
  url: string;
}

export interface GroupResponse {
  group: GroupObject;
}

export interface GroupSLAPolicyFilterConditionObject {
  field: string;
  operator: string;
  value: unknown[];
}

export interface GroupSLAPolicyFilterDefinitionResponse {
  definitions: {
    all: {
      group: string;
      operators: {
        title: string;
        value: string;
      }[];
      title: string;
      value: string;
      values: {
        list: {
          title: string;
          value: Maybe<number>;
        }[];
        type: string;
      };
    }[];
  };
}

export interface GroupSLAPolicyFilterObject {
  all: GroupSLAPolicyFilterConditionObject[];
}

export interface GroupSLAPolicyMetricObject {
  business_hours: boolean;
  metric: string;
  priority: string;
  target: number;
}

export interface GroupSLAPolicyObject {
  created_at: string;
  description: string;
  filter: GroupSLAPolicyFilterObject;
  id: string;
  policy_metrics: GroupSLAPolicyMetricObject[];
  position: number;
  title: string;
  updated_at: string;
  url: string;
}

export interface GroupSLAPoliciesResponse {
  count: number;
  group_sla_policies: GroupSLAPolicyObject[];
  next_page: Maybe<string>;
  previous_page: Maybe<string>;
}

export interface GroupSLAPolicyResponse {
  group_sla_policy: GroupSLAPolicyObject;
}

export interface GroupsCountObject {
  count: {
    refreshed_at: string;
    value: number;
  };
}

export interface GroupsResponse {
  groups: GroupObject[];
}

export interface HostMappingObject {
  cname: string;
  expected_cnames: string[];
  is_valid: boolean;
  reason: string;
}

export interface IncrementalSkillBasedRoutingAttribute {
  id: string;
  name: string;
  time: string;
  type: string;
}

export interface IncrementalSkillBasedRoutingAttributeValue {
  attribute_id: string;
  id: string;
  name: string;
  time: string;
  type: string;
}

export interface IncrementalSkillBasedRoutingInstanceValue {
  attribute_value_id: string;
  id: string;
  instance_id: string;
  time: string;
  type: string;
}

export interface IncrementalSkillBasedRouting {
  attribute_values: IncrementalSkillBasedRoutingAttributeValue[];
  attributes: IncrementalSkillBasedRoutingAttribute[];
  count: number;
  end_time: number;
  instance_values: IncrementalSkillBasedRoutingInstanceValue[];
  next_page: string;
}

export interface KeyDetailObject {
  created_at: string;
  default: boolean;
  fields: Record<string, unknown>[];
  key: string;
  max_count: number;
  updated_at: string;
}

export interface KeyDetailsResponse {
  key_detail: KeyDetailObject;
}

export interface ListTicketCollaboratorsResponse {}

export interface ListTicketEmailCCsResponse {}

export interface ListTicketFollowersResponse {}

export interface ListTicketIncidentsResponse {}

export interface ListTicketProblemsResponse {}

export interface LocaleObject {
  created_at: string;
  id: number;
  locale: string;
  name: string;
  updated_at: string;
  url: string;
}

export interface LocaleResponse {
  locale: LocaleObject;
}

export interface LocalesResponse {
  locales: LocaleObject[];
}

export interface MacroApplyTicketResponse {
  result: {
    ticket: {
      assignee_id: number;
      comment: {
        body: string;
        public: boolean;
        scoped_body: string[][];
      };
      fields: {
        id: number;
        value: string;
      };
      group_id: number;
      id: number;
      url: string;
    };
  };
}

export interface MacroAttachmentObject {
  content_type: string;
  content_url: string;
  created_at: string;
  filename: string;
  id: number;
  size: number;
}

export interface MacroAttachmentResponse {
  macro_attachment: MacroAttachmentObject;
}

export interface MacroAttachmentsResponse {
  macro_attachments: MacroAttachmentObject[];
}

export interface MacroCategoriesResponse {
  categories: string[];
}

export interface MacroCommonObject {
  actions: ActionObject[];
  active: boolean;
  created_at: string;
  default: boolean;
  description: Maybe<string>;
  id: number;
  position: number;
  restriction: Maybe<Record<string, unknown>>;
  title: string;
  updated_at: string;
  url: string;
}

export interface MacroInput {
  actions: ActionObject[];
  active: boolean;
  description: Maybe<string>;
  restriction: {
    id: number;
    ids: number[];
    type: string;
  };
  title: string;
}

export type MacroObject = MacroCommonObject & {
  app_installation: Maybe<string>;
  categories: Maybe<string>;
  permissions: Maybe<string>;
  usage_1h: number;
  usage_7d: number;
  usage_24h: number;
  usage_30d: number;
};

export interface MacroResponse {
  macro: MacroObject;
}

export interface MacroUpdateManyInput {
  macros: {
    active: boolean;
    id: number;
    position: number;
  }[];
}

export interface OffsetPaginationObject {
  count: number;
  next_page: Maybe<string>;
  previous_page: Maybe<string>;
}

export type BrandsResponse = OffsetPaginationObject & {
  brands: BrandObject[];
};

export type ListDeletedTicketsResponse = {
  deleted_tickets: {
    actor: {
      id: number;
      name: string;
    };
    deleted_at: string;
    id: number;
    previous_state: string;
    subject: string;
  }[];
} & OffsetPaginationObject;

export type MacrosResponse = {
  macros: MacroObject[];
} & OffsetPaginationObject;

export type OrganizationFieldObject = CustomFieldObject;

export interface OrganizationFieldResponse {
  organization_field: OrganizationFieldObject;
}

export interface OrganizationFieldsResponse {
  count: number;
  next_page: Maybe<string>;
  organization_fields: OrganizationFieldObject[];
  previous_page: Maybe<string>;
}

export interface OrganizationMembershipObject {
  created_at: string;
  default: Maybe<boolean>;
  id: number;
  organization_id: number;
  organization_name: string;
  updated_at: string;
  url: string;
  user_id: number;
  view_tickets: boolean;
}

export interface OrganizationMembershipResponse {
  organization_membership: OrganizationMembershipObject;
}

export interface OrganizationMembershipsResponse {
  organization_memberships: OrganizationMembershipObject[];
}

export interface OrganizationMetadataObject {
  tickets_count: number;
  users_count: number;
}

export interface OrganizationObject {
  created_at: string;
  details: Maybe<string>;
  domain_names: string[];
  external_id: Maybe<string>;
  group_id: Maybe<number>;
  id: number;
  name: string;
  notes: Maybe<string>;
  organization_fields: Maybe<Record<string, unknown>>;
  shared_comments: boolean;
  shared_tickets: boolean;
  tags: string[];
  updated_at: string;
  url: string;
}

export interface ExportIncrementalOrganizationsResponse {
  count: number;
  end_of_stream: boolean;
  end_time: number;
  next_page: Maybe<string>;
  organizations: OrganizationObject[];
}

export interface OrganizationResponse {
  organization: OrganizationObject;
}

export interface OrganizationSubscriptionInput {
  organization_id: number;
  user_id: number;
}

export interface OrganizationSubscriptionCreateRequest {
  organization_subscription: OrganizationSubscriptionInput;
}

export interface OrganizationSubscriptionObject {
  created_at: string;
  id: number;
  organization_id: number;
  user_id: number;
}

export interface OrganizationSubscriptionResponse {
  organization_subscription: OrganizationSubscriptionObject;
}

export type OrganizationSubscriptionsResponse = OffsetPaginationObject & {
  organization_subscriptions: OrganizationSubscriptionObject[];
};

export interface OrganizationsRelatedResponse {
  organization_related: OrganizationMetadataObject;
}

export interface OrganizationsResponse {
  count: number;
  next_page: Maybe<string>;
  organizations: OrganizationObject[];
  previous_page: Maybe<string>;
}

export interface Pagination {
  links: {
    next: string;
    prev: string;
  };
  meta: {
    after_cursor: string;
    before_cursor: string;
    has_more: boolean;
  };
}

export type PushNotificationDevicesInput = unknown[];

export interface PushNotificationDevicesRequest {
  push_notification_devices: PushNotificationDevicesInput;
}

export interface RenewSessionResponse {
  authenticity_token: string;
}

export interface ResourceCollectionObject {
  created_at: string;
  id: number;
  resources: unknown[];
  updated_at: string;
}

export interface ResourceCollectionResponse {
  resource_collection: ResourceCollectionObject;
}

export interface ResourceCollectionsResponse {
  count: number;
  next_page: Maybe<string>;
  previous_page: Maybe<string>;
  resource_collections: ResourceCollectionObject[];
}

export interface SLAPolicyFilterConditionObject {
  field: string;
  operator: string;
  value: string | unknown[];
}

export interface SLAPolicyFilterDefinitionResponse {
  definitions: {
    all: {
      group: string;
      operators: {
        title: string;
        value: string;
      }[];
      target: Maybe<string>;
      title: string;
      value: string;
      values: {
        list: {
          title: string;
          value: Maybe<string>;
        }[];
        type: string;
      };
    }[];
    any: {
      group: string;
      operators: {
        title: string;
        value: string;
      }[];
      target: Maybe<string>;
      title: string;
      value: string;
      values: {
        list: {
          title: string;
          value: Maybe<string>;
        }[];
        type: string;
      };
    }[];
  };
}

export interface SLAPolicyFilterObject {
  all: SLAPolicyFilterConditionObject[];
  any: SLAPolicyFilterConditionObject[];
}

export interface SLAPolicyMetricObject {
  business_hours: boolean;
  metric: string;
  priority: string;
  target: number;
}

export interface SLAPolicyObject {
  created_at: string;
  description: string;
  filter: SLAPolicyFilterObject;
  id: number;
  policy_metrics: SLAPolicyMetricObject[];
  position: number;
  title: string;
  updated_at: string;
  url: string;
}

export interface SLAPoliciesResponse {
  count: number;
  next_page: Maybe<string>;
  previous_page: Maybe<string>;
  sla_policies: SLAPolicyObject[];
}

export interface SLAPolicyResponse {
  sla_policy: SLAPolicyObject;
}

export interface SatisfactionRatingObject {
  assignee_id: number;
  comment: string;
  created_at: string;
  group_id: number;
  id: number;
  reason: string;
  reason_code: number;
  reason_id: number;
  requester_id: number;
  score: string;
  ticket_id: number;
  updated_at: string;
  url: string;
}

export interface SatisfactionRatingResponse {
  satisfaction_rating: SatisfactionRatingObject[];
}

export interface SatisfactionRatingsCountResponse {
  count: {
    refreshed_at: string;
    value: number;
  };
}

export interface SatisfactionRatingsResponse {
  satisfaction_ratings: SatisfactionRatingObject[];
}

export interface SatisfactionReasonObject {
  created_at: string;
  deleted_at: string;
  id: number;
  raw_value: string;
  reason_code: number;
  updated_at: string;
  url: string;
  value: string;
}

export interface SatisfactionReasonResponse {
  reason: SatisfactionReasonObject[];
}

export interface SatisfactionReasonsResponse {
  reasons: SatisfactionReasonObject[];
}

export interface SearchCountResponse {
  count: number;
}

export interface SearchResultObject {
  created_at: string;
  default: boolean;
  deleted: boolean;
  description: string;
  id: number;
  name: string;
  result_type: string;
  updated_at: string;
  url: string;
}

export interface SearchExportResponse {
  facets: Maybe<string>;
  links: {
    next: Maybe<string>;
    prev: Maybe<string>;
  };
  meta: {
    after_cursor: Maybe<string>;
    before_cursor: Maybe<string>;
    has_more: boolean;
  };
  results: SearchResultObject[];
}

export interface SearchResponse {
  count: number;
  facets: Maybe<string>;
  next_page: Maybe<string>;
  previous_page: Maybe<string>;
  results: SearchResultObject[];
}

export interface SessionObject {
  authenticated_at: Maybe<string>;
  id: number;
  last_seen_at: Maybe<string>;
  url: Maybe<string>;
  user_id: Maybe<number>;
}

export interface SessionResponse {
  session: SessionObject[];
}

export interface SessionsResponse {
  sessions: SessionObject[];
}

export interface SharingAgreementObject {
  created_at: string;
  id: number;
  name: string;
  partner_name: Maybe<string>;
  remote_subdomain: string;
  status: string;
  type: string;
  url: string;
}

export interface SharingAgreementResponse {
  sharing_agreement: SharingAgreementObject;
}

export interface SharingAgreementsResponse {
  sharing_agreements: SharingAgreementObject[];
}

export interface SkillBasedRoutingAttributeDefinitions {
  definitions: {
    conditions_all: {
      subject: string;
      title: string;
    }[];
    conditions_any: {
      subject: string;
      title: string;
    }[];
  };
}

export interface SkillBasedRoutingAttributeObject {
  created_at: string;
  id: string;
  name: string;
  updated_at: string;
  url: string;
}

export interface SkillBasedRoutingAttributeResponse {
  attribute: SkillBasedRoutingAttributeObject;
}

export interface SkillBasedRoutingAttributeValueObject {
  attribute_id: string;
  created_at: string;
  id: string;
  name: string;
  updated_at: string;
  url: string;
}

export interface SkillBasedRoutingAttributeValueResponse {
  attribute_value: SkillBasedRoutingAttributeValueObject;
}

export interface SkillBasedRoutingAttributeValuesResponse {
  attribute_values: SkillBasedRoutingAttributeValueObject[];
}

export interface SkillBasedRoutingAttributesResponse {
  attributes: SkillBasedRoutingAttributeObject[];
  count: number;
  next_page: Maybe<string>;
  previous_page: Maybe<string>;
}

export interface SkillBasedRoutingTicketFulfilledResponse {
  fulfilled_ticket_ids: number[];
}

export interface SupportAddressObject {
  brand_id: number;
  cname_status: "unknown" | "verified" | "failed";
  created_at: string;
  default: boolean;
  dns_results: "verified" | "failed";
  domain_verification_code: string;
  domain_verification_status: "unknown" | "verified" | "failed";
  email: string;
  forwarding_status: "unknown" | "waiting" | "verified" | "failed";
  id: number;
  name: string;
  spf_status: "unknown" | "verified" | "failed";
  updated_at: string;
}

export interface SupportAddressResponse {
  recipient_address: SupportAddressObject;
}

export interface SupportAddressesResponse {
  recipient_addresses: SupportAddressObject[];
}

export interface SuspendedTicketsAttachmentsResponse {
  upload: {
    attachments: AttachmentObject[];
    token: string;
  };
}

export interface SuspendedTicketsExportResponse {
  export: {
    status: string;
    view_id: string;
  };
}

export interface SystemFieldOptionObject {
  name: string;
  value: string;
}

export interface TagCountObject {
  refreshed_at: string;
  value: number;
}

export interface TagCountResponse {
  count: TagCountObject;
}

export interface TagListTagObject {
  count: number;
  name: string;
}

export interface TagUrlObject {
  url: string;
}

export interface TagsByObjectIdResponse {
  tags: string[];
}

export interface TagsResponse {
  count: number;
  next_page: Maybe<string>;
  previous_page: Maybe<string>;
  tags: TagListTagObject[];
}

export interface TargetBasecamp {
  message_id: string;
  password: string;
  project_id: string;
  resource: string;
  target_url: string;
  todo_list_id: string;
  token: string;
  username: string;
}

export interface TargetCampfire {
  preserve_format: boolean;
  room: string;
  ssl: boolean;
  subdomain: string;
  token: string;
}

export interface TargetClickatell {
  api_id: string;
  attribute: string;
  from: string;
  method: string;
  password: string;
  target_url: string;
  to: string;
  us_small_business_account: string;
  username: string;
}

export interface TargetCommonFields {
  active: boolean;
  created_at: string;
  id: number;
  title: string;
  type: string;
}

export interface TargetEmail {
  email: string;
  subject: string;
}

export interface TargetFailureObject {
  consecutive_failure_count: number;
  created_at: string;
  id: number;
  raw_request: string;
  raw_response: string;
  status_code: number;
  target_name: string;
  url: string;
}

export interface TargetFailureResponse {
  target_failure: TargetFailureObject;
}

export interface TargetFailuresResponse {
  target_failures: TargetFailureObject[];
}

export interface TargetFlowdock {
  api_token: string;
}

export interface TargetGetSatisfaction {
  account_name: string;
  email: string;
  password: string;
  target_url: string;
}

export interface TargetHTTP {
  content_type: string;
  method: string;
  password: string;
  target_url: string;
  username: string;
}

export interface TargetJira {
  password: string;
  target_url: string;
  username: string;
}

export interface TargetPivotal {
  owner_by: string;
  project_id: string;
  requested_by: string;
  story_labels: string;
  story_title: string;
  story_type: string;
  token: string;
}

export interface TargetTwitter {
  secret: string;
  token: string;
}

export interface TargetURL {
  attribute: string;
  method: string;
  password: string;
  target_url: string;
  username: string;
}

export interface TargetYammer {
  group_id: string;
  token: string;
}

export type TargetObject = TargetCommonFields &
  (
    | TargetBasecamp
    | TargetCampfire
    | TargetClickatell
    | TargetEmail
    | TargetFlowdock
    | TargetGetSatisfaction
    | TargetJira
    | TargetPivotal
    | TargetTwitter
    | TargetURL
    | TargetHTTP
    | TargetYammer
  );

export interface TargetResponse {
  target: TargetObject;
}

export interface TargetsResponse {
  targets: TargetObject[];
}

export interface TicketAuditViaObject {
  channel: string;
  source: Record<string, unknown>;
}

export interface RequestObject {
  assignee_id: number;
  can_be_solved_by_me: boolean;
  collaborator_ids: number[];
  created_at: string;
  custom_fields: {
    id: number;
    value: string;
  }[];
  custom_status_id: number;
  description: string;
  due_at: string;
  email_cc_ids: number[];
  followup_source_id: number;
  group_id: number;
  id: number;
  is_public: boolean;
  organization_id: number;
  priority: string;
  recipient: string;
  requester_id: number;
  solved: boolean;
  status: string;
  subject: string;
  ticket_form_id: number;
  type: string;
  updated_at: string;
  url: string;
  via: TicketAuditViaObject;
}

export interface RequestResponse {
  request: RequestObject;
}

export interface RequestsResponse {
  requests: RequestObject[];
}

export interface TicketAuditObject {
  author_id: number;
  created_at: string;
  events: Record<string, unknown>[];
  id: number;
  metadata: Record<string, unknown>;
  ticket_id: number;
  via: TicketAuditViaObject;
}

export interface TicketAuditResponse {
  audit: TicketAuditObject;
}

export interface TicketAuditsCountResponse {
  count: {
    refreshed_at: string;
    value: number;
  };
}

export interface TicketAuditsResponse {
  after_cursor: string;
  after_url: string;
  audits: TicketAuditObject[];
  before_cursor: string;
  before_url: string;
}

export interface TicketAuditsResponseNoneCursor {
  audits: TicketAuditObject[];
  count: number;
  next_page: Maybe<string>;
  previous_page: Maybe<string>;
}

export interface TicketChatCommentRedactionResponse {
  chat_event: {
    id: number;
    type: string;
    value: {
      chat_id: string;
      history: Record<string, unknown>[];
      visitor_id: string;
    };
  };
}

export interface TicketCommentObject {
  attachments: AttachmentObject[];
  audit_id: number;
  author_id: number;
  body: string;
  created_at: string;
  html_body: string;
  id: number;
  metadata: Record<string, unknown>;
  plain_body: string;
  public: boolean;
  type: string;
  uploads: string[];
  via: TicketAuditViaObject;
}

export interface TicketCommentResponse {
  comment: TicketCommentObject;
}

export interface TicketCommentsCountResponse {
  count: {
    refreshed_at: string;
    value: number;
  };
}

export interface TicketCommentsResponse {
  comments: TicketCommentObject[];
}

export interface TicketCreateVoicemailTicketVoiceCommentInput {
  answered_by_id: number;
  call_duration: number;
  from: string;
  location: string;
  recording_url: string;
  started_at: string;
  to: string;
  transcription_text: string;
}

export interface TicketCreateVoicemailTicketInput {
  comment: TicketCommentObject;
  priority: "urgent" | "high" | "normal" | "low";
  via_id: 44 | 45 | 46;
  voice_comment: TicketCreateVoicemailTicketVoiceCommentInput;
}

export interface TicketCreateVoicemailTicketRequest {
  display_to_agent: number;
  ticket: TicketCreateVoicemailTicketInput;
}

export interface TicketFieldCountResponse {
  count: {
    refreshed_at: string;
    value: number;
  };
}

export interface TicketFieldCustomStatusObject {
  active: boolean;
  agent_label: string;
  created_at: string;
  default: boolean;
  description: string;
  end_user_description: string;
  end_user_label: string;
  id: number;
  status_category: "new" | "open" | "pending" | "hold" | "solved";
  updated_at: string;
}

export interface TicketFieldObject {
  active: boolean;
  agent_description: string;
  collapsed_for_agents: boolean;
  created_at: string;
  creator_app_name: string;
  creator_user_id: number;
  custom_field_options: CustomFieldOptionObject[];
  custom_statuses: TicketFieldCustomStatusObject[];
  description: string;
  editable_in_portal: boolean;
  id: number;
  position: number;
  raw_description: string;
  raw_title: string;
  raw_title_in_portal: string;
  regexp_for_validation: Maybe<string>;
  relationship_filter: Record<string, unknown>;
  relationship_target_type: string;
  removable: boolean;
  required: boolean;
  required_in_portal: boolean;
  sub_type_id: number;
  system_field_options: SystemFieldOptionObject[];
  tag: Maybe<string>;
  title: string;
  title_in_portal: string;
  type: string;
  updated_at: string;
  url: string;
  visible_in_portal: boolean;
}

export interface TicketFieldResponse {
  ticket_field: TicketFieldObject;
}

export interface TicketFieldsResponse {
  ticket_fields: TicketFieldObject[];
}

export interface TicketFormObject {
  active: boolean;
  agent_conditions: Record<string, unknown>[];
  created_at: string;
  default: boolean;
  display_name: string;
  end_user_conditions: Record<string, unknown>[];
  end_user_visible: boolean;
  id: number;
  in_all_brands: boolean;
  name: string;
  position: number;
  raw_display_name: string;
  raw_name: string;
  restricted_brand_ids: number[];
  ticket_field_ids: number[];
  updated_at: string;
  url: string;
}

export interface TicketFormResponse {
  ticket_form: TicketFormObject;
}

export interface TicketFormsResponse {
  ticket_forms: TicketFormObject[];
}

export interface TicketImportInput {
  assignee_id: number;
  comments: ({
    value: string;
  } & TicketCommentObject)[];
  description: string;
  requester_id: number;
  subject: string;
  tags: string[];
}

export interface TicketBulkImportRequest {
  tickets: TicketImportInput[];
}

export interface TicketImportRequest {
  ticket: TicketImportInput;
}

export interface TicketMergeInput {
  ids: unknown[];
  source_comment: string;
  source_comment_is_public: boolean;
  target_comment: string;
  target_comment_is_public: boolean;
}

export interface TicketMetricEventBaseObject {
  id: number;
  instance_id: number;
  metric:
    | "agent_work_time"
    | "pausable_update_time"
    | "periodic_update_time"
    | "reply_time"
    | "requester_wait_time"
    | "resolution_time";
  ticket_id: number;
  time: string;
  type:
    | "activate"
    | "pause"
    | "fulfill"
    | "apply_sla"
    | "breach"
    | "update_status"
    | "measure";
}

export interface ExportIncrementalTicketEventsResponse {
  count: number;
  end_of_stream: boolean;
  end_time: number;
  next_page: Maybe<string>;
  ticket_events: TicketMetricEventBaseObject[];
}

export type TicketMetricEventBreachObject = TicketMetricEventBaseObject & {
  deleted: boolean;
};

export type TicketMetricEventGroupSLAObject = TicketMetricEventBaseObject & {
  group_sla: Record<string, unknown>;
};

export type TicketMetricEventSLAObject = TicketMetricEventBaseObject & {
  sla: Record<string, unknown>;
};

export type TicketMetricEventUpdateStatusObject =
  TicketMetricEventBaseObject & {
    status: Record<string, unknown>;
  };

export type TicketMetricEventsResponse = {
  ticket_metric_events: TicketMetricEventBaseObject[];
} & {
  count: number;
  end_time: number;
  next_page: string;
};

export interface TicketMetricTimeObject {
  business: number;
  calendar: number;
}

export interface TicketMetricObject {
  agent_wait_time_in_minutes: TicketMetricTimeObject;
  assigned_at: string;
  assignee_stations: number;
  assignee_updated_at: string;
  created_at: string;
  custom_status_updated_at: string;
  first_resolution_time_in_minutes: TicketMetricTimeObject;
  full_resolution_time_in_minutes: TicketMetricTimeObject;
  group_stations: number;
  id: number;
  initially_assigned_at: string;
  latest_comment_added_at: string;
  on_hold_time_in_minutes: TicketMetricTimeObject;
  reopens: number;
  replies: number;
  reply_time_in_minutes: TicketMetricTimeObject;
  reply_time_in_seconds: TicketMetricTimeObject;
  requester_updated_at: string;
  requester_wait_time_in_minutes: TicketMetricTimeObject;
  solved_at: string;
  status_updated_at: string;
  ticket_id: number;
  updated_at: string;
  url: string;
}

export interface TicketMetricsByTicketMetricIdResponse {
  ticket_metric: TicketMetricObject[];
}

export interface TicketMetricsResponse {
  ticket_metrics: TicketMetricObject[];
}

export interface TicketObject {
  allow_attachments: boolean;
  allow_channelback: boolean;
  assignee_email: string;
  assignee_id: number;
  attribute_value_ids: unknown[];
  brand_id: number;
  collaborator_ids: unknown[];
  collaborators: CollaboratorObject[];
  comment: Record<string, unknown>;
  created_at: string;
  custom_fields: unknown[];
  custom_status_id: number;
  description: string;
  due_at: Maybe<string>;
  email_cc_ids: unknown[];
  email_ccs: Record<string, unknown>;
  external_id: string;
  follower_ids: unknown[];
  followers: Record<string, unknown>;
  followup_ids: unknown[];
  forum_topic_id: number;
  from_messaging_channel: boolean;
  group_id: number;
  has_incidents: boolean;
  id: number;
  is_public: boolean;
  macro_id: number;
  macro_ids: unknown[];
  metadata: Record<string, unknown>;
  organization_id: number;
  priority: "urgent" | "high" | "normal" | "low";
  problem_id: number;
  raw_subject: string;
  recipient: string;
  requester: Record<string, unknown>;
  requester_id: number;
  safe_update: boolean;
  satisfaction_rating: Record<string, unknown>;
  sharing_agreement_ids: unknown[];
  status: "new" | "open" | "pending" | "hold" | "solved" | "closed";
  subject: string;
  submitter_id: number;
  tags: unknown[];
  ticket_form_id: number;
  type: "problem" | "incident" | "question" | "task";
  updated_at: string;
  updated_stamp: string;
  url: string;
  via: {
    channel: string;
    source: Record<string, unknown>;
  };
  via_followup_source_id: number;
  via_id: number;
  voice_comment: Record<string, unknown>;
}

export interface BookmarkObject {
  created_at: string;
  id: number;
  ticket: TicketObject;
  url: string;
}

export interface BookmarkResponse {
  bookmark: BookmarkObject;
}

export type BookmarksResponse = OffsetPaginationObject & {
  bookmarks: BookmarkObject[];
};

export interface CursorBasedExportIncrementalTicketsResponse {
  after_cursor: Maybe<string>;
  after_url: Maybe<string>;
  before_cursor: Maybe<string>;
  before_url: Maybe<string>;
  end_of_stream: boolean;
  tickets: TicketObject[];
}

export interface TicketRelatedInformation {
  followup_source_ids: string[];
  from_archive: boolean;
  incidents: number;
  topic_id: Maybe<string>;
  twitter: Record<string, unknown>;
}

export interface TicketResponse {
  ticket: TicketObject;
}

export interface TicketSkipObject {
  created_at: string;
  id: number;
  reason: string;
  ticket: TicketObject;
  ticket_id: number;
  updated_at: string;
  user_id: number;
}

export interface TicketSkipCreation {
  skip: TicketSkipObject;
}

export interface TicketSkipsResponse {
  skips: TicketSkipObject[];
}

export interface TicketUpdateInput {
  additional_collaborators: CollaboratorObject[];
  assignee_email: string;
  assignee_id: number;
  attribute_value_ids: number[];
  collaborator_ids: unknown[];
  comment: TicketCommentObject;
  custom_fields: unknown[];
  custom_status_id: number;
  due_at: Maybe<string>;
  email_ccs: EmailCCObject[];
  external_id: string;
  followers: FollowerObject[];
  group_id: number;
  organization_id: number;
  priority: "urgent" | "high" | "normal" | "low";
  problem_id: number;
  requester_id: number;
  safe_update: boolean;
  sharing_agreement_ids: number[];
  status: "new" | "open" | "pending" | "hold" | "solved" | "closed";
  subject: string;
  tags: unknown[];
  type: "problem" | "incident" | "question" | "task";
  updated_stamp: string;
}

export interface TicketUpdateRequest {
  ticket: TicketUpdateInput;
}

export interface TicketsResponse {
  tickets: TicketObject[];
}

export interface TimeBasedExportIncrementalTicketsResponse {
  count: number;
  end_of_stream: boolean;
  end_time: number;
  next_page: Maybe<string>;
  tickets: TicketObject[];
}

export interface TrialAccountObject {
  name: string;
  subdomain: string;
  url: string;
}

export interface TrialAccountResponse {
  account: TrialAccountObject;
}

export interface TriggerActionDefinitionObject {
  group: string;
  nullable: boolean;
  repeatable: boolean;
  subject: string;
  title: string;
  type: string;
  values: {
    enabled: boolean;
    title: string;
    value: string;
  }[];
}

export interface TriggerActionObject {
  field: string;
  value: string | unknown[] | number;
}

export interface TriggerBatchRequest {
  active: boolean;
  category_id: string;
  id: string;
  position: number;
}

export interface TriggerBulkUpdateItem {
  active: boolean;
  category_id: string;
  id: number;
  position: number;
}

export interface TriggerBulkUpdateRequest {
  triggers: TriggerBulkUpdateItem[];
}

export interface TriggerCategory {
  created_at: string;
  id: string;
  name: string;
  position: number;
  updated_at: string;
}

export interface TriggerCategoryBatchRequest {
  id: string;
  position: number;
}

export interface BatchJobRequest {
  job: {
    action: "patch";
    items: {
      trigger_categories: TriggerCategoryBatchRequest[];
      triggers: TriggerBatchRequest[];
    };
  };
}

export type TriggerCategoryId = string;

export interface TriggerCategoryRequest {
  name: string;
  position: number;
}

export interface TriggerCategoryRequestRequired {}

export interface TriggerCategoryResponse {
  trigger_category: TriggerCategory;
}

export interface TriggerCategoryRuleCounts {
  active_count: number;
  inactive_count: number;
}

export interface TriggerCategoriesResponse {
  trigger_categories: TriggerCategory[];
}

export interface TriggerChangeObject {
  change: string;
  content: boolean | string | number | unknown[];
}

export interface TriggerActionDiffObject {
  field: TriggerChangeObject[];
  value: TriggerChangeObject[];
}

export interface TriggerConditionDefinitionObjectAll {
  group: string;
  nullable: boolean;
  operators: {
    terminal: boolean;
    title: string;
    value: string;
  }[];
  repeatable: boolean;
  subject: string;
  title: string;
  type: string;
  values: {
    enabled: boolean;
    title: string;
    value: string;
  }[];
}

export interface TriggerConditionDefinitionObjectAny {
  group: string;
  nullable: boolean;
  operators: {
    terminal: boolean;
    title: string;
    value: string;
  }[];
  repeatable: boolean;
  subject: string;
  title: string;
  type: string;
}

export interface RelationshipFilterDefinition {
  conditions_all: TriggerConditionDefinitionObjectAll[];
  conditions_any: TriggerConditionDefinitionObjectAny[];
}

export interface RelationshipFilterDefinitionResponse {
  definitions: RelationshipFilterDefinition;
}

export interface TriggerConditionDiffObject {
  field: TriggerChangeObject[];
  operator: TriggerChangeObject[];
  value: TriggerChangeObject[];
}

export interface TriggerConditionObject {
  field: string;
  operator: string;
  value: string | unknown[];
}

export interface TriggerConditionsDiffObject {
  all: Maybe<TriggerConditionDiffObject[]>;
  any: Maybe<TriggerConditionDiffObject[]>;
}

export interface TriggerConditionsObject {
  all: Maybe<TriggerConditionObject[]>;
  any: Maybe<TriggerConditionObject[]>;
}

export interface TriggerDefinitionObject {
  actions: TriggerActionDefinitionObject[];
  conditions_all: TriggerConditionDefinitionObjectAll[];
  conditions_any: TriggerConditionDefinitionObjectAny[];
}

export interface TriggerDefinitionResponse {
  definitions: TriggerDefinitionObject;
}

export interface TriggerObject {
  actions: TriggerActionObject[];
  active: boolean;
  category_id: string;
  conditions: TriggerConditionsObject;
  created_at: string;
  default: boolean;
  description: string;
  id: number;
  position: number;
  raw_title: string;
  title: string;
  updated_at: string;
  url: string;
}

export interface BatchJobResponse {
  errors: BatchErrorItem[];
  results: {
    trigger_categories: TriggerCategory[];
    triggers: TriggerObject[];
  };
  status: "complete" | "failed";
}

export interface TriggerResponse {
  trigger: TriggerObject;
}

export interface TriggerRevisionResponse {
  trigger_revision: {
    author_id: number;
    created_at: string;
    id: number;
    snapshot: {
      actions: TriggerActionObject[];
      active: boolean;
      conditions: TriggerConditionsObject;
      description: Maybe<string>;
      title: string;
    };
    url: string;
  };
}

export interface TriggerSnapshotObject {
  actions: TriggerActionObject[];
  active: boolean;
  conditions: TriggerConditionsObject;
  description: Maybe<string>;
  title: string;
}

export interface TriggerRevisionsResponse {
  after_cursor: string;
  after_url: string;
  before_cursor: string;
  before_url: string;
  count: number;
  trigger_revisions: {
    author_id: number;
    created_at: string;
    diff: {
      actions: TriggerActionDiffObject[];
      active: TriggerChangeObject[];
      conditions: TriggerConditionDiffObject;
      description: TriggerChangeObject[];
      source_id: number;
      target_id: number;
      title: TriggerChangeObject[];
    };
    id: number;
    snapshot: TriggerSnapshotObject;
    url: string;
  }[];
}

export interface TriggerWithCategoryRequest {
  trigger: TriggerObject & (TriggerCategory | TriggerCategoryId);
}

export interface TriggersResponse {
  count: number;
  next_page: Maybe<string>;
  previous_page: Maybe<string>;
  triggers: TriggerObject[];
}

export interface TwitterChannelObject {
  allow_reply: boolean;
  avatar_url: string;
  brand_id: number;
  can_reply: boolean;
  created_at: string;
  id: number;
  name: string;
  screen_name: string;
  twitter_user_id: number;
  updated_at: string;
}

export interface TwitterChannelResponse {
  monitored_twitter_handle: TwitterChannelObject;
}

export interface TwitterChannelTwicketStatusResponse {
  statuses: {
    favorited: boolean;
    id: number;
    retweeted: boolean;
    user_followed: boolean;
  }[];
}

export interface TwitterChannelsResponse {
  monitored_twitter_handles: TwitterChannelObject[];
}

export interface UpdateResourceResult {
  action: string;
  id: number;
  status: string;
  success: boolean;
}

export type JobStatusResultObject = CreateResourceResult | UpdateResourceResult;

export interface JobStatusObject {
  id: string;
  job_type: string;
  message: Maybe<string>;
  progress: Maybe<number>;
  results:
    | Maybe<JobStatusResultObject[]>
    | {
        success: boolean;
      };
  status: string;
  total: Maybe<number>;
  url: string;
}

export interface JobStatusResponse {
  job_status: JobStatusObject;
}

export interface JobStatusesResponse {
  job_statuses: JobStatusObject[];
}

export interface UrlObject {
  url: string;
}

export interface UserCreateInput {
  custom_role_id: number;
  email: string;
  external_id: string;
  identities: {
    type: string;
    value: string;
  }[];
  name: string;
  organization: {
    name: string;
  };
  organization_id: number;
  role: string;
}

export type UserFieldObject = CustomFieldObject;

export interface UserFieldResponse {
  user_field: UserFieldObject;
}

export interface UserFieldsResponse {
  count: number;
  next_page: Maybe<string>;
  previous_page: Maybe<string>;
  user_fields: UserFieldObject[];
}

export interface UserForAdmin {
  active: boolean;
  alias: string;
  chat_only: boolean;
  created_at: string;
  custom_role_id: Maybe<number>;
  default_group_id: number;
  details: string;
  email: string;
  external_id: Maybe<string>;
  iana_time_zone: string;
  id: number;
  last_login_at: string;
  locale: string;
  locale_id: number;
  moderator: boolean;
  name: string;
  notes: string;
  only_private_comments: boolean;
  organization_id: Maybe<number>;
  phone: Maybe<string>;
  photo: Maybe<Record<string, unknown>>;
  remote_photo_url: string;
  report_csv: boolean;
  restricted_agent: boolean;
  role: string;
  role_type: Maybe<number>;
  shared: boolean;
  shared_agent: boolean;
  shared_phone_number: Maybe<boolean>;
  signature: string;
  suspended: boolean;
  tags: unknown[];
  ticket_restriction: Maybe<string>;
  time_zone: string;
  two_factor_auth_enabled: Maybe<boolean>;
  updated_at: string;
  url: string;
  user_fields: Record<string, unknown>;
  verified: boolean;
}

export interface UserForEndUser {
  created_at: string;
  email: string;
  iana_time_zone: string;
  id: number;
  locale: string;
  locale_id: number;
  name: string;
  organization_id: number;
  phone: string;
  photo: Record<string, unknown>;
  role: string;
  shared_phone_number: boolean;
  time_zone: string;
  updated_at: string;
  url: string;
  verified: boolean;
}

export interface UserIdentityObject {
  created_at: string;
  deliverable_state: string;
  id: number;
  primary: boolean;
  type:
    | "email"
    | "twitter"
    | "facebook"
    | "google"
    | "phone_number"
    | "agent_forwarding"
    | "any_channel"
    | "foreign"
    | "sdk";
  undeliverable_count: number;
  updated_at: string;
  url: string;
  user_id: number;
  value: string;
  verified: boolean;
}

export interface UserIdentitiesResponse {
  identities: UserIdentityObject[];
}

export interface UserIdentityResponse {
  identity: UserIdentityObject;
}

export interface UserMergeByIdInput {
  id: number;
}

export interface UserMergePropertiesInput {
  email: string;
  name: string;
  organization_id: number;
  password: string;
}

export type UserInput =
  | UserCreateInput
  | UserMergePropertiesInput
  | UserMergeByIdInput;

export type UserObject = UserForAdmin | UserForEndUser;

export interface ActivityObject {
  actor: UserObject;
  actor_id: number;
  created_at: string;
  id: number;
  object: Record<string, unknown>;
  target: Record<string, unknown>;
  title: string;
  updated_at: string;
  url: string;
  user: UserObject;
  user_id: number;
  verb: string;
}

export interface ActivitiesResponse {
  activities: ActivityObject[];
  actors: Record<string, unknown>[];
  count: number;
  next_page: Maybe<string>;
  previous_page: Maybe<string>;
  users: Record<string, unknown>[];
}

export interface ActivityResponse {
  activity: ActivityObject;
}

export interface CurrentUserResponse {
  user: UserObject & {
    authenticity_token: string;
  };
}

export interface CursorBasedExportIncrementalUsersResponse {
  after_cursor: Maybe<string>;
  after_url: Maybe<string>;
  before_cursor: Maybe<string>;
  before_url: Maybe<string>;
  end_of_stream: boolean;
  users: UserObject[];
}

export interface TimeBasedExportIncrementalUsersResponse {
  count: number;
  end_of_stream: boolean;
  end_time: number;
  next_page: Maybe<string>;
  users: UserObject[];
}

export interface UserPasswordRequirementsResponse {
  requirements: string[];
}

export interface UserRelatedObject {
  assigned_tickets: number;
  ccd_tickets: number;
  organization_subscriptions: number;
  requested_tickets: number;
}

export interface UserRelatedResponse {
  user_related: UserRelatedObject;
}

export interface UserRequest {
  user: UserInput;
}

export interface UserResponse {
  user: UserObject;
}

export interface UsersRequest {
  users: UserInput[];
}

export interface UsersResponse {
  users: UserObject[];
}

export type ReverseLookupResponse = UsersResponse;

export interface ViaObject {
  channel: string;
  source: {
    from: {
      address: Maybe<string>;
      id: Maybe<number>;
      name: Maybe<string>;
      title: Maybe<string>;
    };
    rel: Maybe<string>;
    to: {
      address: string;
      name: string;
    };
  };
}

export interface AuditObject {
  author_id: number;
  created_at: string;
  events: unknown[];
  id: number;
  metadata: Record<string, unknown>;
  ticket_id: number;
  via: ViaObject;
}

export interface SuspendedTicketObject {
  attachments: Maybe<AttachmentObject[]>;
  author: AuthorObject;
  brand_id: number;
  cause: string;
  cause_id: number;
  content: string;
  created_at: string;
  error_messages: Maybe<Record<string, unknown>[]>;
  id: number;
  message_id: string;
  recipient: string;
  subject: string;
  ticket_id: number;
  updated_at: string;
  url: string;
  via: ViaObject;
}

export interface RecoverSuspendedTicketResponse {
  ticket: SuspendedTicketObject[];
}

export interface RecoverSuspendedTicketUnprocessableContentResponse {
  ticket: SuspendedTicketObject[];
}

export interface RecoverSuspendedTicketsResponse {
  tickets: SuspendedTicketObject[];
}

export interface SuspendedTicketResponse {
  suspended_ticket: SuspendedTicketObject[];
}

export interface SuspendedTicketsResponse {
  suspended_tickets: SuspendedTicketObject[];
}

export type TicketCreateInput = TicketUpdateInput & {
  brand_id: number;
  collaborators: unknown[];
  email_cc_ids: unknown[];
  follower_ids: unknown[];
  macro_ids: unknown[];
  raw_subject: string;
  recipient: string;
  submitter_id: number;
  ticket_form_id: number;
  via: ViaObject;
  via_followup_source_id: number;
};

export interface TicketCreateRequest {
  ticket: TicketCreateInput;
}

export interface TicketUpdateResponse {
  audit: AuditObject;
  ticket: TicketObject;
}

export interface TicketsCreateRequest {
  tickets: TicketCreateInput[];
}

export interface ViewCountObject {
  active: boolean;
  fresh: boolean;
  pretty: string;
  url: string;
  value: Maybe<number>;
  view_id: number;
}

export interface ViewCountResponse {
  view_count: ViewCountObject;
}

export interface ViewCountsResponse {
  view_counts: ViewCountObject[];
}

export interface ViewExportResponse {
  export: {
    status: string;
    view_id: number;
  };
}

export interface ViewObject {
  active: boolean;
  conditions: Record<string, unknown>;
  created_at: string;
  default: boolean;
  description: string;
  execution: Record<string, unknown>;
  id: number;
  position: number;
  restriction: Record<string, unknown>;
  title: string;
  updated_at: string;
}

export interface ViewResponse {
  columns: Record<string, unknown>[];
  groups: Record<string, unknown>[];
  rows: Record<string, unknown>[];
  view: ViewObject;
}

export interface ViewsCountResponse {
  count: {
    refreshed_at: string;
    value: number;
  };
}

export interface ViewsResponse {
  count: number;
  next_page: Maybe<string>;
  previous_page: Maybe<string>;
  views: ViewObject[];
}

export interface WorkspaceInput {
  conditions: ConditionsObject;
  description: string;
  macros: number[];
  ticket_form_id: number;
  title: string;
}

export interface WorkspaceObject {
  activated: boolean;
  apps: Record<string, unknown>[];
  conditions: ConditionsObject;
  created_at: string;
  description: string;
  id: number;
  macro_ids: number[];
  macros: number[];
  position: number;
  prefer_workspace_app_order: boolean;
  selected_macros: MacroObject[];
  ticket_form_id: number;
  title: string;
  updated_at: string;
  url: string;
}

export type WorkspaceResponse = {
  workspaces: WorkspaceObject[];
} & OffsetPaginationObject;

export const accountSettingsActiveFeaturesObjectSchema: zod.ZodSchema<AccountSettingsActiveFeaturesObject> =
  zod
    .object({
      advanced_analytics: zod.boolean(),
      agent_forwarding: zod.boolean(),
      allow_ccs: zod.boolean(),
      allow_email_template_customization: zod.boolean(),
      automatic_answers: zod.boolean(),
      bcc_archiving: zod.boolean(),
      benchmark_opt_out: zod.boolean(),
      business_hours: zod.boolean(),
      chat: zod.boolean(),
      chat_about_my_ticket: zod.boolean(),
      csat_reason_code: zod.boolean(),
      custom_dkim_domain: zod.boolean(),
      customer_context_as_default: zod.boolean(),
      customer_satisfaction: zod.boolean(),
      dynamic_contents: zod.boolean(),
      explore: zod.boolean(),
      explore_on_support_ent_plan: zod.boolean(),
      explore_on_support_pro_plan: zod.boolean(),
      facebook: zod.boolean(),
      facebook_login: zod.boolean(),
      fallback_composer: zod.boolean(),
      forum_analytics: zod.boolean(),
      good_data_and_explore: zod.boolean(),
      google_login: zod.boolean(),
      insights: zod.boolean(),
      is_abusive: zod.boolean(),
      light_agents: zod.boolean(),
      markdown: zod.boolean(),
      on_hold_status: zod.boolean(),
      rich_content_in_emails: zod.boolean(),
      sandbox: zod.boolean(),
      satisfaction_prediction: zod.boolean(),
      suspended_ticket_notification: zod.boolean(),
      ticket_forms: zod.boolean(),
      ticket_tagging: zod.boolean(),
      topic_suggestion: zod.boolean(),
      twitter: zod.boolean(),
      twitter_login: zod.boolean(),
      user_org_fields: zod.boolean(),
      user_tagging: zod.boolean(),
      voice: zod.boolean(),
    })
    .describe(
      "The active features for an account. See [Active Features](#active-features)",
    );

export const accountSettingsAgentObjectSchema: zod.ZodSchema<AccountSettingsAgentObject> =
  zod
    .object({
      agent_home: zod.boolean(),
      agent_workspace: zod.boolean(),
      aw_self_serve_migration_enabled: zod.boolean(),
      focus_mode: zod.boolean(),
      idle_timeout_enabled: zod.boolean(),
      unified_agent_statuses: zod.boolean(),
    })
    .describe("Configuration for the agent workspace. See [Agents](#agents)");

export const accountSettingsApiObjectSchema: zod.ZodSchema<AccountSettingsApiObject> =
  zod
    .object({
      accepted_api_agreement: zod.boolean(),
      api_password_access: zod.string(),
      api_token_access: zod.string(),
    })
    .describe("API configuration options. See [API](#api)");

export const accountSettingsAppsObjectSchema: zod.ZodSchema<AccountSettingsAppsObject> =
  zod
    .object({
      create_private: zod.boolean(),
      create_public: zod.boolean(),
      use: zod.boolean(),
    })
    .describe("Apps configuration options. See [Apps](#apps)");

export const accountSettingsBillingObjectSchema: zod.ZodSchema<AccountSettingsBillingObject> =
  zod
    .object({ backend: zod.string() })
    .describe("Billing configuration options. See [Billing](#billing)");

export const accountSettingsBrandingObjectSchema: zod.ZodSchema<AccountSettingsBrandingObject> =
  zod
    .object({
      favicon_url: zod.string().nullable(),
      header_color: zod.string(),
      header_logo_url: zod.string().nullable(),
      page_background_color: zod.string(),
      tab_background_color: zod.string(),
      text_color: zod.string(),
    })
    .describe("Branding settings. See [Branding](#branding)");

export const accountSettingsBrandsObjectSchema: zod.ZodSchema<AccountSettingsBrandsObject> =
  zod
    .object({
      default_brand_id: zod.number(),
      require_brand_on_new_tickets: zod.boolean(),
    })
    .describe("Brand settings. See [Brands](#brands)");

export const accountSettingsCdnObjectSchema: zod.ZodSchema<AccountSettingsCdnObject> =
  zod
    .object({
      cdn_provider: zod.string(),
      fallback_cdn_provider: zod.string(),
      hosts: zod.array(zod.object({ name: zod.string(), url: zod.string() })),
    })
    .describe("CDN settings");

export const accountSettingsChatObjectSchema: zod.ZodSchema<AccountSettingsChatObject> =
  zod
    .object({
      available: zod.boolean(),
      enabled: zod.boolean(),
      integrated: zod.boolean(),
      maximum_request_count: zod.number(),
      welcome_message: zod.string(),
    })
    .describe("Zendesk Chat settings. See [Chat](#chat)");

export const accountSettingsCrossSellObjectSchema: zod.ZodSchema<AccountSettingsCrossSellObject> =
  zod
    .object({
      show_chat_tooltip: zod.boolean(),
      xsell_source: zod.string().nullable(),
    })
    .describe("Cross Sell settings");

export const accountSettingsGooddataAdvancedAnalyticsObjectSchema: zod.ZodSchema<AccountSettingsGooddataAdvancedAnalyticsObject> =
  zod
    .object({ enabled: zod.boolean() })
    .describe(
      "GoodData settings, used for insights. Legacy configuration prior to Zendesk Explore. See [GoodData Advanced Analytics](#gooddata-advanced-analytics)",
    );

export const accountSettingsGoogleAppsObjectSchema: zod.ZodSchema<AccountSettingsGoogleAppsObject> =
  zod
    .object({
      has_google_apps: zod.boolean(),
      has_google_apps_admin: zod.boolean(),
    })
    .describe("Google Apps configuration. See [G Suite](#g-suite)");

export const accountSettingsGroupObjectSchema: zod.ZodSchema<AccountSettingsGroupObject> =
  zod
    .object({ check_group_name_uniqueness: zod.boolean() })
    .describe("Group configuration");

export const accountSettingsLimitsObjectSchema: zod.ZodSchema<AccountSettingsLimitsObject> =
  zod
    .object({ attachment_size: zod.number() })
    .describe("Account limits configuration. See [Limits](#limits)");

export const accountSettingsLocalizationObjectSchema: zod.ZodSchema<AccountSettingsLocalizationObject> =
  zod
    .object({ locale_ids: zod.array(zod.number()) })
    .describe(
      "Internationalization configuration settings. See [Localization](#localization)",
    );

export const accountSettingsLotusObjectSchema: zod.ZodSchema<AccountSettingsLotusObject> =
  zod
    .object({
      pod_id: zod.number(),
      prefer_lotus: zod.boolean(),
      reporting: zod.boolean(),
    })
    .describe("Support UI settings. See [Lotus](#lotus)");

export const accountSettingsMetricsObjectSchema: zod.ZodSchema<AccountSettingsMetricsObject> =
  zod
    .object({ account_size: zod.string() })
    .describe("Account metrics settings. See [Metrics](#metrics)");

export const accountSettingsOnboardingObjectSchema: zod.ZodSchema<AccountSettingsOnboardingObject> =
  zod
    .object({
      checklist_onboarding_version: zod.number(),
      onboarding_segments: zod.string().nullable(),
      product_sign_up: zod.string().nullable(),
    })
    .describe("Onboarding settings");

export const accountSettingsRoutingObjectSchema: zod.ZodSchema<AccountSettingsRoutingObject> =
  zod
    .object({
      autorouting_tag: zod.string(),
      enabled: zod.boolean(),
      max_email_capacity: zod.number(),
      max_messaging_capacity: zod.number(),
      reassignment_messaging_enabled: zod.boolean(),
      reassignment_messaging_timeout: zod.number(),
      reassignment_talk_timeout: zod.number(),
    })
    .describe("Configuration for routing. See [Routing](#routing)");

export const accountSettingsRuleObjectSchema: zod.ZodSchema<AccountSettingsRuleObject> =
  zod
    .object({
      macro_most_used: zod.boolean(),
      macro_order: zod.string(),
      skill_based_filtered_views: zod.array(zod.object({}).passthrough()),
      using_skill_based_routing: zod.boolean(),
    })
    .describe(
      "Rules settings for triggers, macros, views, and automations. See [Rules](#rules)",
    );

export const accountSettingsSideConversationsObjectSchema: zod.ZodSchema<AccountSettingsSideConversationsObject> =
  zod
    .object({
      email_channel: zod.boolean(),
      msteams_channel: zod.boolean(),
      show_in_context_panel: zod.boolean(),
      slack_channel: zod.boolean(),
      tickets_channel: zod.boolean(),
    })
    .describe("Side conversations settings");

export const accountSettingsStatisticsObjectSchema: zod.ZodSchema<AccountSettingsStatisticsObject> =
  zod
    .object({
      forum: zod.boolean(),
      rule_usage: zod.boolean(),
      search: zod.boolean(),
    })
    .describe("Account statistics settings. See [Statistics](#statistics)");

export const accountSettingsTicketFormObjectSchema: zod.ZodSchema<AccountSettingsTicketFormObject> =
  zod
    .object({
      raw_ticket_forms_instructions: zod.string(),
      ticket_forms_instructions: zod.string(),
    })
    .describe("Ticket form settings. See [Ticket Form](#ticket-form)");

export const accountSettingsTicketObjectSchema: zod.ZodSchema<AccountSettingsTicketObject> =
  zod
    .object({
      accepted_new_collaboration_tos: zod.boolean(),
      agent_collision: zod.boolean(),
      agent_invitation_enabled: zod.boolean(),
      agent_ticket_deletion: zod.boolean(),
      allow_group_reset: zod.boolean(),
      assign_default_organization: zod.boolean(),
      assign_tickets_upon_solve: zod.boolean(),
      auto_translation_enabled: zod.boolean(),
      auto_updated_ccs_followers_rules: zod.boolean(),
      collaboration: zod.boolean(),
      comments_public_by_default: zod.boolean(),
      email_attachments: zod.boolean(),
      emoji_autocompletion: zod.boolean(),
      follower_and_email_cc_collaborations: zod.boolean(),
      has_color_text: zod.boolean(),
      is_first_comment_private_enabled: zod.boolean(),
      light_agent_email_ccs_allowed: zod.boolean(),
      list_empty_views: zod.boolean(),
      list_newest_comments_first: zod.boolean(),
      markdown_ticket_comments: zod.boolean(),
      maximum_personal_views_to_list: zod.number(),
      private_attachments: zod.boolean(),
      rich_text_comments: zod.boolean(),
      status_hold: zod.boolean(),
      tagging: zod.boolean(),
      using_skill_based_routing: zod.boolean(),
    })
    .describe("Ticket settings. See [Tickets](#tickets)");

export const accountSettingsTicketSharingPartnersObjectSchema: zod.ZodSchema<AccountSettingsTicketSharingPartnersObject> =
  zod
    .object({ support_addresses: zod.array(zod.string()) })
    .describe(
      "Ticket sharing partners settings. See [Ticket Sharing Partners](#ticket-sharing-partners)",
    );

export const accountSettingsTwitterObjectSchema: zod.ZodSchema<AccountSettingsTwitterObject> =
  zod
    .object({ shorten_url: zod.string() })
    .describe("X (formerly Twitter) settings. See [X](#x-formerly-twitter)");

export const accountSettingsUserObjectSchema: zod.ZodSchema<AccountSettingsUserObject> =
  zod
    .object({
      agent_created_welcome_emails: zod.boolean(),
      end_user_phone_number_validation: zod.boolean(),
      have_gravatars_enabled: zod.boolean(),
      language_selection: zod.boolean(),
      multiple_organizations: zod.boolean(),
      tagging: zod.boolean(),
      time_zone_selection: zod.boolean(),
    })
    .describe("User settings. See [Users](#users)");

export const accountSettingsVoiceObjectSchema: zod.ZodSchema<AccountSettingsVoiceObject> =
  zod
    .object({
      agent_confirmation_when_forwarding: zod.boolean(),
      agent_wrap_up_after_calls: zod.boolean(),
      enabled: zod.boolean(),
      logging: zod.boolean(),
      maximum_queue_size: zod.number(),
      maximum_queue_wait_time: zod.number(),
      only_during_business_hours: zod.boolean(),
      outbound_enabled: zod.boolean(),
      recordings_public: zod.boolean(),
      uk_mobile_forwarding: zod.boolean(),
    })
    .describe("Zendesk Talk settings. See [Voice](#voice)");

export const accountSettingsObjectSchema: zod.ZodSchema<AccountSettingsObject> =
  zod.object({
    active_features: accountSettingsActiveFeaturesObjectSchema,
    agents: accountSettingsAgentObjectSchema,
    api: accountSettingsApiObjectSchema,
    apps: accountSettingsAppsObjectSchema,
    billing: accountSettingsBillingObjectSchema,
    branding: accountSettingsBrandingObjectSchema,
    brands: accountSettingsBrandsObjectSchema,
    cdn: accountSettingsCdnObjectSchema,
    chat: accountSettingsChatObjectSchema,
    cross_sell: accountSettingsCrossSellObjectSchema,
    gooddata_advanced_analytics:
      accountSettingsGooddataAdvancedAnalyticsObjectSchema,
    google_apps: accountSettingsGoogleAppsObjectSchema,
    groups: accountSettingsGroupObjectSchema,
    limits: accountSettingsLimitsObjectSchema,
    localization: accountSettingsLocalizationObjectSchema,
    lotus: accountSettingsLotusObjectSchema,
    metrics: accountSettingsMetricsObjectSchema,
    onboarding: accountSettingsOnboardingObjectSchema,
    routing: accountSettingsRoutingObjectSchema,
    rule: accountSettingsRuleObjectSchema,
    side_conversations: accountSettingsSideConversationsObjectSchema,
    statistics: accountSettingsStatisticsObjectSchema,
    ticket_form: accountSettingsTicketFormObjectSchema,
    ticket_sharing_partners: accountSettingsTicketSharingPartnersObjectSchema,
    tickets: accountSettingsTicketObjectSchema,
    twitter: accountSettingsTwitterObjectSchema,
    user: accountSettingsUserObjectSchema,
    voice: accountSettingsVoiceObjectSchema,
  });

export const accountSettingsResponseSchema: zod.ZodSchema<AccountSettingsResponse> =
  zod.object({ settings: accountSettingsObjectSchema });

export const actionObjectSchema: zod.ZodSchema<ActionObject> = zod.object({
  field: zod.string().describe("The name of a ticket field to modify"),
  value: zod.string().describe("The new value of the field"),
});

export const actionsObjectSchema: zod.ZodSchema<ActionsObject> = zod.object({
  actions: zod.array(actionObjectSchema),
});

export const activitiesCountResponseSchema: zod.ZodSchema<ActivitiesCountResponse> =
  zod.object({
    count: zod.object({ refreshed_at: zod.string(), value: zod.number() }),
  });

export const assigneeFieldAssignableAgentObjectSchema: zod.ZodSchema<AssigneeFieldAssignableAgentObject> =
  zod.object({
    avatar_url: zod.string().nullable().describe("URL of Agent's avatar"),
    id: zod.number().describe("Agent Support ID"),
    name: zod.string().describe("Name of the agent"),
  });

export const assigneeFieldAssignableGroupAgentsResponseSchema: zod.ZodSchema<AssigneeFieldAssignableGroupAgentsResponse> =
  zod.object({
    agents: zod.array(assigneeFieldAssignableAgentObjectSchema),
    count: zod
      .number()
      .describe("Number of agents listed in `agents` property."),
    next_page: zod.string().nullable(),
    previous_page: zod.string().nullable(),
  });

export const assigneeFieldAssignableGroupObjectSchema: zod.ZodSchema<AssigneeFieldAssignableGroupObject> =
  zod.object({
    description: zod.string().describe("Description of the group"),
    id: zod.number().describe("Group ID"),
    name: zod.string().describe("Name of the group"),
  });

export const assigneeFieldAssignableGroupsResponseSchema: zod.ZodSchema<AssigneeFieldAssignableGroupsResponse> =
  zod.object({
    count: zod
      .number()
      .describe("Number of groups listed in `groups` property."),
    groups: zod.array(assigneeFieldAssignableGroupObjectSchema),
    next_page: zod.string().nullable(),
    previous_page: zod.string().nullable(),
  });

export const assigneeFieldAssignableSearchAgentObjectSchema: zod.ZodSchema<AssigneeFieldAssignableSearchAgentObject> =
  zod.object({
    group: zod.string().describe("Name of the agent's group"),
    group_id: zod.number().describe("Agent's Group ID"),
    id: zod.number().describe("Agent ID"),
    name: zod.string().describe("Name of the agent"),
    photo_url: zod.string().nullable().describe("URL of Avatar"),
  });

export const assigneeFieldAssignableSearchGroupObjectSchema: zod.ZodSchema<AssigneeFieldAssignableSearchGroupObject> =
  zod.object({
    id: zod.number().describe("Group ID"),
    name: zod.string().describe("Name of the group"),
  });

export const assigneeFieldAssignableGroupsAndAgentsSearchResponseSchema: zod.ZodSchema<AssigneeFieldAssignableGroupsAndAgentsSearchResponse> =
  zod.object({
    agents: zod.array(assigneeFieldAssignableSearchAgentObjectSchema),
    count: zod
      .number()
      .describe("Number of agents + groups listed from search result."),
    groups: zod.array(assigneeFieldAssignableSearchGroupObjectSchema),
  });

export const attachmentBaseObjectSchema: zod.ZodSchema<AttachmentBaseObject> =
  zod.object({
    content_type: zod
      .string()
      .describe('The content type of the image. Example value: "image/png"'),
    content_url: zod
      .string()
      .describe(
        "A full URL where the attachment image file can be downloaded. The file may be hosted externally so take care not to inadvertently send Zendesk authentication credentials. See [Working with url properties](/documentation/ticketing/managing-tickets/working-with-url-properties)",
      ),
    deleted: zod.boolean().describe("If true, the attachment has been deleted"),
    file_name: zod.string().describe("The name of the image file"),
    height: zod
      .string()
      .describe(
        "The height of the image file in pixels. If height is unknown, returns null",
      ),
    id: zod.number().describe("Automatically assigned when created"),
    inline: zod
      .boolean()
      .describe(
        "If true, the attachment is excluded from the attachment list and the attachment's URL\ncan be referenced within the comment of a ticket. Default is false\n",
      ),
    malware_access_override: zod
      .boolean()
      .describe(
        "If true, you can download an attachment flagged as malware. If false, you can't download such an attachment.",
      ),
    malware_scan_result: zod
      .string()
      .describe(
        'The result of the malware scan. There is a delay between the time the attachment is uploaded and when the malware scan is completed. Usually the scan is done within a few seconds, but high load conditions can delay the scan results. Possible values: "malware_found", "malware_not_found", "failed_to_scan", "not_scanned"',
      ),
    mapped_content_url: zod
      .string()
      .describe("The URL the attachment image file has been mapped to"),
    size: zod.number().describe("The size of the image file in bytes"),
    url: zod.string().describe("A URL to access the attachment details"),
    width: zod
      .string()
      .describe(
        "The width of the image file in pixels. If width is unknown, returns null",
      ),
  });

export const attachmentThumbnailsSchema: zod.ZodSchema<AttachmentThumbnails> =
  zod.object({
    thumbnails: zod
      .array(attachmentBaseObjectSchema)
      .describe(
        "An array of attachment objects. Note that photo thumbnails do not have thumbnails",
      ),
  });

export const attachmentObjectSchema: zod.ZodSchema<AttachmentObject> = zod
  .intersection(attachmentBaseObjectSchema, attachmentThumbnailsSchema)
  .describe(
    "A file represented as an [Attachment](/api-reference/ticketing/tickets/ticket-attachments/) object",
  );

export const attachmentResponseSchema: zod.ZodSchema<AttachmentResponse> =
  zod.object({ attachment: attachmentObjectSchema });

export const attachmentUpdateInputSchema: zod.ZodSchema<AttachmentUpdateInput> =
  zod.object({
    malware_access_override: zod
      .boolean()
      .describe("If true, allows access to attachments with detected malware."),
  });

export const attachmentUpdateRequestSchema: zod.ZodSchema<AttachmentUpdateRequest> =
  zod.object({ attachment: attachmentUpdateInputSchema });

export const attachmentUploadResponseSchema: zod.ZodSchema<AttachmentUploadResponse> =
  zod.object({
    upload: zod.object({
      attachment: attachmentObjectSchema,
      attachments: zod.array(attachmentObjectSchema),
      token: zod.string().describe("Token for subsequent request"),
    }),
  });

export const auditLogObjectSchema: zod.ZodSchema<AuditLogObject> = zod.object({
  action: zod
    .string()
    .describe(
      'Type of change made. Possible values are "create", "destroy", "exported", "login", and "update"\n',
    ),
  action_label: zod.string().describe("Localized string of action field"),
  actor_id: zod
    .number()
    .describe("id of the user or system that initiated the change"),
  actor_name: zod
    .string()
    .describe("Name of the user or system that initiated the change"),
  change_description: zod
    .string()
    .describe("The description of the change that occurred"),
  created_at: zod.string().describe("The time the audit got created"),
  id: zod.number().describe("The id automatically assigned upon creation"),
  ip_address: zod
    .string()
    .describe("The IP address of the user doing the audit"),
  source_id: zod.number().describe("The id of the item being audited"),
  source_label: zod.string().describe("The name of the item being audited"),
  source_type: zod
    .string()
    .describe(
      'Item type being audited. Typically describes the system where the change\nwas initiated. Possible values vary based on your account\'s Zendesk\nproducts and activity. Common values include "apitoken", "rule", "ticket",\n"user", and "zendesk/app_market/app". The "rule" value is used for\n[automations](https://support.zendesk.com/hc/en-us/articles/4408832701850),\n[macros](https://support.zendesk.com/hc/en-us/articles/4408844187034),\n[triggers](https://support.zendesk.com/hc/en-us/articles/4408822236058),\n[views](https://support.zendesk.com/hc/en-us/articles/4408888828570),\nand other automated business rules\n',
    ),
  url: zod.string().describe("The URL to access the audit log"),
});

export const auditLogResponseSchema: zod.ZodSchema<AuditLogResponse> =
  zod.object({ audit_log: auditLogObjectSchema });

export const auditLogsResponseSchema: zod.ZodSchema<AuditLogsResponse> =
  zod.object({ audit_logs: zod.array(auditLogObjectSchema) });

export const authorObjectSchema: zod.ZodSchema<AuthorObject> = zod.object({
  email: zod.string().describe("The author email"),
  id: zod.number().describe("The author id"),
  name: zod.string().describe("The author name"),
});

export const bookmarkInputSchema: zod.ZodSchema<BookmarkInput> = zod.object({
  ticket_id: zod.number().describe("The id of the ticket the bookmark is for."),
});

export const bookmarkCreateRequestSchema: zod.ZodSchema<BookmarkCreateRequest> =
  zod.object({ bookmark: bookmarkInputSchema });

export const brandObjectSchema: zod.ZodSchema<BrandObject> = zod.object({
  active: zod.boolean().describe("If the brand is set as active"),
  brand_url: zod.string().describe("The url of the brand"),
  created_at: zod.string().describe("The time the brand was created"),
  default: zod
    .boolean()
    .describe("Is the brand the default brand for this account"),
  has_help_center: zod.boolean().describe("If the brand has a Help Center"),
  help_center_state: zod
    .union([
      zod.literal("enabled"),
      zod.literal("disabled"),
      zod.literal("restricted"),
    ])
    .describe("The state of the Help Center"),
  host_mapping: zod
    .string()
    .describe(
      "The hostmapping to this brand, if any. Only admins view this property.",
    ),
  id: zod
    .number()
    .describe("The ID automatically assigned when the brand is created"),
  is_deleted: zod.boolean().describe("If the brand object is deleted or not"),
  logo: attachmentObjectSchema,
  name: zod.string().describe("The name of the brand"),
  signature_template: zod
    .string()
    .describe("The signature template for a brand"),
  subdomain: zod.string().describe("The subdomain of the brand"),
  ticket_form_ids: zod
    .array(zod.unknown())
    .describe("The ids of ticket forms that are available for use by a brand"),
  updated_at: zod.string().describe("The time of the last update of the brand"),
  url: zod.string().describe("The API url of this brand"),
});

export const brandCreateRequestSchema: zod.ZodSchema<BrandCreateRequest> =
  zod.object({ brand: brandObjectSchema });

export const brandResponseSchema: zod.ZodSchema<BrandResponse> = zod.object({
  brand: brandObjectSchema,
});

export const brandUpdateRequestSchema: zod.ZodSchema<BrandUpdateRequest> =
  zod.object({ brand: brandObjectSchema });

export const bulkUpdateDefaultCustomStatusRequestSchema: zod.ZodSchema<BulkUpdateDefaultCustomStatusRequest> =
  zod.object({
    ids: zod
      .string()
      .describe(
        "The comma-separated list of custom ticket status ids to be set as default for their status categories",
      ),
  });

export const bulkUpdateDefaultCustomStatusResponseSchema: zod.ZodSchema<BulkUpdateDefaultCustomStatusResponse> =
  zod.object({});

export const channelFrameworkResultStatusObjectSchema: zod.ZodSchema<ChannelFrameworkResultStatusObject> =
  zod
    .object({
      code: zod
        .string()
        .describe(
          "A code indicating the status of the import of the resource, as described in [status codes](#status-codes)",
        ),
      description: zod
        .string()
        .describe(
          "In the case of an exception, a description of the exception. Otherwise, not present.",
        ),
    })
    .describe("The status of the import for the indicated resource");

export const channelFrameworkResultObjectSchema: zod.ZodSchema<ChannelFrameworkResultObject> =
  zod.object({
    external_resource_id: zod
      .string()
      .describe("The external ID of the resource, as passed in"),
    status: channelFrameworkResultStatusObjectSchema,
  });

export const channelFrameworkPushResultsResponseSchema: zod.ZodSchema<ChannelFrameworkPushResultsResponse> =
  zod.object({
    results: zod
      .array(channelFrameworkResultObjectSchema)
      .describe("An array of [result objects](#result-object)"),
  });

export const collaboratorObjectSchema: zod.ZodSchema<CollaboratorObject> =
  zod.object({ email: zod.string(), name: zod.string() });

export const complianceDeletionStatusObjectSchema: zod.ZodSchema<ComplianceDeletionStatusObject> =
  zod.object({
    account_subdomain: zod.string(),
    action: zod.string(),
    application: zod.string(),
    created_at: zod.string(),
    executer_id: zod.number().nullable(),
    user_id: zod.number(),
  });

export const complianceDeletionStatusesResponseSchema: zod.ZodSchema<ComplianceDeletionStatusesResponse> =
  zod.object({
    compliance_deletion_statuses: zod.array(
      complianceDeletionStatusObjectSchema,
    ),
  });

export const conditionObjectSchema: zod.ZodSchema<ConditionObject> = zod.object(
  {
    field: zod.string().describe("The name of a ticket field"),
    operator: zod.string().describe("A comparison operator"),
    value: zod
      .union([zod.string(), zod.array(zod.unknown())])
      .describe("The value of a ticket field"),
  },
);

export const conditionsObjectSchema: zod.ZodSchema<ConditionsObject> = zod
  .object({
    all: zod
      .array(conditionObjectSchema)
      .describe(
        "Logical AND. Tickets must fulfill all of the conditions to be considered matching",
      ),
    any: zod
      .array(conditionObjectSchema)
      .describe(
        "Logical OR. Tickets may satisfy any of the conditions to be considered matching",
      ),
  })
  .describe(
    "An object that describes the conditions under which the automation will execute. See [Conditions reference](/documentation/ticketing/reference-guides/conditions-reference)",
  );

export const automationObjectSchema: zod.ZodSchema<AutomationObject> =
  zod.object({
    actions: zod
      .array(actionObjectSchema)
      .describe(
        "An object describing what the automation will do. See [Actions reference](/documentation/ticketing/reference-guides/actions-reference)",
      ),
    active: zod.boolean().describe("Whether the automation is active"),
    conditions: conditionsObjectSchema,
    created_at: zod.string().describe("The time the automation was created"),
    default: zod
      .boolean()
      .describe("If true, the automation is a default automation"),
    id: zod.number().describe("Automatically assigned when created"),
    position: zod
      .number()
      .describe(
        "The position of the automation which specifies the order it will be executed",
      ),
    raw_title: zod.string().describe("The raw title of the automation"),
    title: zod.string().describe("The title of the automation"),
    updated_at: zod
      .string()
      .describe("The time of the last update of the automation"),
  });

export const automationResponseSchema: zod.ZodSchema<AutomationResponse> =
  zod.object({ automation: automationObjectSchema });

export const automationsResponseSchema: zod.ZodSchema<AutomationsResponse> =
  zod.object({
    automations: zod.array(automationObjectSchema),
    count: zod.number(),
    next_page: zod.string().nullable(),
    previous_page: zod.string().nullable(),
  });

export const countOrganizationObjectSchema: zod.ZodSchema<CountOrganizationObject> =
  zod.object({ refreshed_at: zod.string(), value: zod.number() });

export const countOrganizationResponseSchema: zod.ZodSchema<CountOrganizationResponse> =
  zod.object({ count: countOrganizationObjectSchema });

export const countResponseSchema: zod.ZodSchema<CountResponse> = zod.object({
  count: zod.object({ refreshed_at: zod.string(), value: zod.number() }),
});

export const createResourceResultSchema: zod.ZodSchema<CreateResourceResult> =
  zod.object({
    id: zod.number().describe("the id of the new resource"),
    index: zod.number().describe("the index number of the resul"),
  });

export const customFieldOptionObjectSchema: zod.ZodSchema<CustomFieldOptionObject> =
  zod.object({
    id: zod.number().describe("Automatically assigned upon creation"),
    name: zod.string().describe("Name of the dropdown option"),
    position: zod.number().describe("Position of the dropdown option"),
    raw_name: zod.string().describe("Raw name of the dropdown option"),
    url: zod.string().describe("URL of the dropdown option"),
    value: zod.string().describe("Value of the dropdown option"),
  });

export const customFieldObjectSchema: zod.ZodSchema<CustomFieldObject> =
  zod.object({
    active: zod.boolean().describe("If true, this field is available for use"),
    created_at: zod
      .string()
      .describe("The time of the last update of the ticket field"),
    custom_field_options: zod
      .array(customFieldOptionObjectSchema)
      .describe(
        'Required and presented for a custom field of type "dropdown". Each option is represented by an object with a `name` and `value` property',
      ),
    description: zod
      .string()
      .describe("User-defined description of this field's purpose"),
    id: zod.number().describe("Automatically assigned upon creation"),
    key: zod
      .string()
      .describe(
        "A unique key that identifies this custom field. This is used for updating the field and referencing in placeholders. Cannot be reused if deleted.",
      ),
    position: zod
      .number()
      .describe("Ordering of the field relative to other fields"),
    raw_description: zod
      .string()
      .describe(
        "The dynamic content placeholder, if present, or the `description` value, if not. See [Dynamic Content Items](/api-reference/ticketing/ticket-management/dynamic_content/)",
      ),
    raw_title: zod
      .string()
      .describe(
        "The dynamic content placeholder, if present, or the `title` value, if not. See [Dynamic Content Items](/api-reference/ticketing/ticket-management/dynamic_content/)",
      ),
    regexp_for_validation: zod
      .string()
      .nullable()
      .describe(
        "Regular expression field only. The validation pattern for a field value to be deemed valid",
      ),
    relationship_filter: zod
      .object({})
      .describe(
        "A filter definition that allows your autocomplete to filter down results",
      ),
    relationship_target_type: zod
      .string()
      .describe(
        'A representation of what type of object the field references. Options are "zen:user", "zen:organization", "zen:ticket", and "zen:custom_object:CUSTOM_OBJECT_KEY". For example "zen:custom_object:apartment".',
      ),
    system: zod
      .boolean()
      .describe(
        "If true, only active and position values of this field can be changed",
      ),
    tag: zod
      .string()
      .describe(
        'Optional for custom field of type "checkbox"; not presented otherwise.',
      ),
    title: zod.string().describe("The title of the custom field"),
    type: zod
      .string()
      .describe(
        'The custom field type: "checkbox", "date", "decimal", "dropdown", "integer", ["lookup"](/api-reference/ticketing/lookup_relationships/lookup_relationships/), "regexp", "text", or "textarea"',
      ),
    updated_at: zod
      .string()
      .describe("The time of the last update of the ticket field"),
    url: zod.string().describe("The URL for this resource"),
  });

export const customFieldOptionResponseSchema: zod.ZodSchema<CustomFieldOptionResponse> =
  zod.object({ custom_field_option: customFieldOptionObjectSchema });

export const customFieldOptionsResponseSchema: zod.ZodSchema<CustomFieldOptionsResponse> =
  zod.object({
    count: zod.number().describe("Total count of records retrieved"),
    custom_field_options: zod.array(customFieldOptionObjectSchema),
    next_page: zod.string().nullable().describe("URL of the next page"),
    previous_page: zod.string().nullable().describe("URL of the previous page"),
  });

export const customObjectSchema: zod.ZodSchema<CustomObject> = zod.object({
  created_at: zod.string().describe("The time the object type was created"),
  created_by_user_id: zod
    .string()
    .describe("Id of a user who created the object"),
  description: zod.string().describe("User-defined description of the object"),
  key: zod
    .string()
    .describe(
      "A user-defined unique identifier. Writable on create only. Cannot be reused if deleted.",
    ),
  raw_description: zod
    .string()
    .describe(
      'The dynamic content placeholder, if present, or the "raw_description" value, if not. See [Dynamic Content Items](/api-reference/ticketing/ticket-management/dynamic_content/)',
    ),
  raw_title: zod
    .string()
    .describe(
      'The dynamic content placeholder, if present, or the "title" value, if not. See [Dynamic Content Items](/api-reference/ticketing/ticket-management/dynamic_content/)',
    ),
  raw_title_pluralized: zod
    .string()
    .describe(
      'The dynamic content placeholder, if present, or the "raw_title_pluralized" value, if not. See [Dynamic Content Items](/api-reference/ticketing/ticket-management/dynamic_content/)',
    ),
  title: zod.string().describe("User-defined display name for the object"),
  title_pluralized: zod
    .string()
    .describe("User-defined pluralized version of the object's title"),
  updated_at: zod
    .string()
    .describe("The time of the last update of the object"),
  updated_by_user_id: zod
    .string()
    .describe("Id of the last user who updated the object"),
  url: zod.string().describe("Direct link to the specific custom object"),
});

export const customObjectCreateInputSchema: zod.ZodSchema<CustomObjectCreateInput> =
  zod.object({
    key: zod.string().describe("Unique identifier. Writable on create only"),
    title: zod.string().describe("Display name for the object"),
    title_pluralized: zod
      .string()
      .describe("Pluralized version of the object's title"),
  });

export const customObjectFieldSchema: zod.ZodSchema<CustomObjectField> =
  customFieldObjectSchema;

export const customObjectFieldResponseSchema: zod.ZodSchema<CustomObjectFieldResponse> =
  zod.object({ custom_object_field: customObjectFieldSchema });

export const customObjectFieldsCreateRequestSchema: zod.ZodSchema<CustomObjectFieldsCreateRequest> =
  zod.object({ custom_object_field: customObjectFieldSchema });

export const customObjectFieldsResponseSchema: zod.ZodSchema<CustomObjectFieldsResponse> =
  zod.object({ custom_object_fields: zod.array(customObjectFieldSchema) });

export const customObjectLimitsResponseSchema: zod.ZodSchema<CustomObjectLimitsResponse> =
  zod.object({
    count: zod
      .number()
      .describe("The current numnber of the requested resource"),
    limit: zod
      .number()
      .describe("The maximum allowed number for the requested resource"),
  });

export const customObjectRecordSchema: zod.ZodSchema<CustomObjectRecord> =
  zod.object({
    created_at: zod.string().describe("The time the object was created"),
    created_by_user_id: zod
      .string()
      .describe("Id of a user who created the object"),
    custom_object_fields: zod.object({}).passthrough(),
    custom_object_key: zod
      .string()
      .describe("A user-defined unique identifier"),
    external_id: zod
      .string()
      .nullable()
      .describe(
        "An id you can use to link custom object records to external data",
      ),
    id: zod.string().describe("Automatically assigned upon creation"),
    name: zod.string().describe("User-defined display name for the object"),
    updated_at: zod
      .string()
      .describe("The time of the last update of the object"),
    updated_by_user_id: zod
      .string()
      .describe("Id of the last user who updated the object"),
    url: zod.string().describe("Direct link to the specific custom object"),
  });

export const customObjectRecordResponseSchema: zod.ZodSchema<CustomObjectRecordResponse> =
  zod.object({ custom_object_record: customObjectRecordSchema });

export const customObjectRecordsBulkCreateRequestSchema: zod.ZodSchema<CustomObjectRecordsBulkCreateRequest> =
  zod.object({
    job: zod.object({
      action: zod.string(),
      items: zod
        .array(customObjectRecordSchema)
        .describe(
          "An array of record objects for creation jobs, or an array of strings for deletion jobs.",
        ),
    }),
  });

export const customObjectRecordsCreateRequestSchema: zod.ZodSchema<CustomObjectRecordsCreateRequest> =
  zod.object({ custom_object_record: customObjectRecordSchema });

export const customObjectRecordsJobsResponseSchema: zod.ZodSchema<CustomObjectRecordsJobsResponse> =
  zod.object({
    job_status: zod.object({
      id: zod.string(),
      message: zod.string().nullable(),
      progress: zod.number().nullable(),
      results: zod.array(customObjectRecordSchema).nullable(),
      status: zod.string(),
      total: zod.number(),
      url: zod.string(),
    }),
  });

export const customObjectRecordsResponseSchema: zod.ZodSchema<CustomObjectRecordsResponse> =
  zod.object({
    count: zod
      .number()
      .describe("The number of results returned for the current request"),
    custom_object_records: zod.array(customObjectRecordSchema),
    links: zod.object({
      next: zod.string().nullable(),
      prev: zod.string().nullable(),
    }),
    meta: zod.object({
      after_cursor: zod.string().nullable(),
      before_cursor: zod.string().nullable(),
      has_more: zod.boolean(),
    }),
  });

export const customObjectRecordsUpsertRequestSchema: zod.ZodSchema<CustomObjectRecordsUpsertRequest> =
  zod.object({ custom_object_record: customObjectRecordSchema });

export const customObjectResponseSchema: zod.ZodSchema<CustomObjectResponse> =
  zod.object({ custom_object: customObjectSchema });

export const customObjectsCreateRequestSchema: zod.ZodSchema<CustomObjectsCreateRequest> =
  zod.object({ custom_object: customObjectCreateInputSchema });

export const customObjectsResponseSchema: zod.ZodSchema<CustomObjectsResponse> =
  zod.object({ custom_objects: zod.array(customObjectSchema) });

export const customRoleConfigurationObjectSchema: zod.ZodSchema<CustomRoleConfigurationObject> =
  zod
    .object({
      assign_tickets_to_any_group: zod
        .boolean()
        .describe("Whether or not the agent can assign tickets to any group"),
      chat_access: zod
        .boolean()
        .describe("Whether or not the agent has access to Chat"),
      end_user_list_access: zod
        .string()
        .describe(
          'Whether or not the agent can view lists of user profiles. Allowed values: "full", "none"',
        ),
      end_user_profile_access: zod
        .string()
        .describe(
          'What the agent can do with end-user profiles. Allowed values: "edit", "edit-within-org", "full", "readonly"',
        ),
      explore_access: zod
        .string()
        .describe('Allowed values: "edit", "full", "none", "readonly"'),
      forum_access: zod
        .string()
        .describe(
          'The kind of access the agent has to Guide. Allowed values: "edit-topics", "full", "readonly"',
        ),
      forum_access_restricted_content: zod.boolean(),
      group_access: zod
        .boolean()
        .describe("Whether or not the agent can add or modify groups"),
      light_agent: zod.boolean(),
      macro_access: zod
        .string()
        .describe(
          'What the agent can do with macros. Allowed values: "full", "manage-group", "manage-personal", "readonly"',
        ),
      manage_business_rules: zod
        .boolean()
        .describe("Whether or not the agent can manage business rules"),
      manage_contextual_workspaces: zod
        .boolean()
        .describe(
          "Whether or not the agent can view, add, and edit contextual workspaces",
        ),
      manage_dynamic_content: zod
        .boolean()
        .describe("Whether or not the agent can access dynamic content"),
      manage_extensions_and_channels: zod
        .boolean()
        .describe(
          "Whether or not the agent can manage channels and extensions",
        ),
      manage_facebook: zod
        .boolean()
        .describe("Whether or not the agent can manage Facebook pages"),
      manage_organization_fields: zod
        .boolean()
        .describe(
          "Whether or not the agent can create and manage organization fields",
        ),
      manage_ticket_fields: zod
        .boolean()
        .describe(
          "Whether or not the agent can create and manage ticket fields",
        ),
      manage_ticket_forms: zod
        .boolean()
        .describe(
          "Whether or not the agent can create and manage ticket forms",
        ),
      manage_user_fields: zod
        .boolean()
        .describe("Whether or not the agent can create and manage user fields"),
      moderate_forums: zod.boolean(),
      organization_editing: zod
        .boolean()
        .describe("Whether or not the agent can add or modify organizations"),
      organization_notes_editing: zod
        .boolean()
        .describe(
          "Whether or not the agent can add or modify organization notes",
        ),
      report_access: zod
        .string()
        .describe(
          'What the agent can do with reports. Allowed values: "full", "none", "readonly"',
        ),
      side_conversation_create: zod
        .boolean()
        .describe(
          "Whether or not the agent can contribute to side conversations",
        ),
      ticket_access: zod
        .string()
        .describe(
          'What kind of tickets the agent can access. Allowed values: "all", "assigned-only", "within-groups", "within-groups-and-public-groups", "within-organization"',
        ),
      ticket_comment_access: zod
        .string()
        .describe(
          'What type of comments the agent can make. Allowed values: "public", "none"',
        ),
      ticket_deletion: zod
        .boolean()
        .describe("Whether or not the agent can delete tickets"),
      ticket_editing: zod
        .boolean()
        .describe("Whether or not the agent can edit ticket properties"),
      ticket_merge: zod
        .boolean()
        .describe("Whether or not the agent can merge tickets"),
      ticket_tag_editing: zod
        .boolean()
        .describe("Whether or not the agent can edit ticket tags"),
      twitter_search_access: zod.boolean(),
      user_view_access: zod
        .string()
        .describe(
          'What the agent can do with customer lists. Allowed values: "full", "manage-group", "manage-personal", "none", "readonly"',
        ),
      view_access: zod
        .string()
        .describe(
          'What the agent can do with views. Allowed values: "full", "manage-group", "manage-personal", "playonly", "readonly"',
        ),
      view_deleted_tickets: zod
        .boolean()
        .describe("Whether or not the agent can view deleted tickets"),
      voice_access: zod
        .boolean()
        .describe(
          "Whether or not the agent can answer and place calls to end users",
        ),
      voice_dashboard_access: zod
        .boolean()
        .describe(
          "Whether or not the agent can view details about calls on the Talk dashboard",
        ),
    })
    .describe(
      "Configuration settings for the role. See [Configuration](#configuration)",
    );

export const customRoleObjectSchema: zod.ZodSchema<CustomRoleObject> =
  zod.object({
    configuration: customRoleConfigurationObjectSchema,
    created_at: zod.string().describe("The time the record was created"),
    description: zod.string().describe("A description of the role"),
    id: zod.number().describe("Automatically assigned on creation"),
    name: zod.string().describe("Name of the custom role"),
    role_type: zod
      .number()
      .describe(
        "The user's role. 0 stands for a custom agent, 1 for a light agent, 2 for a chat agent, 3 for a contributor, 4 for an admin and 5 for a billing admin. See [Understanding standard agent roles in Zendesk Support](https://support.zendesk.com/hc/en-us/articles/4409155971354-Understanding-standard-agent-roles-in-Zendesk-Support) in Zendesk help",
      ),
    team_member_count: zod
      .number()
      .describe("The number of team members assigned to this role"),
    updated_at: zod.string().describe("The time the record was last updated"),
  });

export const customRoleResponseSchema: zod.ZodSchema<CustomRoleResponse> =
  zod.object({ custom_role: customRoleObjectSchema });

export const customRolesResponseSchema: zod.ZodSchema<CustomRolesResponse> =
  zod.object({ custom_roles: zod.array(customRoleObjectSchema) });

export const customStatusObjectSchema: zod.ZodSchema<CustomStatusObject> =
  zod.object({
    active: zod
      .boolean()
      .describe(
        "If true, the custom status is set to active, If false, the custom status is set to inactive",
      ),
    agent_label: zod
      .string()
      .describe(
        "The label displayed to agents. Maximum length is 48 characters",
      ),
    created_at: zod
      .string()
      .describe("The date and time the custom ticket status was created"),
    default: zod
      .boolean()
      .describe(
        "If true, the custom status is set to default. If false, the custom status is set to non-default",
      ),
    description: zod
      .string()
      .describe(
        "The description of when the user should select this custom ticket status",
      ),
    end_user_description: zod
      .string()
      .describe("The description displayed to end users"),
    end_user_label: zod
      .string()
      .describe(
        "The label displayed to end users. Maximum length is 48 characters",
      ),
    id: zod
      .number()
      .describe(
        "Automatically assigned when the custom ticket status is created",
      ),
    raw_agent_label: zod
      .string()
      .describe(
        'The dynamic content placeholder. If the dynamic content placeholder is not available, this is the "agent_label" value. See [Dynamic Content Items](/api-reference/ticketing/ticket-management/dynamic_content/)',
      ),
    raw_description: zod
      .string()
      .describe(
        'The dynamic content placeholder. If the dynamic content placeholder is not available, this is the "description" value. [Dynamic Content Items](/api-reference/ticketing/ticket-management/dynamic_content/)',
      ),
    raw_end_user_description: zod
      .string()
      .describe(
        'The dynamic content placeholder. If the dynamic content placeholder is not available, this is the "end_user_description" value. See [Dynamic Content Items](/api-reference/ticketing/ticket-management/dynamic_content/)',
      ),
    raw_end_user_label: zod
      .string()
      .describe(
        'The dynamic content placeholder. If the dynamic content placeholder is not available, this is the "end_user_label" value. See [Dynamic Content Items](/api-reference/ticketing/ticket-management/dynamic_content/)',
      ),
    status_category: zod
      .union([
        zod.literal("new"),
        zod.literal("open"),
        zod.literal("pending"),
        zod.literal("hold"),
        zod.literal("solved"),
      ])
      .describe("The status category the custom ticket status belongs to"),
    updated_at: zod
      .string()
      .describe("The date and time the custom ticket status was last updated"),
  });

export const customStatusResponseSchema: zod.ZodSchema<CustomStatusResponse> =
  zod.object({ custom_status: customStatusObjectSchema });

export const customStatusUpdateInputSchema: zod.ZodSchema<CustomStatusUpdateInput> =
  zod.object({
    active: zod
      .boolean()
      .describe(
        "True if the custom status is set as active; inactive if false",
      ),
    agent_label: zod
      .string()
      .describe(
        'The dynamic content placeholder, if present, or the "agent_label" value, if not. See [Dynamic Content Items](/api-reference/ticketing/ticket-management/dynamic_content/)',
      ),
    description: zod
      .string()
      .describe(
        'The dynamic content placeholder, if present, or the "description" value, if not. See [Dynamic Content Items](/api-reference/ticketing/ticket-management/dynamic_content/)',
      ),
    end_user_description: zod
      .string()
      .describe(
        'The dynamic content placeholder, if present, or the "end_user_description" value, if not. See [Dynamic Content Items](/api-reference/ticketing/ticket-management/dynamic_content/)',
      ),
    end_user_label: zod
      .string()
      .describe(
        'The dynamic content placeholder, if present, or the "end_user_label" value, if not. See [Dynamic Content Items](/api-reference/ticketing/ticket-management/dynamic_content/)',
      ),
  });

export const customStatusCreateInputSchema: zod.ZodSchema<CustomStatusCreateInput> =
  zod.intersection(
    customStatusUpdateInputSchema,
    zod.object({
      status_category: zod
        .union([
          zod.literal("new"),
          zod.literal("open"),
          zod.literal("pending"),
          zod.literal("hold"),
          zod.literal("solved"),
        ])
        .describe("The status category the custom ticket status belongs to"),
    }),
  );

export const customStatusCreateRequestSchema: zod.ZodSchema<CustomStatusCreateRequest> =
  zod.object({ custom_status: customStatusCreateInputSchema });

export const customStatusUpdateRequestSchema: zod.ZodSchema<CustomStatusUpdateRequest> =
  zod.object({ custom_status: customStatusUpdateInputSchema });

export const customStatusesResponseSchema: zod.ZodSchema<CustomStatusesResponse> =
  zod.object({ custom_statuses: zod.array(customStatusObjectSchema) });

export const deletedUserObjectSchema: zod.ZodSchema<DeletedUserObject> =
  zod.object({
    active: zod.boolean(),
    created_at: zod.string(),
    email: zod.string(),
    id: zod.number(),
    locale: zod.string(),
    locale_id: zod.number(),
    name: zod.string(),
    organization_id: zod.number(),
    phone: zod.string().nullable(),
    photo: zod.object({}).nullable(),
    role: zod.string(),
    shared_phone_number: zod.string().nullable(),
    time_zone: zod.string(),
    updated_at: zod.string(),
    url: zod.string(),
  });

export const deletedUserResponseSchema: zod.ZodSchema<DeletedUserResponse> =
  zod.object({ deleted_user: deletedUserObjectSchema });

export const deletedUsersResponseSchema: zod.ZodSchema<DeletedUsersResponse> =
  zod.object({ deleted_users: zod.array(deletedUserObjectSchema) });

export const dynamicContentVariantObjectSchema: zod.ZodSchema<DynamicContentVariantObject> =
  zod.object({
    active: zod.boolean().describe("If the variant is active and useable"),
    content: zod.string().describe("The content of the variant"),
    created_at: zod.string().describe("When the variant was created"),
    default: zod
      .boolean()
      .describe("If the variant is the default for the item it belongs to"),
    id: zod
      .number()
      .describe("Automatically assigned when the variant is created"),
    locale_id: zod.number().describe("An active locale"),
    outdated: zod.boolean().describe("If the variant is outdated"),
    updated_at: zod.string().describe("When the variant was last updated"),
    url: zod.string().describe("The API url of the variant"),
  });

export const dynamicContentObjectSchema: zod.ZodSchema<DynamicContentObject> =
  zod.object({
    created_at: zod.string().describe("When this record was created"),
    default_locale_id: zod
      .number()
      .describe(
        "The default locale for the item. Must be one of the [locales the account has active](/api-reference/ticketing/account-configuration/locales/#list-locales).",
      ),
    id: zod.number().describe("Automatically assigned when creating items"),
    name: zod.string().describe("The unique name of the item"),
    outdated: zod
      .boolean()
      .describe("Indicates the item has outdated variants within it"),
    placeholder: zod
      .string()
      .describe(
        "Automatically generated placeholder for the item, derived from name",
      ),
    updated_at: zod.string().describe("When this record was last updated"),
    url: zod.string().describe("The API url of this item"),
    variants: zod
      .array(dynamicContentVariantObjectSchema)
      .describe(
        "All variants within this item. See [Dynamic Content Item Variants](/api-reference/ticketing/ticket-management/dynamic_content_item_variants/)",
      ),
  });

export const dynamicContentResponseSchema: zod.ZodSchema<DynamicContentResponse> =
  zod.object({ item: dynamicContentObjectSchema });

export const dynamicContentVariantResponseSchema: zod.ZodSchema<DynamicContentVariantResponse> =
  zod.object({ variant: dynamicContentVariantObjectSchema });

export const dynamicContentVariantsResponseSchema: zod.ZodSchema<DynamicContentVariantsResponse> =
  zod.object({ variants: zod.array(dynamicContentVariantObjectSchema) });

export const dynamicContentsResponseSchema: zod.ZodSchema<DynamicContentsResponse> =
  zod.object({ items: zod.array(dynamicContentObjectSchema) });

export const errorSchema: zod.ZodSchema<Error> = zod.object({
  code: zod.string(),
  detail: zod.string(),
  id: zod.string(),
  links: zod.object({}),
  source: zod.object({}),
  status: zod.string(),
  title: zod.string(),
});

export const batchErrorItemSchema: zod.ZodSchema<BatchErrorItem> =
  zod.intersection(errorSchema, zod.object({ trigger_id: zod.string() }));

export const errorsSchema: zod.ZodSchema<Errors> = zod.object({
  errors: zod.array(errorSchema),
});

export const essentialsCardObjectSchema: zod.ZodSchema<EssentialsCardObject> =
  zod.object({
    created_at: zod
      .string()
      .describe("Date and time the key details were created"),
    default: zod
      .boolean()
      .describe(
        "If true, the system has used the first twenty fields for the custom object type as the key details.",
      ),
    fields: zod
      .array(zod.object({}).passthrough())
      .describe(
        "Fields that are displayed in the essential card details. The order is defined by the order of the fields in the array",
      ),
    id: zod.string().nullable().describe("id of the essential card\n"),
    key: zod
      .string()
      .describe("Object type. Example: `zen:user` refers to `User` type\n"),
    layout: zod.string().describe("layout type\n"),
    max_count: zod
      .number()
      .describe("Maximum number of fields allowed in the key details"),
    updated_at: zod
      .string()
      .describe("Date and time the key details were last updated"),
  });

export const essentialsCardResponseSchema: zod.ZodSchema<EssentialsCardResponse> =
  zod.object({ object_layout: essentialsCardObjectSchema });

export const essentialsCardsResponseSchema: zod.ZodSchema<EssentialsCardsResponse> =
  zod.object({ object_layouts: zod.array(essentialsCardObjectSchema) });

export const followerObjectSchema: zod.ZodSchema<FollowerObject> = zod.object({
  action: zod.union([zod.literal("put"), zod.literal("delete")]),
  user_email: zod.string(),
  user_id: zod.string(),
});

export const emailCcObjectSchema: zod.ZodSchema<EmailCCObject> =
  zod.intersection(
    followerObjectSchema,
    zod.object({
      action: zod.union([zod.literal("put"), zod.literal("delete")]),
      user_email: zod.string(),
      user_id: zod.string(),
      user_name: zod.string(),
    }),
  );

export const groupMembershipObjectSchema: zod.ZodSchema<GroupMembershipObject> =
  zod.object({
    created_at: zod.string().describe("The time the group was created"),
    default: zod
      .boolean()
      .describe(
        "If true, tickets assigned directly to the agent will assume this membership's group",
      ),
    group_id: zod.number().describe("The id of a group"),
    id: zod.number().describe("Automatically assigned upon creation"),
    updated_at: zod
      .string()
      .describe("The time of the last update of the group"),
    url: zod.string().describe("The API url of this record"),
    user_id: zod.number().describe("The id of an agent"),
  });

export const groupMembershipResponseSchema: zod.ZodSchema<GroupMembershipResponse> =
  zod.object({ group_membership: groupMembershipObjectSchema });

export const groupMembershipsResponseSchema: zod.ZodSchema<GroupMembershipsResponse> =
  zod.object({ group_memberships: zod.array(groupMembershipObjectSchema) });

export const groupObjectSchema: zod.ZodSchema<GroupObject> = zod.object({
  created_at: zod.string().describe("The time the group was created"),
  default: zod
    .boolean()
    .describe("If the group is the default one for the account"),
  deleted: zod.boolean().describe("Deleted groups get marked as such"),
  description: zod.string().describe("The description of the group"),
  id: zod.number().describe("Automatically assigned when creating groups"),
  is_public: zod
    .boolean()
    .describe(
      "If true, the group is public.\nIf false, the group is private.\nYou can't change a private group to a public group\n",
    ),
  name: zod.string().describe("The name of the group"),
  updated_at: zod.string().describe("The time of the last update of the group"),
  url: zod.string().describe("The API url of the group"),
});

export const groupResponseSchema: zod.ZodSchema<GroupResponse> = zod.object({
  group: groupObjectSchema,
});

export const groupSlaPolicyFilterConditionObjectSchema: zod.ZodSchema<GroupSLAPolicyFilterConditionObject> =
  zod.object({
    field: zod.string().describe("The name of a ticket field"),
    operator: zod.string().describe("A comparison operator"),
    value: zod.array(zod.unknown()).describe("The value of a ticket field"),
  });

export const groupSlaPolicyFilterDefinitionResponseSchema: zod.ZodSchema<GroupSLAPolicyFilterDefinitionResponse> =
  zod.object({
    definitions: zod.object({
      all: zod.array(
        zod.object({
          group: zod.string(),
          operators: zod.array(
            zod.object({ title: zod.string(), value: zod.string() }),
          ),
          title: zod.string(),
          value: zod.string(),
          values: zod.object({
            list: zod.array(
              zod.object({
                title: zod.string(),
                value: zod.number().nullable(),
              }),
            ),
            type: zod.string(),
          }),
        }),
      ),
    }),
  });

export const groupSlaPolicyFilterObjectSchema: zod.ZodSchema<GroupSLAPolicyFilterObject> =
  zod
    .object({ all: zod.array(groupSlaPolicyFilterConditionObjectSchema) })
    .describe(
      "An object that describes the conditions a ticket must match for a Group SLA policy to be applied to the ticket. See [Filter](#filter).",
    );

export const groupSlaPolicyMetricObjectSchema: zod.ZodSchema<GroupSLAPolicyMetricObject> =
  zod.object({
    business_hours: zod
      .boolean()
      .describe(
        "Whether the metric targets are being measured in business hours or calendar hours",
      ),
    metric: zod
      .string()
      .describe("The definition of the time that is being measured"),
    priority: zod.string().describe("Priority that a ticket must match"),
    target: zod
      .number()
      .describe(
        "The time within which the end-state for a metric should be met",
      ),
  });

export const groupSlaPolicyObjectSchema: zod.ZodSchema<GroupSLAPolicyObject> =
  zod.object({
    created_at: zod
      .string()
      .describe("The time the Group SLA policy was created"),
    description: zod
      .string()
      .describe("The description of the Group SLA policy"),
    filter: groupSlaPolicyFilterObjectSchema,
    id: zod.string().describe("Automatically assigned when created"),
    policy_metrics: zod
      .array(groupSlaPolicyMetricObjectSchema)
      .describe("Array of [policy metric](#policy-metric) objects"),
    position: zod
      .number()
      .describe(
        "Position of the Group SLA policy. This position determines the order in which policies are matched to tickets. If not specified, the Group SLA policy is added at the last position",
      ),
    title: zod.string().describe("The title of the Group SLA policy"),
    updated_at: zod
      .string()
      .describe("The time of the last update of the Group SLA policy"),
    url: zod.string().describe("URL of the Group SLA policy record"),
  });

export const groupSlaPoliciesResponseSchema: zod.ZodSchema<GroupSLAPoliciesResponse> =
  zod.object({
    count: zod.number(),
    group_sla_policies: zod.array(groupSlaPolicyObjectSchema),
    next_page: zod.string().nullable(),
    previous_page: zod.string().nullable(),
  });

export const groupSlaPolicyResponseSchema: zod.ZodSchema<GroupSLAPolicyResponse> =
  zod.object({ group_sla_policy: groupSlaPolicyObjectSchema });

export const groupsCountObjectSchema: zod.ZodSchema<GroupsCountObject> =
  zod.object({
    count: zod.object({
      refreshed_at: zod
        .string()
        .describe("Timestamp that indicates when the count was last updated"),
      value: zod.number().describe("Approximate count of groups"),
    }),
  });

export const groupsResponseSchema: zod.ZodSchema<GroupsResponse> = zod.object({
  groups: zod.array(groupObjectSchema),
});

export const hostMappingObjectSchema: zod.ZodSchema<HostMappingObject> =
  zod.object({
    cname: zod
      .string()
      .describe("The canonical name record for a host mapping"),
    expected_cnames: zod
      .array(zod.string())
      .describe(
        "Array of expected CNAME records for host mapping(s) of a given brand",
      ),
    is_valid: zod
      .boolean()
      .describe("Whether a host mapping is valid or not for a given brand"),
    reason: zod.string().describe("Reason why a host mapping is valid or not"),
  });

export const incrementalSkillBasedRoutingAttributeSchema: zod.ZodSchema<IncrementalSkillBasedRoutingAttribute> =
  zod.object({
    id: zod
      .string()
      .describe("Automatically assigned when an attribute is created"),
    name: zod.string().describe("The name of the attribute"),
    time: zod
      .string()
      .describe("The time the attribute was created, updated, or deleted"),
    type: zod.string().describe('One of "create", "update", or "delete"'),
  });

export const incrementalSkillBasedRoutingAttributeValueSchema: zod.ZodSchema<IncrementalSkillBasedRoutingAttributeValue> =
  zod.object({
    attribute_id: zod.string().describe("Id of the associated attribute"),
    id: zod
      .string()
      .describe("Automatically assigned when an attribute value is created"),
    name: zod.string().describe("The name of the attribute value"),
    time: zod
      .string()
      .describe(
        "The time the attribute value was created, updated, or deleted",
      ),
    type: zod.string().describe('One of "create", "update", or "delete"'),
  });

export const incrementalSkillBasedRoutingInstanceValueSchema: zod.ZodSchema<IncrementalSkillBasedRoutingInstanceValue> =
  zod.object({
    attribute_value_id: zod
      .string()
      .describe("Id of the associated attribute value"),
    id: zod
      .string()
      .describe("Automatically assigned when an instance value is created"),
    instance_id: zod.string().describe("Id of the associated agent or ticket"),
    time: zod
      .string()
      .describe("The time the instance value was created or deleted"),
    type: zod
      .string()
      .describe(
        'One of "associate_agent", "unassociate_agent", "associate_ticket", or "unassociate_ticket"',
      ),
  });

export const incrementalSkillBasedRoutingSchema: zod.ZodSchema<IncrementalSkillBasedRouting> =
  zod.object({
    attribute_values: zod
      .array(incrementalSkillBasedRoutingAttributeValueSchema)
      .describe("Routing attribute values"),
    attributes: zod
      .array(incrementalSkillBasedRoutingAttributeSchema)
      .describe("Routing attributes"),
    count: zod
      .number()
      .describe("The number of results returned for the current request"),
    end_time: zod
      .number()
      .describe(
        "The most recent resource creation time present in this result set in Unix epoch time",
      ),
    instance_values: zod
      .array(incrementalSkillBasedRoutingInstanceValueSchema)
      .describe("Routing instance values"),
    next_page: zod
      .string()
      .describe("The URL that should be called to get the next set of results"),
  });

export const keyDetailObjectSchema: zod.ZodSchema<KeyDetailObject> = zod.object(
  {
    created_at: zod
      .string()
      .describe("Date and time the key details were created"),
    default: zod
      .boolean()
      .describe(
        "If true, the system has used the first eight fields for the custom object type as the key details.",
      ),
    fields: zod
      .array(zod.object({}).passthrough())
      .describe(
        "Fields that are displayed in the key details. The order is defined by the order of the fields in the array",
      ),
    key: zod
      .string()
      .describe(
        "Custom object type. Example: `zen:custom_object:car` refers to a custom object type with the \n`car` key\n",
      ),
    max_count: zod
      .number()
      .describe("Maximum number of fields allowed in the key details"),
    updated_at: zod
      .string()
      .describe("Date and time the key details were last updated"),
  },
);

export const keyDetailsResponseSchema: zod.ZodSchema<KeyDetailsResponse> =
  zod.object({ key_detail: keyDetailObjectSchema });

export const listTicketCollaboratorsResponseSchema: zod.ZodSchema<ListTicketCollaboratorsResponse> =
  zod.object({}).passthrough();

export const listTicketEmailCCsResponseSchema: zod.ZodSchema<ListTicketEmailCCsResponse> =
  zod.object({}).passthrough();

export const listTicketFollowersResponseSchema: zod.ZodSchema<ListTicketFollowersResponse> =
  zod.object({}).passthrough();

export const listTicketIncidentsResponseSchema: zod.ZodSchema<ListTicketIncidentsResponse> =
  zod.object({}).passthrough();

export const listTicketProblemsResponseSchema: zod.ZodSchema<ListTicketProblemsResponse> =
  zod.object({}).passthrough();

export const localeObjectSchema: zod.ZodSchema<LocaleObject> = zod.object({
  created_at: zod
    .string()
    .describe("The ISO 8601 formatted date-time the locale was created"),
  id: zod.number().describe("The unique ID of the locale"),
  locale: zod.string().describe("The name of the locale"),
  name: zod.string().describe("The name of the language"),
  updated_at: zod
    .string()
    .describe(
      "The ISO 8601 formatted date-time when the locale was last updated",
    ),
  url: zod.string().describe("The URL of the locale record"),
});

export const localeResponseSchema: zod.ZodSchema<LocaleResponse> = zod.object({
  locale: localeObjectSchema,
});

export const localesResponseSchema: zod.ZodSchema<LocalesResponse> = zod.object(
  { locales: zod.array(localeObjectSchema) },
);

export const macroApplyTicketResponseSchema: zod.ZodSchema<MacroApplyTicketResponse> =
  zod.object({
    result: zod.object({
      ticket: zod.object({
        assignee_id: zod.number(),
        comment: zod.object({
          body: zod.string(),
          public: zod.boolean(),
          scoped_body: zod.array(zod.array(zod.string())),
        }),
        fields: zod.object({ id: zod.number(), value: zod.string() }),
        group_id: zod.number(),
        id: zod.number(),
        url: zod.string(),
      }),
    }),
  });

export const macroAttachmentObjectSchema: zod.ZodSchema<MacroAttachmentObject> =
  zod.object({
    content_type: zod
      .string()
      .describe('The content type of the image. Example value: "image/png"'),
    content_url: zod
      .string()
      .describe("A full URL where the attachment image file can be downloaded"),
    created_at: zod
      .string()
      .describe("The time when this attachment was created"),
    filename: zod.string().describe("The name of the image file"),
    id: zod.number().describe("Automatically assigned when created"),
    size: zod.number().describe("The size of the image file in bytes"),
  });

export const macroAttachmentResponseSchema: zod.ZodSchema<MacroAttachmentResponse> =
  zod.object({ macro_attachment: macroAttachmentObjectSchema });

export const macroAttachmentsResponseSchema: zod.ZodSchema<MacroAttachmentsResponse> =
  zod.object({ macro_attachments: zod.array(macroAttachmentObjectSchema) });

export const macroCategoriesResponseSchema: zod.ZodSchema<MacroCategoriesResponse> =
  zod.object({ categories: zod.array(zod.string()) });

export const macroCommonObjectSchema: zod.ZodSchema<MacroCommonObject> =
  zod.object({
    actions: zod
      .array(actionObjectSchema)
      .describe(
        "Each action describes what the macro will do. See [Actions reference](/documentation/ticketing/reference-guides/actions-reference)",
      ),
    active: zod
      .boolean()
      .describe("Useful for determining if the macro should be displayed"),
    created_at: zod.string().describe("The time the macro was created"),
    default: zod.boolean().describe("If true, the macro is a default macro"),
    description: zod
      .string()
      .nullable()
      .describe("The description of the macro"),
    id: zod
      .number()
      .describe("The ID automatically assigned when a macro is created"),
    position: zod.number().describe("The position of the macro"),
    restriction: zod
      .object({})
      .passthrough()
      .nullable()
      .describe(
        "Access to this macro. A null value allows unrestricted access for all users in the account",
      ),
    title: zod.string().describe("The title of the macro"),
    updated_at: zod
      .string()
      .describe("The time of the last update of the macro"),
    url: zod.string().describe("A URL to access the macro's details"),
  });

export const macroInputSchema: zod.ZodSchema<MacroInput> = zod.object({
  actions: zod
    .array(actionObjectSchema)
    .describe("Each action describes what the macro will do"),
  active: zod
    .boolean()
    .describe("Useful for determining if the macro should be displayed"),
  description: zod.string().nullable().describe("The description of the macro"),
  restriction: zod
    .object({
      id: zod.number().describe("The numeric ID of the group or user"),
      ids: zod.array(zod.number()).describe("The numeric IDs of the groups"),
      type: zod.string().describe("Allowed values are Group or User"),
    })
    .passthrough()
    .describe(
      "Who may access this macro. Will be null when everyone in the account can access it",
    ),
  title: zod.string().describe("The title of the macro"),
});

export const macroObjectSchema: zod.ZodSchema<MacroObject> = zod.intersection(
  macroCommonObjectSchema,
  zod.object({
    app_installation: zod
      .string()
      .nullable()
      .describe("The app installation that requires each macro, if present"),
    categories: zod.string().nullable().describe("The macro categories"),
    permissions: zod.string().nullable().describe("Permissions for each macro"),
    usage_1h: zod
      .number()
      .describe(
        "The number of times each macro has been used in the past hour",
      ),
    usage_7d: zod
      .number()
      .describe(
        "The number of times each macro has been used in the past week",
      ),
    usage_24h: zod
      .number()
      .describe("The number of times each macro has been used in the past day"),
    usage_30d: zod
      .number()
      .describe(
        "The number of times each macro has been used in the past thirty days",
      ),
  }),
);

export const macroResponseSchema: zod.ZodSchema<MacroResponse> = zod.object({
  macro: macroObjectSchema,
});

export const macroUpdateManyInputSchema: zod.ZodSchema<MacroUpdateManyInput> =
  zod.object({
    macros: zod.array(
      zod.object({
        active: zod
          .boolean()
          .describe("The active status of the macro (true or false)"),
        id: zod.number().describe("The ID of the macro to update"),
        position: zod.number().describe("The new position of the macro"),
      }),
    ),
  });

export const offsetPaginationObjectSchema: zod.ZodSchema<OffsetPaginationObject> =
  zod.object({
    count: zod.number().describe("the total record count"),
    next_page: zod.string().nullable().describe("the URL of the next page"),
    previous_page: zod
      .string()
      .nullable()
      .describe("the URL of the previous page"),
  });

export const brandsResponseSchema: zod.ZodSchema<BrandsResponse> =
  zod.intersection(
    offsetPaginationObjectSchema,
    zod.object({
      brands: zod.array(brandObjectSchema).describe("Array of brands"),
    }),
  );

export const listDeletedTicketsResponseSchema: zod.ZodSchema<ListDeletedTicketsResponse> =
  zod.intersection(
    zod.object({
      deleted_tickets: zod.array(
        zod.object({
          actor: zod.object({ id: zod.number(), name: zod.string() }),
          deleted_at: zod.string(),
          id: zod.number(),
          previous_state: zod.string(),
          subject: zod.string(),
        }),
      ),
    }),
    offsetPaginationObjectSchema,
  );

export const macrosResponseSchema: zod.ZodSchema<MacrosResponse> =
  zod.intersection(
    zod.object({ macros: zod.array(macroObjectSchema) }),
    offsetPaginationObjectSchema,
  );

export const organizationFieldObjectSchema: zod.ZodSchema<OrganizationFieldObject> =
  customFieldObjectSchema;

export const organizationFieldResponseSchema: zod.ZodSchema<OrganizationFieldResponse> =
  zod.object({ organization_field: organizationFieldObjectSchema });

export const organizationFieldsResponseSchema: zod.ZodSchema<OrganizationFieldsResponse> =
  zod.object({
    count: zod.number().describe("Total count of records retrieved"),
    next_page: zod.string().nullable().describe("URL of the next page"),
    organization_fields: zod.array(organizationFieldObjectSchema),
    previous_page: zod.string().nullable().describe("URL of the previous page"),
  });

export const organizationMembershipObjectSchema: zod.ZodSchema<OrganizationMembershipObject> =
  zod.object({
    created_at: zod.string().describe("When this record was created"),
    default: zod
      .boolean()
      .nullable()
      .describe(
        "Denotes whether this is the default organization membership for the user. If false, returns `null`",
      ),
    id: zod
      .number()
      .describe("Automatically assigned when the membership is created"),
    organization_id: zod
      .number()
      .describe(
        "The ID of the organization associated with this user, in this membership",
      ),
    organization_name: zod
      .string()
      .describe(
        "The name of the organization associated with this user, in this membership",
      ),
    updated_at: zod.string().describe("When this record last got updated"),
    url: zod.string().describe("The API url of this membership"),
    user_id: zod
      .number()
      .describe("The ID of the user for whom this memberships belongs"),
    view_tickets: zod
      .boolean()
      .describe(
        "Denotes whether the user can or cannot have access to all organization's tickets.",
      ),
  });

export const organizationMembershipResponseSchema: zod.ZodSchema<OrganizationMembershipResponse> =
  zod.object({ organization_membership: organizationMembershipObjectSchema });

export const organizationMembershipsResponseSchema: zod.ZodSchema<OrganizationMembershipsResponse> =
  zod.object({
    organization_memberships: zod.array(organizationMembershipObjectSchema),
  });

export const organizationMetadataObjectSchema: zod.ZodSchema<OrganizationMetadataObject> =
  zod.object({
    tickets_count: zod
      .number()
      .describe("The number of tickets for the organization"),
    users_count: zod
      .number()
      .describe("The number of users for the organization"),
  });

export const organizationObjectSchema: zod.ZodSchema<OrganizationObject> =
  zod.object({
    created_at: zod.string().describe("The time the organization was created"),
    details: zod
      .string()
      .nullable()
      .describe("Any details obout the organization, such as the address"),
    domain_names: zod
      .array(zod.string())
      .describe("An array of domain names associated with this organization"),
    external_id: zod
      .string()
      .nullable()
      .describe(
        'A unique external id to associate organizations to an external record. The id is case-insensitive. For example, "company1" and "Company1" are considered the same',
      ),
    group_id: zod
      .number()
      .nullable()
      .describe(
        "New tickets from users in this organization are automatically put in this group",
      ),
    id: zod
      .number()
      .describe("Automatically assigned when the organization is created"),
    name: zod.string().describe("A unique name for the organization"),
    notes: zod
      .string()
      .nullable()
      .describe("Any notes you have about the organization"),
    organization_fields: zod
      .object({})
      .passthrough()
      .nullable()
      .describe(
        "Custom fields for this organization. See [Custom organization fields](/api-reference/ticketing/organizations/organizations/#custom-organization-fields)",
      ),
    shared_comments: zod
      .boolean()
      .describe(
        "End users in this organization are able to see each other's comments on tickets",
      ),
    shared_tickets: zod
      .boolean()
      .describe(
        "End users in this organization are able to see each other's tickets",
      ),
    tags: zod.array(zod.string()).describe("The tags of the organization"),
    updated_at: zod
      .string()
      .describe("The time of the last update of the organization"),
    url: zod.string().describe("The API url of this organization"),
  });

export const exportIncrementalOrganizationsResponseSchema: zod.ZodSchema<ExportIncrementalOrganizationsResponse> =
  zod.object({
    count: zod.number(),
    end_of_stream: zod.boolean(),
    end_time: zod.number(),
    next_page: zod.string().nullable(),
    organizations: zod.array(organizationObjectSchema),
  });

export const organizationResponseSchema: zod.ZodSchema<OrganizationResponse> =
  zod.object({ organization: organizationObjectSchema });

export const organizationSubscriptionInputSchema: zod.ZodSchema<OrganizationSubscriptionInput> =
  zod.object({
    organization_id: zod.number().describe("The ID of the organization"),
    user_id: zod.number().describe("The ID of the user"),
  });

export const organizationSubscriptionCreateRequestSchema: zod.ZodSchema<OrganizationSubscriptionCreateRequest> =
  zod.object({
    organization_subscription: organizationSubscriptionInputSchema,
  });

export const organizationSubscriptionObjectSchema: zod.ZodSchema<OrganizationSubscriptionObject> =
  zod.object({
    created_at: zod
      .string()
      .describe("The date the organization subscription was created"),
    id: zod.number().describe("The ID of the organization subscription"),
    organization_id: zod.number().describe("The ID of the organization"),
    user_id: zod.number().describe("The ID of the user"),
  });

export const organizationSubscriptionResponseSchema: zod.ZodSchema<OrganizationSubscriptionResponse> =
  zod.object({
    organization_subscription: organizationSubscriptionObjectSchema,
  });

export const organizationSubscriptionsResponseSchema: zod.ZodSchema<OrganizationSubscriptionsResponse> =
  zod.intersection(
    offsetPaginationObjectSchema,
    zod.object({
      organization_subscriptions: zod
        .array(organizationSubscriptionObjectSchema)
        .describe("An array of organization subscriptions"),
    }),
  );

export const organizationsRelatedResponseSchema: zod.ZodSchema<OrganizationsRelatedResponse> =
  zod.object({ organization_related: organizationMetadataObjectSchema });

export const organizationsResponseSchema: zod.ZodSchema<OrganizationsResponse> =
  zod.object({
    count: zod.number(),
    next_page: zod.string().nullable(),
    organizations: zod.array(organizationObjectSchema),
    previous_page: zod.string().nullable(),
  });

export const paginationSchema: zod.ZodSchema<Pagination> = zod.object({
  links: zod.object({ next: zod.string(), prev: zod.string() }),
  meta: zod.object({
    after_cursor: zod.string(),
    before_cursor: zod.string(),
    has_more: zod.boolean(),
  }),
});

export const pushNotificationDevicesInputYamlSchema: zod.ZodSchema<PushNotificationDevicesInput> =
  zod.array(zod.unknown());

export const pushNotificationDevicesRequestYamlSchema: zod.ZodSchema<PushNotificationDevicesRequest> =
  zod.object({
    push_notification_devices: pushNotificationDevicesInputYamlSchema,
  });

export const renewSessionResponseSchema: zod.ZodSchema<RenewSessionResponse> =
  zod.object({
    authenticity_token: zod
      .string()
      .describe("A token of authenticity for the request"),
  });

export const resourceCollectionObjectSchema: zod.ZodSchema<ResourceCollectionObject> =
  zod.object({
    created_at: zod
      .string()
      .describe("When the resource collection was created"),
    id: zod
      .number()
      .describe(
        "id for the resource collection. Automatically assigned upon creation",
      ),
    resources: zod
      .array(zod.unknown())
      .describe(
        "Array of resource metadata objects. See [Resource objects](#resource-objects)",
      ),
    updated_at: zod
      .string()
      .describe("Last time the resource collection was updated"),
  });

export const resourceCollectionResponseSchema: zod.ZodSchema<ResourceCollectionResponse> =
  zod.object({ resource_collection: resourceCollectionObjectSchema });

export const resourceCollectionsResponseSchema: zod.ZodSchema<ResourceCollectionsResponse> =
  zod.object({
    count: zod.number(),
    next_page: zod.string().nullable(),
    previous_page: zod.string().nullable(),
    resource_collections: zod.array(resourceCollectionObjectSchema),
  });

export const slaPolicyFilterConditionObjectSchema: zod.ZodSchema<SLAPolicyFilterConditionObject> =
  zod.object({
    field: zod.string().describe("The name of a ticket field"),
    operator: zod.string().describe("A comparison operator"),
    value: zod
      .union([zod.string(), zod.array(zod.unknown())])
      .describe("The value of a ticket field"),
  });

export const slaPolicyFilterDefinitionResponseSchema: zod.ZodSchema<SLAPolicyFilterDefinitionResponse> =
  zod.object({
    definitions: zod.object({
      all: zod.array(
        zod.object({
          group: zod.string(),
          operators: zod.array(
            zod.object({ title: zod.string(), value: zod.string() }),
          ),
          target: zod.string().nullable(),
          title: zod.string(),
          value: zod.string(),
          values: zod.object({
            list: zod.array(
              zod.object({
                title: zod.string(),
                value: zod.string().nullable(),
              }),
            ),
            type: zod.string(),
          }),
        }),
      ),
      any: zod.array(
        zod.object({
          group: zod.string(),
          operators: zod.array(
            zod.object({ title: zod.string(), value: zod.string() }),
          ),
          target: zod.string().nullable(),
          title: zod.string(),
          value: zod.string(),
          values: zod.object({
            list: zod.array(
              zod.object({
                title: zod.string(),
                value: zod.string().nullable(),
              }),
            ),
            type: zod.string(),
          }),
        }),
      ),
    }),
  });

export const slaPolicyFilterObjectSchema: zod.ZodSchema<SLAPolicyFilterObject> =
  zod
    .object({
      all: zod.array(slaPolicyFilterConditionObjectSchema),
      any: zod.array(slaPolicyFilterConditionObjectSchema),
    })
    .describe(
      "An object that describes the conditions that a ticket must match in order for an SLA policy to be applied to that ticket. See [Filter](#filter).",
    );

export const slaPolicyMetricObjectSchema: zod.ZodSchema<SLAPolicyMetricObject> =
  zod.object({
    business_hours: zod
      .boolean()
      .describe(
        "Whether the metric targets are being measured in business hours or calendar hours",
      ),
    metric: zod
      .string()
      .describe("The definition of the time that is being measured"),
    priority: zod.string().describe("Priority that a ticket must match"),
    target: zod
      .number()
      .describe(
        "The time within which the end-state for a metric should be met",
      ),
  });

export const slaPolicyObjectSchema: zod.ZodSchema<SLAPolicyObject> = zod.object(
  {
    created_at: zod.string().describe("The time the SLA policy was created"),
    description: zod.string().describe("The description of the SLA policy"),
    filter: slaPolicyFilterObjectSchema,
    id: zod.number().describe("Automatically assigned when created"),
    policy_metrics: zod
      .array(slaPolicyMetricObjectSchema)
      .describe("Array of [Policy Metric](#policy-metric) objects"),
    position: zod
      .number()
      .describe(
        "Position of the SLA policy that determines the order they will be matched. If not specified, the SLA policy is added as the last position",
      ),
    title: zod.string().describe("The title of the SLA policy"),
    updated_at: zod
      .string()
      .describe("The time of the last update of the SLA policy"),
    url: zod.string().describe("URL of the SLA Policy reacord"),
  },
);

export const slaPoliciesResponseSchema: zod.ZodSchema<SLAPoliciesResponse> =
  zod.object({
    count: zod.number(),
    next_page: zod.string().nullable(),
    previous_page: zod.string().nullable(),
    sla_policies: zod.array(slaPolicyObjectSchema),
  });

export const slaPolicyResponseSchema: zod.ZodSchema<SLAPolicyResponse> =
  zod.object({ sla_policy: slaPolicyObjectSchema });

export const satisfactionRatingObjectSchema: zod.ZodSchema<SatisfactionRatingObject> =
  zod.object({
    assignee_id: zod
      .number()
      .describe("The id of agent assigned to at the time of rating"),
    comment: zod
      .string()
      .describe("The comment received with this rating, if available"),
    created_at: zod
      .string()
      .describe("The time the satisfaction rating got created"),
    group_id: zod
      .number()
      .describe("The id of group assigned to at the time of rating"),
    id: zod.number().describe("Automatically assigned upon creation"),
    reason: zod
      .string()
      .describe(
        "The reason for a bad rating given by the requester in a follow-up question. Satisfaction reasons must be [enabled](https://support.zendesk.com/hc/en-us/articles/223152967)",
      ),
    reason_code: zod
      .number()
      .describe(
        'The default reasons the user can select from a list menu for giving a negative rating. See [Reason codes](/api-reference/ticketing/ticket-management/satisfaction_reasons/#reason-codes) in the Satisfaction Reasons API. Can only be set on ratings with a `score` of "bad". Responses don\'t include this property',
      ),
    reason_id: zod
      .number()
      .describe(
        'id for the reason the user gave a negative rating. Can only be set on ratings with a `score` of "bad". To get a descriptive value for the id, use the [Show Reason for Satisfaction Rating](/api-reference/ticketing/ticket-management/satisfaction_reasons/#show-reason-for-satisfaction-rating) endpoint',
      ),
    requester_id: zod
      .number()
      .describe("The id of ticket requester submitting the rating"),
    score: zod
      .string()
      .describe('The rating "offered", "unoffered", "good" or "bad"'),
    ticket_id: zod.number().describe("The id of ticket being rated"),
    updated_at: zod
      .string()
      .describe("The time the satisfaction rating got updated"),
    url: zod.string().describe("The API url of this rating"),
  });

export const satisfactionRatingResponseSchema: zod.ZodSchema<SatisfactionRatingResponse> =
  zod.object({
    satisfaction_rating: zod.array(satisfactionRatingObjectSchema),
  });

export const satisfactionRatingsCountResponseSchema: zod.ZodSchema<SatisfactionRatingsCountResponse> =
  zod.object({
    count: zod.object({ refreshed_at: zod.string(), value: zod.number() }),
  });

export const satisfactionRatingsResponseSchema: zod.ZodSchema<SatisfactionRatingsResponse> =
  zod.object({
    satisfaction_ratings: zod.array(satisfactionRatingObjectSchema),
  });

export const satisfactionReasonObjectSchema: zod.ZodSchema<SatisfactionReasonObject> =
  zod.object({
    created_at: zod.string().describe("The time the reason was created"),
    deleted_at: zod.string().describe("The time the reason was deleted"),
    id: zod.number().describe("Automatically assigned upon creation"),
    raw_value: zod
      .string()
      .describe(
        'The dynamic content placeholder, if present, or the current "value", if not. See [Dynamic Content Items](/api-reference/ticketing/ticket-management/dynamic_content/)',
      ),
    reason_code: zod
      .number()
      .describe(
        "An account-level code for referencing the reason. Custom reasons are assigned an auto-incrementing integer (non-system reason codes begin at 1000). See [Reason codes](#reason-codes)",
      ),
    updated_at: zod.string().describe("The time the reason was updated"),
    url: zod.string().describe("API URL for the resource"),
    value: zod
      .string()
      .describe("Translated value of the reason in the account locale"),
  });

export const satisfactionReasonResponseSchema: zod.ZodSchema<SatisfactionReasonResponse> =
  zod.object({ reason: zod.array(satisfactionReasonObjectSchema) });

export const satisfactionReasonsResponseSchema: zod.ZodSchema<SatisfactionReasonsResponse> =
  zod.object({ reasons: zod.array(satisfactionReasonObjectSchema) });

export const searchCountResponseSchema: zod.ZodSchema<SearchCountResponse> =
  zod.object({ count: zod.number() });

export const searchResultObjectSchema: zod.ZodSchema<SearchResultObject> =
  zod.object({
    created_at: zod.string().describe("When the resource was created"),
    default: zod
      .boolean()
      .describe("Flag to indicate whether this is the default resource"),
    deleted: zod
      .boolean()
      .describe("Flag to indicate whether or not resource has been deleted"),
    description: zod.string().describe("The description of the resource"),
    id: zod.number().describe("The ID of the resource"),
    name: zod.string().describe("The name of the resource"),
    result_type: zod.string().describe("The type of the resource"),
    updated_at: zod.string().describe("When the resource was last updated"),
    url: zod.string().describe("The url of the resource"),
  });

export const searchExportResponseSchema: zod.ZodSchema<SearchExportResponse> =
  zod.object({
    facets: zod
      .string()
      .nullable()
      .describe("The facets corresponding to the search query"),
    links: zod
      .object({
        next: zod
          .string()
          .nullable()
          .describe("The url to the next entry via the cursor."),
        prev: zod
          .string()
          .nullable()
          .describe("The url to the previous entry via the cursor."),
      })
      .describe(
        "The links to the previous and next entries via the cursor ids in the metadata.",
      ),
    meta: zod
      .object({
        after_cursor: zod
          .string()
          .nullable()
          .describe("The cursor id for the next object."),
        before_cursor: zod
          .string()
          .nullable()
          .describe("The cursor id for the previous object."),
        has_more: zod
          .boolean()
          .describe(
            "Whether there are more items yet to be returned by the cursor.",
          ),
      })
      .describe("Metadata for the export query response."),
    results: zod
      .array(searchResultObjectSchema)
      .describe(
        "May consist of tickets, users, groups, or organizations, as specified by the `result_type` property in each result object",
      ),
  });

export const searchResponseSchema: zod.ZodSchema<SearchResponse> = zod.object({
  count: zod
    .number()
    .describe(
      "The number of resources returned by the query corresponding to this page of results in the paginated response",
    ),
  facets: zod
    .string()
    .nullable()
    .describe("The facets corresponding to the search query"),
  next_page: zod
    .string()
    .nullable()
    .describe("URL to the next page of results"),
  previous_page: zod
    .string()
    .nullable()
    .describe("URL to the previous page of results"),
  results: zod
    .array(searchResultObjectSchema)
    .describe(
      "May consist of tickets, users, groups, or organizations, as specified by the `result_type` property in each result object",
    ),
});

export const sessionObjectSchema: zod.ZodSchema<SessionObject> = zod.object({
  authenticated_at: zod
    .string()
    .nullable()
    .describe("When the session was created"),
  id: zod
    .number()
    .describe("Automatically assigned when the session is created"),
  last_seen_at: zod
    .string()
    .nullable()
    .describe(
      "The last approximate time this session was seen. This does not update on every request.",
    ),
  url: zod.string().nullable().describe("The API URL of this session"),
  user_id: zod.number().nullable().describe("The id of the user"),
});

export const sessionResponseSchema: zod.ZodSchema<SessionResponse> = zod.object(
  { session: zod.array(sessionObjectSchema) },
);

export const sessionsResponseSchema: zod.ZodSchema<SessionsResponse> =
  zod.object({ sessions: zod.array(sessionObjectSchema) });

export const sharingAgreementObjectSchema: zod.ZodSchema<SharingAgreementObject> =
  zod.object({
    created_at: zod.string().describe("The time the record was created"),
    id: zod.number().describe("Automatically assigned upon creation"),
    name: zod.string().describe("Name of this sharing agreement"),
    partner_name: zod
      .string()
      .nullable()
      .describe('Can be one of the following: "jira", null'),
    remote_subdomain: zod
      .string()
      .describe(
        "Subdomain of the remote account or null if not associated with an account",
      ),
    status: zod
      .string()
      .describe(
        'Can be one of the following: "accepted", "declined", "pending", "inactive", "failed", "ssl_error", "configuration_error"',
      ),
    type: zod
      .string()
      .describe('Can be one of the following: "inbound", "outbound"'),
    url: zod.string().describe("URL of the sharing agreement record"),
  });

export const sharingAgreementResponseSchema: zod.ZodSchema<SharingAgreementResponse> =
  zod.object({ sharing_agreement: sharingAgreementObjectSchema });

export const sharingAgreementsResponseSchema: zod.ZodSchema<SharingAgreementsResponse> =
  zod.object({ sharing_agreements: zod.array(sharingAgreementObjectSchema) });

export const skillBasedRoutingAttributeDefinitionsSchema: zod.ZodSchema<SkillBasedRoutingAttributeDefinitions> =
  zod.object({
    definitions: zod.object({
      conditions_all: zod.array(
        zod.object({ subject: zod.string(), title: zod.string() }),
      ),
      conditions_any: zod.array(
        zod.object({ subject: zod.string(), title: zod.string() }),
      ),
    }),
  });

export const skillBasedRoutingAttributeObjectSchema: zod.ZodSchema<SkillBasedRoutingAttributeObject> =
  zod.object({
    created_at: zod.string().describe("When this record was created"),
    id: zod
      .string()
      .describe("Automatically assigned when an attribute is created"),
    name: zod.string().describe("The name of the attribute"),
    updated_at: zod.string().describe("When this record was last updated"),
    url: zod.string().describe("URL of the attribute"),
  });

export const skillBasedRoutingAttributeResponseSchema: zod.ZodSchema<SkillBasedRoutingAttributeResponse> =
  zod.object({ attribute: skillBasedRoutingAttributeObjectSchema });

export const skillBasedRoutingAttributeValueObjectSchema: zod.ZodSchema<SkillBasedRoutingAttributeValueObject> =
  zod.object({
    attribute_id: zod.string().describe("Id of the associated attribute"),
    created_at: zod.string().describe("When this record was created"),
    id: zod
      .string()
      .describe("Automatically assigned when an attribute value is created"),
    name: zod.string().describe("The name of the attribute value"),
    updated_at: zod.string().describe("When this record was last updated"),
    url: zod.string().describe("URL of the attribute value"),
  });

export const skillBasedRoutingAttributeValueResponseSchema: zod.ZodSchema<SkillBasedRoutingAttributeValueResponse> =
  zod.object({ attribute_value: skillBasedRoutingAttributeValueObjectSchema });

export const skillBasedRoutingAttributeValuesResponseSchema: zod.ZodSchema<SkillBasedRoutingAttributeValuesResponse> =
  zod.object({
    attribute_values: zod.array(skillBasedRoutingAttributeValueObjectSchema),
  });

export const skillBasedRoutingAttributesResponseSchema: zod.ZodSchema<SkillBasedRoutingAttributesResponse> =
  zod.object({
    attributes: zod.array(skillBasedRoutingAttributeObjectSchema),
    count: zod.number(),
    next_page: zod.string().nullable(),
    previous_page: zod.string().nullable(),
  });

export const skillBasedRoutingTicketFulfilledResponseSchema: zod.ZodSchema<SkillBasedRoutingTicketFulfilledResponse> =
  zod.object({ fulfilled_ticket_ids: zod.array(zod.number()) });

export const supportAddressObjectSchema: zod.ZodSchema<SupportAddressObject> =
  zod.object({
    brand_id: zod
      .number()
      .describe(
        "The ID of the [brand](/api-reference/ticketing/account-configuration/brands/)",
      ),
    cname_status: zod
      .union([
        zod.literal("unknown"),
        zod.literal("verified"),
        zod.literal("failed"),
      ])
      .describe(
        'Whether all of the required CNAME records are set. Possible values: "unknown", "verified", "failed"',
      ),
    created_at: zod.string().describe("When the address was created"),
    default: zod
      .boolean()
      .describe("Whether the address is the account's default support address"),
    dns_results: zod
      .union([zod.literal("verified"), zod.literal("failed")])
      .describe(
        'Verification statuses for the domain and CNAME records. Possible types: "verified", "failed"',
      ),
    domain_verification_code: zod
      .string()
      .describe(
        "Verification string to be added as a TXT record to the domain. Possible types: string or null.",
      ),
    domain_verification_status: zod
      .union([
        zod.literal("unknown"),
        zod.literal("verified"),
        zod.literal("failed"),
      ])
      .describe(
        'Whether the domain verification record is valid. Possible values: "unknown", "verified", "failed"',
      ),
    email: zod
      .string()
      .describe(
        "The email address. You can't change the email address of an existing support address.",
      ),
    forwarding_status: zod
      .union([
        zod.literal("unknown"),
        zod.literal("waiting"),
        zod.literal("verified"),
        zod.literal("failed"),
      ])
      .describe(
        'Status of email forwarding. Possible values: "unknown", "waiting", "verified", or "failed"',
      ),
    id: zod.number().describe("Automatically assigned when created"),
    name: zod.string().describe("The name for the address"),
    spf_status: zod
      .union([
        zod.literal("unknown"),
        zod.literal("verified"),
        zod.literal("failed"),
      ])
      .describe(
        'Whether the SPF record is set up correctly. Possible values: "unknown", "verified", "failed"',
      ),
    updated_at: zod.string().describe("When the address was updated"),
  });

export const supportAddressResponseSchema: zod.ZodSchema<SupportAddressResponse> =
  zod.object({ recipient_address: supportAddressObjectSchema });

export const supportAddressesResponseSchema: zod.ZodSchema<SupportAddressesResponse> =
  zod.object({ recipient_addresses: zod.array(supportAddressObjectSchema) });

export const suspendedTicketsAttachmentsResponseSchema: zod.ZodSchema<SuspendedTicketsAttachmentsResponse> =
  zod.object({
    upload: zod.object({
      attachments: zod.array(attachmentObjectSchema),
      token: zod.string().describe("Token for subsequent request"),
    }),
  });

export const suspendedTicketsExportResponseSchema: zod.ZodSchema<SuspendedTicketsExportResponse> =
  zod.object({
    export: zod.object({ status: zod.string(), view_id: zod.string() }),
  });

export const systemFieldOptionObjectSchema: zod.ZodSchema<SystemFieldOptionObject> =
  zod.object({
    name: zod.string().describe("Name of the system field option"),
    value: zod.string().describe("Value of the system field option"),
  });

export const tagCountObjectSchema: zod.ZodSchema<TagCountObject> = zod.object({
  refreshed_at: zod
    .string()
    .describe("The time that the count value was last refreshed"),
  value: zod
    .number()
    .describe("The count of tags created in the last 24 hours"),
});

export const tagCountResponseSchema: zod.ZodSchema<TagCountResponse> =
  zod.object({ count: tagCountObjectSchema });

export const tagListTagObjectSchema: zod.ZodSchema<TagListTagObject> =
  zod.object({
    count: zod.number().describe("The number of tags"),
    name: zod.string().describe("A name for the tag"),
  });

export const tagUrlObjectSchema: zod.ZodSchema<TagUrlObject> = zod.object({
  url: zod.string().describe("The url associated to the api request"),
});

export const tagsByObjectIdResponseSchema: zod.ZodSchema<TagsByObjectIdResponse> =
  zod.object({ tags: zod.array(zod.string()).describe("An array of strings") });

export const tagsResponseSchema: zod.ZodSchema<TagsResponse> = zod.object({
  count: zod.number().describe("The number of pages"),
  next_page: zod.string().nullable().describe("The url of the previous page"),
  previous_page: zod.string().nullable().describe("The url of the next page"),
  tags: zod.array(tagListTagObjectSchema),
});

export const targetBasecampSchema: zod.ZodSchema<TargetBasecamp> = zod.object({
  message_id: zod
    .string()
    .describe('Can be filled if it is a "message" resource'),
  password: zod
    .string()
    .describe(
      "The 37Signals password for the Basecamp account (only writable)",
    ),
  project_id: zod
    .string()
    .describe(
      "The ID of the project in Basecamp where updates should be pushed",
    ),
  resource: zod.string().describe('"todo" or "message"'),
  target_url: zod
    .string()
    .describe("The URL of your Basecamp account, including protocol and path"),
  todo_list_id: zod
    .string()
    .describe('Can be filled if it is a "todo" resource'),
  token: zod
    .string()
    .describe(
      "Get the API token from My info > Show your tokens > Token for feed readers or the Basecamp API in your Basecamp account",
    ),
  username: zod
    .string()
    .describe(
      "The 37Signals username of the account you use to log in to Basecamp",
    ),
});

export const targetCampfireSchema: zod.ZodSchema<TargetCampfire> = zod.object({
  preserve_format: zod.boolean(),
  room: zod.string(),
  ssl: zod.boolean(),
  subdomain: zod.string(),
  token: zod.string(),
});

export const targetClickatellSchema: zod.ZodSchema<TargetClickatell> =
  zod.object({
    api_id: zod.string(),
    attribute: zod.string().describe("Read-only"),
    from: zod.string(),
    method: zod.string().describe("Read-only"),
    password: zod.string().describe("only writable"),
    target_url: zod.string().describe("Read-only"),
    to: zod.string(),
    us_small_business_account: zod.string(),
    username: zod.string(),
  });

export const targetCommonFieldsSchema: zod.ZodSchema<TargetCommonFields> =
  zod.object({
    active: zod.boolean().describe("Whether or not the target is activated"),
    created_at: zod.string().describe("The time the target was created"),
    id: zod.number().describe("Automatically assigned when created"),
    title: zod.string().describe("A name for the target"),
    type: zod
      .string()
      .describe(
        'A pre-defined target, such as "basecamp_target". See the additional attributes for the type that follow',
      ),
  });

export const targetEmailSchema: zod.ZodSchema<TargetEmail> = zod.object({
  email: zod.string(),
  subject: zod.string(),
});

export const targetFailureObjectSchema: zod.ZodSchema<TargetFailureObject> =
  zod.object({
    consecutive_failure_count: zod
      .number()
      .describe("Number of times the target failed consecutively"),
    created_at: zod.string().describe("Time of the failure"),
    id: zod.number().describe("The ID of the target failure"),
    raw_request: zod.string().describe("The raw message of the target request"),
    raw_response: zod.string().describe("The raw response of the failure"),
    status_code: zod
      .number()
      .describe("HTTP status code of the target failure"),
    target_name: zod.string().describe("Name of the target failure"),
    url: zod.string().describe("The API url of the failure record"),
  });

export const targetFailureResponseSchema: zod.ZodSchema<TargetFailureResponse> =
  zod.object({ target_failure: targetFailureObjectSchema });

export const targetFailuresResponseSchema: zod.ZodSchema<TargetFailuresResponse> =
  zod.object({ target_failures: zod.array(targetFailureObjectSchema) });

export const targetFlowdockSchema: zod.ZodSchema<TargetFlowdock> = zod.object({
  api_token: zod.string(),
});

export const targetGetSatisfactionSchema: zod.ZodSchema<TargetGetSatisfaction> =
  zod.object({
    account_name: zod.string(),
    email: zod.string(),
    password: zod.string().describe("only writable"),
    target_url: zod.string(),
  });

export const targetHttpSchema: zod.ZodSchema<TargetHTTP> = zod.object({
  content_type: zod
    .string()
    .describe(
      '"application/json", "application/xml", or "application/x-www-form-urlencoded"',
    ),
  method: zod.string().describe('"get", "patch", "put", "post", or "delete"'),
  password: zod.string().describe("only writable"),
  target_url: zod.string(),
  username: zod.string(),
});

export const targetJiraSchema: zod.ZodSchema<TargetJira> = zod.object({
  password: zod.string().describe("only writable"),
  target_url: zod.string(),
  username: zod.string(),
});

export const targetPivotalSchema: zod.ZodSchema<TargetPivotal> = zod.object({
  owner_by: zod.string(),
  project_id: zod.string(),
  requested_by: zod.string(),
  story_labels: zod.string(),
  story_title: zod.string(),
  story_type: zod.string(),
  token: zod.string(),
});

export const targetTwitterSchema: zod.ZodSchema<TargetTwitter> = zod.object({
  secret: zod.string().describe("only writable"),
  token: zod.string(),
});

export const targetUrlSchema: zod.ZodSchema<TargetURL> = zod.object({
  attribute: zod.string(),
  method: zod.string().describe('"get"'),
  password: zod.string().describe("only writable"),
  target_url: zod.string(),
  username: zod.string(),
});

export const targetYammerSchema: zod.ZodSchema<TargetYammer> = zod.object({
  group_id: zod.string(),
  token: zod.string(),
});

export const targetObjectSchema: zod.ZodSchema<TargetObject> = zod.intersection(
  targetCommonFieldsSchema,
  zod.union([
    targetBasecampSchema,
    targetCampfireSchema,
    targetClickatellSchema,
    targetEmailSchema,
    targetFlowdockSchema,
    targetGetSatisfactionSchema,
    targetJiraSchema,
    targetPivotalSchema,
    targetTwitterSchema,
    targetUrlSchema,
    targetHttpSchema,
    targetYammerSchema,
  ]),
);

export const targetResponseSchema: zod.ZodSchema<TargetResponse> = zod.object({
  target: targetObjectSchema,
});

export const targetsResponseSchema: zod.ZodSchema<TargetsResponse> = zod.object(
  { targets: zod.array(targetObjectSchema) },
);

export const ticketAuditViaObjectSchema: zod.ZodSchema<TicketAuditViaObject> =
  zod
    .object({
      channel: zod
        .string()
        .describe(
          'This tells you how the ticket or event was created. Examples: "web", "mobile", "rule", "system"',
        ),
      source: zod
        .object({})
        .passthrough()
        .describe(
          "For some channels a source object gives more information about how or why the ticket or event was created",
        ),
    })
    .describe(
      "Describes how the object was created. See the [Via object reference](/documentation/ticketing/reference-guides/via-object-reference)",
    );

export const requestObjectSchema: zod.ZodSchema<RequestObject> = zod.object({
  assignee_id: zod
    .number()
    .describe("The id of the assignee if the field is visible to end users"),
  can_be_solved_by_me: zod
    .boolean()
    .describe("If true, end user can mark request as solved."),
  collaborator_ids: zod
    .array(zod.number())
    .describe("The ids of users currently CC'ed on the ticket"),
  created_at: zod.string().describe("When this record was created"),
  custom_fields: zod
    .array(zod.object({ id: zod.number(), value: zod.string() }))
    .describe(
      "Custom fields for the request. See [Setting custom field values](/api-reference/ticketing/tickets/tickets/#setting-custom-field-values) in the Tickets doc",
    ),
  custom_status_id: zod
    .number()
    .describe("The custom ticket status id of the ticket"),
  description: zod
    .string()
    .describe(
      "Read-only first comment on the request. When [creating a request](#create-request), use `comment` to set the description",
    ),
  due_at: zod
    .string()
    .describe(
      'When the task is due (only applies if the request is of type "task")',
    ),
  email_cc_ids: zod
    .array(zod.number())
    .describe(
      "The ids of users who are currently email CCs on the ticket. See [CCs and followers resources](https://support.zendesk.com/hc/en-us/articles/360020585233) in the Support Help Center",
    ),
  followup_source_id: zod
    .number()
    .describe(
      "The id of the original ticket if this request is a follow-up ticket. See [Create Request](#create-request)",
    ),
  group_id: zod
    .number()
    .describe(
      "The id of the assigned group if the field is visible to end users",
    ),
  id: zod.number().describe("Automatically assigned when creating requests"),
  is_public: zod
    .boolean()
    .describe("Is true if any comments are public, false otherwise"),
  organization_id: zod.number().describe("The organization of the requester"),
  priority: zod
    .string()
    .describe('The priority of the request, "low", "normal", "high", "urgent"'),
  recipient: zod
    .string()
    .describe("The original recipient e-mail address of the request"),
  requester_id: zod.number().describe("The id of the requester"),
  solved: zod
    .boolean()
    .describe(
      'Whether or not request is solved (an end user can set this if "can_be_solved_by_me", above, is true for that user)',
    ),
  status: zod
    .string()
    .describe(
      'The state of the request, "new", "open", "pending", "hold", "solved", "closed"',
    ),
  subject: zod
    .string()
    .describe(
      "The value of the subject field for this request if the subject field is visible to end users; a truncated version of the description otherwise",
    ),
  ticket_form_id: zod
    .number()
    .describe(
      "The numeric id of the ticket form associated with this request if the form is visible to end users - only applicable for enterprise accounts",
    ),
  type: zod
    .string()
    .describe(
      'The type of the request, "question", "incident", "problem", "task"',
    ),
  updated_at: zod.string().describe("When this record last got updated"),
  url: zod.string().describe("The API url of this request"),
  via: ticketAuditViaObjectSchema,
});

export const requestResponseSchema: zod.ZodSchema<RequestResponse> = zod.object(
  { request: requestObjectSchema },
);

export const requestsResponseSchema: zod.ZodSchema<RequestsResponse> =
  zod.object({ requests: zod.array(requestObjectSchema) });

export const ticketAuditObjectSchema: zod.ZodSchema<TicketAuditObject> =
  zod.object({
    author_id: zod.number().describe("The user who created the audit"),
    created_at: zod.string().describe("The time the audit was created"),
    events: zod
      .array(zod.object({}).passthrough())
      .describe(
        "An array of the events that happened in this audit. See the [Ticket Audit events reference](/documentation/ticketing/reference-guides/ticket-audit-events-reference)",
      ),
    id: zod.number().describe("Automatically assigned when creating audits"),
    metadata: zod
      .object({})
      .passthrough()
      .describe("Metadata for the audit, custom and system data"),
    ticket_id: zod.number().describe("The ID of the associated ticket"),
    via: ticketAuditViaObjectSchema,
  });

export const ticketAuditResponseSchema: zod.ZodSchema<TicketAuditResponse> =
  zod.object({ audit: ticketAuditObjectSchema });

export const ticketAuditsCountResponseSchema: zod.ZodSchema<TicketAuditsCountResponse> =
  zod.object({
    count: zod.object({ refreshed_at: zod.string(), value: zod.number() }),
  });

export const ticketAuditsResponseSchema: zod.ZodSchema<TicketAuditsResponse> =
  zod.object({
    after_cursor: zod.string(),
    after_url: zod.string(),
    audits: zod.array(ticketAuditObjectSchema),
    before_cursor: zod.string(),
    before_url: zod.string(),
  });

export const ticketAuditsResponseNoneCursorSchema: zod.ZodSchema<TicketAuditsResponseNoneCursor> =
  zod.object({
    audits: zod.array(ticketAuditObjectSchema),
    count: zod.number(),
    next_page: zod.string().nullable(),
    previous_page: zod.string().nullable(),
  });

export const ticketChatCommentRedactionResponseSchema: zod.ZodSchema<TicketChatCommentRedactionResponse> =
  zod.object({
    chat_event: zod
      .object({
        id: zod.number().describe("Id assigned to the chat event object"),
        type: zod.string().describe("Type of chat event"),
        value: zod
          .object({
            chat_id: zod.string().describe("Id of the chat session"),
            history: zod
              .array(zod.object({}).passthrough())
              .describe("Chat events within the chat session"),
            visitor_id: zod.string().describe("Id assigned to the visitor"),
          })
          .describe("The value of the chat event object"),
      })
      .describe("Chat event object"),
  });

export const ticketCommentObjectSchema: zod.ZodSchema<TicketCommentObject> =
  zod.object({
    attachments: zod
      .array(attachmentObjectSchema)
      .describe(
        "Attachments, if any. See [Attachment](/api-reference/ticketing/tickets/ticket-attachments/)",
      ),
    audit_id: zod
      .number()
      .describe(
        "The id of the ticket audit record. See [Show Audit](/api-reference/ticketing/tickets/ticket_audits/#show-audit)",
      ),
    author_id: zod
      .number()
      .describe("The id of the comment author. See [Author id](#author-id)"),
    body: zod.string().describe("The comment string. See [Bodies](#bodies)"),
    created_at: zod.string().describe("The time the comment was created"),
    html_body: zod
      .string()
      .describe("The comment formatted as HTML. See [Bodies](#bodies)"),
    id: zod
      .number()
      .describe("Automatically assigned when the comment is created"),
    metadata: zod
      .object({})
      .passthrough()
      .describe(
        "System information (web client, IP address, etc.) and comment flags, if any. See [Comment flags](#comment-flags)",
      ),
    plain_body: zod
      .string()
      .describe("The comment presented as plain text. See [Bodies](#bodies)"),
    public: zod
      .boolean()
      .describe(
        "true if a public comment; false if an internal note. The initial value set on ticket creation persists for any additional comment unless you change it",
      ),
    type: zod
      .string()
      .describe(
        "`Comment` or `VoiceComment`. The JSON object for adding voice comments to tickets is different. See [Adding voice comments to tickets](/documentation/ticketing/managing-tickets/adding-voice-comments-to-tickets)",
      ),
    uploads: zod
      .array(zod.string())
      .describe(
        "List of tokens received from [uploading files](/api-reference/ticketing/tickets/ticket-attachments/#upload-files) for comment attachments. The files are attached by creating or updating tickets with the tokens. See [Attaching files](/api-reference/ticketing/tickets/tickets/#attaching-files) in Tickets",
      ),
    via: ticketAuditViaObjectSchema,
  });

export const ticketCommentResponseSchema: zod.ZodSchema<TicketCommentResponse> =
  zod.object({ comment: ticketCommentObjectSchema });

export const ticketCommentsCountResponseSchema: zod.ZodSchema<TicketCommentsCountResponse> =
  zod.object({
    count: zod.object({ refreshed_at: zod.string(), value: zod.number() }),
  });

export const ticketCommentsResponseSchema: zod.ZodSchema<TicketCommentsResponse> =
  zod.object({ comments: zod.array(ticketCommentObjectSchema) });

export const ticketCreateVoicemailTicketVoiceCommentInputSchema: zod.ZodSchema<TicketCreateVoicemailTicketVoiceCommentInput> =
  zod.object({
    answered_by_id: zod.number().describe("The agent who answered the call"),
    call_duration: zod.number().describe("Duration in seconds of the call"),
    from: zod.string().describe("Incoming phone number"),
    location: zod.string().describe("Location of the caller (optional)"),
    recording_url: zod.string().describe("Incoming phone number"),
    started_at: zod
      .string()
      .describe(
        "[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) timestamp of the call starting time",
      ),
    to: zod.string().describe("Dialed phone number"),
    transcription_text: zod
      .string()
      .describe("Transcription of the call (optional)"),
  });

export const ticketCreateVoicemailTicketInputSchema: zod.ZodSchema<TicketCreateVoicemailTicketInput> =
  zod.object({
    comment: ticketCommentObjectSchema,
    priority: zod
      .union([
        zod.literal("urgent"),
        zod.literal("high"),
        zod.literal("normal"),
        zod.literal("low"),
      ])
      .describe("The urgency with which the ticket should be addressed."),
    via_id: zod
      .union([zod.literal(44), zod.literal(45), zod.literal(46)])
      .describe("Required for Create Ticket operation"),
    voice_comment: ticketCreateVoicemailTicketVoiceCommentInputSchema.describe(
      "Required if creating voicemail ticket",
    ),
  });

export const ticketCreateVoicemailTicketRequestSchema: zod.ZodSchema<TicketCreateVoicemailTicketRequest> =
  zod.object({
    display_to_agent: zod
      .number()
      .describe(
        "Optional value such as the ID of the agent that will see the newly created ticket.",
      ),
    ticket: ticketCreateVoicemailTicketInputSchema.describe(
      "Ticket object that lists the values to set when the ticket is created",
    ),
  });

export const ticketFieldCountResponseSchema: zod.ZodSchema<TicketFieldCountResponse> =
  zod.object({
    count: zod.object({ refreshed_at: zod.string(), value: zod.number() }),
  });

export const ticketFieldCustomStatusObjectSchema: zod.ZodSchema<TicketFieldCustomStatusObject> =
  zod.object({
    active: zod
      .boolean()
      .describe(
        "If true, if the custom status is set to active. If false, the custom status is set to inactive",
      ),
    agent_label: zod.string().describe("The label displayed to agents"),
    created_at: zod
      .string()
      .describe(
        "The date and time at which the custom ticket status was created",
      ),
    default: zod
      .boolean()
      .describe(
        "If true, the custom status is set to default. If false, the custom status is set to non-default",
      ),
    description: zod
      .string()
      .describe(
        "The description of when the user should select this custom ticket status",
      ),
    end_user_description: zod
      .string()
      .describe("The description displayed to end users"),
    end_user_label: zod.string().describe("The label displayed to end users"),
    id: zod
      .number()
      .describe(
        "Automatically assigned when the custom ticket status is created",
      ),
    status_category: zod
      .union([
        zod.literal("new"),
        zod.literal("open"),
        zod.literal("pending"),
        zod.literal("hold"),
        zod.literal("solved"),
      ])
      .describe("The status category the custom ticket status belongs to"),
    updated_at: zod
      .string()
      .describe(
        "The date and time at which the custom ticket status was last updated",
      ),
  });

export const ticketFieldObjectSchema: zod.ZodSchema<TicketFieldObject> =
  zod.object({
    active: zod.boolean().describe("Whether this field is available"),
    agent_description: zod
      .string()
      .describe("A description of the ticket field that only agents can see"),
    collapsed_for_agents: zod
      .boolean()
      .describe(
        "If true, the field is shown to agents by default. If false, the field is hidden alongside infrequently used fields. Classic interface only",
      ),
    created_at: zod
      .string()
      .describe("The time the custom ticket field was created"),
    creator_app_name: zod
      .string()
      .describe(
        "Name of the app that created the ticket field, or a null value if no app created the ticket field",
      ),
    creator_user_id: zod
      .number()
      .describe(
        'The id of the user that created the ticket field, or a value of "-1" if an app created the ticket field',
      ),
    custom_field_options: zod
      .array(customFieldOptionObjectSchema)
      .describe(
        'Required and presented for a custom ticket field of type "multiselect" or "tagger"',
      ),
    custom_statuses: zod
      .array(ticketFieldCustomStatusObjectSchema)
      .describe(
        'List of customized ticket statuses. Only presented for a system ticket field of type "custom_status"',
      ),
    description: zod
      .string()
      .describe("Describes the purpose of the ticket field to users"),
    editable_in_portal: zod
      .boolean()
      .describe("Whether this field is editable by end users in Help Center"),
    id: zod.number().describe("Automatically assigned when created"),
    position: zod
      .number()
      .describe(
        "The relative position of the ticket field on a ticket. Note that for accounts with ticket forms, positions are controlled by the different forms",
      ),
    raw_description: zod
      .string()
      .describe(
        "The dynamic content placeholder if present, or the `description` value if not. See [Dynamic Content](/api-reference/ticketing/ticket-management/dynamic_content/)",
      ),
    raw_title: zod
      .string()
      .describe(
        "The dynamic content placeholder if present, or the `title` value if not. See [Dynamic Content](/api-reference/ticketing/ticket-management/dynamic_content/)",
      ),
    raw_title_in_portal: zod
      .string()
      .describe(
        'The dynamic content placeholder if present, or the "title_in_portal" value if not. See [Dynamic Content](/api-reference/ticketing/ticket-management/dynamic_content/)',
      ),
    regexp_for_validation: zod
      .string()
      .nullable()
      .describe(
        'For "regexp" fields only. The validation pattern for a field value to be deemed valid',
      ),
    relationship_filter: zod
      .object({})
      .describe(
        "A filter definition that allows your autocomplete to filter down results",
      ),
    relationship_target_type: zod
      .string()
      .describe(
        'A representation of what type of object the field references. Options are "zen:user", "zen:organization", "zen:ticket", or "zen:custom_object:CUSTOM_OBJECT_KEY". For example "zen:custom_object:apartment".',
      ),
    removable: zod
      .boolean()
      .describe(
        "If false, this field is a system field that must be present on all tickets",
      ),
    required: zod
      .boolean()
      .describe(
        "If true, agents must enter a value in the field to change the ticket status to solved",
      ),
    required_in_portal: zod
      .boolean()
      .describe(
        "If true, end users must enter a value in the field to create the request",
      ),
    sub_type_id: zod
      .number()
      .describe(
        'For system ticket fields of type "priority" and "status". Defaults to 0. A "priority" sub type of 1 removes the "Low" and "Urgent" options. A "status" sub type of 1 adds the "On-Hold" option',
      ),
    system_field_options: zod
      .array(systemFieldOptionObjectSchema)
      .describe(
        'Presented for a system ticket field of type "tickettype", "priority" or "status"',
      ),
    tag: zod
      .string()
      .nullable()
      .describe(
        'For "checkbox" fields only. A tag added to tickets when the checkbox field is selected',
      ),
    title: zod.string().describe("The title of the ticket field"),
    title_in_portal: zod
      .string()
      .describe("The title of the ticket field for end users in Help Center"),
    type: zod
      .string()
      .describe(
        "System or custom field type. Editable for custom field types and only on creation. See [Create Ticket Field](#create-ticket-field)",
      ),
    updated_at: zod
      .string()
      .describe("The time the custom ticket field was last updated"),
    url: zod.string().describe("The URL for this resource"),
    visible_in_portal: zod
      .boolean()
      .describe("Whether this field is visible to end users in Help Center"),
  });

export const ticketFieldResponseSchema: zod.ZodSchema<TicketFieldResponse> =
  zod.object({ ticket_field: ticketFieldObjectSchema });

export const ticketFieldsResponseSchema: zod.ZodSchema<TicketFieldsResponse> =
  zod.object({ ticket_fields: zod.array(ticketFieldObjectSchema) });

export const ticketFormObjectSchema: zod.ZodSchema<TicketFormObject> =
  zod.object({
    active: zod.boolean().describe("If the form is set as active"),
    agent_conditions: zod
      .array(zod.object({}).passthrough())
      .describe("Array of condition sets for agent workspaces"),
    created_at: zod.string().describe("The time the ticket form was created"),
    default: zod
      .boolean()
      .describe("Is the form the default form for this account"),
    display_name: zod
      .string()
      .describe("The name of the form that is displayed to an end user"),
    end_user_conditions: zod
      .array(zod.object({}).passthrough())
      .describe("Array of condition sets for end user products"),
    end_user_visible: zod
      .boolean()
      .describe("Is the form visible to the end user"),
    id: zod
      .number()
      .describe("Automatically assigned when creating ticket form"),
    in_all_brands: zod
      .boolean()
      .describe("Is the form available for use in all brands on this account"),
    name: zod.string().describe("The name of the form"),
    position: zod
      .number()
      .describe(
        "The position of this form among other forms in the account, i.e. dropdown",
      ),
    raw_display_name: zod
      .string()
      .describe(
        'The dynamic content placeholder, if present, or the "display_name" value, if not. See [Dynamic Content Items](/api-reference/ticketing/ticket-management/dynamic_content/)',
      ),
    raw_name: zod
      .string()
      .describe(
        'The dynamic content placeholder, if present, or the "name" value, if not. See [Dynamic Content Items](/api-reference/ticketing/ticket-management/dynamic_content/)',
      ),
    restricted_brand_ids: zod
      .array(zod.number())
      .describe("ids of all brands that this ticket form is restricted to"),
    ticket_field_ids: zod
      .array(zod.number())
      .describe(
        "ids of all ticket fields which are in this ticket form. The products use the order of the ids to show the field values in the tickets",
      ),
    updated_at: zod
      .string()
      .describe("The time of the last update of the ticket form"),
    url: zod.string().describe("URL of the ticket form"),
  });

export const ticketFormResponseSchema: zod.ZodSchema<TicketFormResponse> =
  zod.object({ ticket_form: ticketFormObjectSchema });

export const ticketFormsResponseSchema: zod.ZodSchema<TicketFormsResponse> =
  zod.object({ ticket_forms: zod.array(ticketFormObjectSchema) });

export const ticketImportInputSchema: zod.ZodSchema<TicketImportInput> =
  zod.object({
    assignee_id: zod
      .number()
      .describe("The agent currently assigned to the ticket"),
    comments: zod
      .array(
        zod.intersection(
          zod.object({
            value: zod.string().describe("The comment string value"),
          }),
          ticketCommentObjectSchema,
        ),
      )
      .describe(
        "The conversation between requesters, collaborators, and agents",
      ),
    description: zod
      .string()
      .describe(
        "Read-only first comment on the ticket. When [creating a ticket](#create-ticket), use `comment` to set the description. See [Description and first comment](#description-and-first-comment)",
      ),
    requester_id: zod.number().describe("The user who requested this ticket"),
    subject: zod
      .string()
      .describe("The value of the subject field for this ticket"),
    tags: zod
      .array(zod.string())
      .describe("The array of tags applied to this ticket"),
  });

export const ticketBulkImportRequestSchema: zod.ZodSchema<TicketBulkImportRequest> =
  zod.object({ tickets: zod.array(ticketImportInputSchema) });

export const ticketImportRequestSchema: zod.ZodSchema<TicketImportRequest> =
  zod.object({ ticket: ticketImportInputSchema });

export const ticketMergeInputSchema: zod.ZodSchema<TicketMergeInput> =
  zod.object({
    ids: zod
      .array(zod.unknown())
      .describe("Ids of tickets to merge into the target ticket"),
    source_comment: zod
      .string()
      .describe("Private comment to add to the source ticket"),
    source_comment_is_public: zod
      .boolean()
      .describe("Whether comment in source tickets are public or private"),
    target_comment: zod
      .string()
      .describe("Private comment to add to the target ticket"),
    target_comment_is_public: zod
      .boolean()
      .describe("Whether comment in target ticket is public or private"),
  });

export const ticketMetricEventBaseObjectSchema: zod.ZodSchema<TicketMetricEventBaseObject> =
  zod.object({
    id: zod
      .number()
      .describe("Automatically assigned when the record is created"),
    instance_id: zod
      .number()
      .describe(
        "The instance of the metric associated with the event. See [instance_id](#instance_id)",
      ),
    metric: zod
      .union([
        zod.literal("agent_work_time"),
        zod.literal("pausable_update_time"),
        zod.literal("periodic_update_time"),
        zod.literal("reply_time"),
        zod.literal("requester_wait_time"),
        zod.literal("resolution_time"),
      ])
      .describe("The metric being tracked"),
    ticket_id: zod.number().describe("Id of the associated ticket"),
    time: zod.string().describe("The time the event occurred"),
    type: zod
      .union([
        zod.literal("activate"),
        zod.literal("pause"),
        zod.literal("fulfill"),
        zod.literal("apply_sla"),
        zod.literal("breach"),
        zod.literal("update_status"),
        zod.literal("measure"),
      ])
      .describe(
        "The type of the metric event. See [Ticket metric event types reference](/documentation/ticketing/reference-guides/ticket-metric-event-types-reference)",
      ),
  });

export const exportIncrementalTicketEventsResponseSchema: zod.ZodSchema<ExportIncrementalTicketEventsResponse> =
  zod.object({
    count: zod.number(),
    end_of_stream: zod.boolean(),
    end_time: zod.number(),
    next_page: zod.string().nullable(),
    ticket_events: zod.array(ticketMetricEventBaseObjectSchema),
  });

export const ticketMetricEventBreachObjectSchema: zod.ZodSchema<TicketMetricEventBreachObject> =
  zod.intersection(
    ticketMetricEventBaseObjectSchema,
    zod.object({
      deleted: zod
        .boolean()
        .describe(
          "Available if `type` is `breach`. In general, you can ignore any breach event when `deleted` is true. See [deleted](#deleted)",
        ),
    }),
  );

export const ticketMetricEventGroupSlaObjectSchema: zod.ZodSchema<TicketMetricEventGroupSLAObject> =
  zod.intersection(
    ticketMetricEventBaseObjectSchema,
    zod.object({
      group_sla: zod
        .object({})
        .describe(
          'Available if `type` is "apply_group_sla". The Group SLA policy and target being enforced on the ticket and metric in question, if any. See [group_sla](#group_sla)',
        ),
    }),
  );

export const ticketMetricEventSlaObjectSchema: zod.ZodSchema<TicketMetricEventSLAObject> =
  zod.intersection(
    ticketMetricEventBaseObjectSchema,
    zod.object({
      sla: zod
        .object({})
        .describe(
          "Available if `type` is `apply_sla`. The SLA policy and target being enforced on the ticket and metric in question, if any. See [sla](#sla)",
        ),
    }),
  );

export const ticketMetricEventUpdateStatusObjectSchema: zod.ZodSchema<TicketMetricEventUpdateStatusObject> =
  zod.intersection(
    ticketMetricEventBaseObjectSchema,
    zod.object({
      status: zod
        .object({})
        .describe(
          "Available if `type` is `update_status`. Minutes since the metric has been open. See [status](#status)",
        ),
    }),
  );

export const ticketMetricEventsResponseSchema: zod.ZodSchema<TicketMetricEventsResponse> =
  zod.intersection(
    zod.object({
      ticket_metric_events: zod.array(ticketMetricEventBaseObjectSchema),
    }),
    zod.object({
      count: zod.number(),
      end_time: zod.number(),
      next_page: zod.string(),
    }),
  );

export const ticketMetricTimeObjectSchema: zod.ZodSchema<TicketMetricTimeObject> =
  zod.object({
    business: zod.number().describe("Time in business hours"),
    calendar: zod.number().describe("Time in calendar hours"),
  });

export const ticketMetricObjectSchema: zod.ZodSchema<TicketMetricObject> =
  zod.object({
    agent_wait_time_in_minutes: ticketMetricTimeObjectSchema.describe(
      "Number of minutes the agent spent waiting during calendar and business hours",
    ),
    assigned_at: zod.string().describe("When the ticket was assigned"),
    assignee_stations: zod
      .number()
      .describe("Number of assignees the ticket had"),
    assignee_updated_at: zod
      .string()
      .describe("When the assignee last updated the ticket"),
    created_at: zod.string().describe("When the record was created"),
    custom_status_updated_at: zod
      .string()
      .describe(
        "The date and time the ticket's custom status was last updated",
      ),
    first_resolution_time_in_minutes: ticketMetricTimeObjectSchema.describe(
      "Number of minutes to the first resolution time during calendar and business hours",
    ),
    full_resolution_time_in_minutes: ticketMetricTimeObjectSchema.describe(
      "Number of minutes to the full resolution during calendar and business hours",
    ),
    group_stations: zod
      .number()
      .describe("Number of groups the ticket passed through"),
    id: zod
      .number()
      .describe("Automatically assigned when the client is created"),
    initially_assigned_at: zod
      .string()
      .describe("When the ticket was initially assigned"),
    latest_comment_added_at: zod
      .string()
      .describe("When the latest comment was added"),
    on_hold_time_in_minutes: ticketMetricTimeObjectSchema.describe(
      "Number of minutes on hold",
    ),
    reopens: zod
      .number()
      .describe("Total number of times the ticket was reopened"),
    replies: zod
      .number()
      .describe("The number of public replies added to a ticket by an agent"),
    reply_time_in_minutes: ticketMetricTimeObjectSchema.describe(
      "Number of minutes to the first reply during calendar and business hours",
    ),
    reply_time_in_seconds: ticketMetricTimeObjectSchema.describe(
      "Number of seconds to the first reply during calendar hours, only available for Messaging tickets",
    ),
    requester_updated_at: zod
      .string()
      .describe("When the requester last updated the ticket"),
    requester_wait_time_in_minutes: ticketMetricTimeObjectSchema.describe(
      "Number of minutes the requester spent waiting during calendar and business hours",
    ),
    solved_at: zod.string().describe("When the ticket was solved"),
    status_updated_at: zod
      .string()
      .describe("When the status of the ticket was last updated"),
    ticket_id: zod.number().describe("Id of the associated ticket"),
    updated_at: zod.string().describe("When the record was last updated"),
    url: zod.string().describe("The API url of the ticket metric"),
  });

export const ticketMetricsByTicketMetricIdResponseSchema: zod.ZodSchema<TicketMetricsByTicketMetricIdResponse> =
  zod.object({ ticket_metric: zod.array(ticketMetricObjectSchema) });

export const ticketMetricsResponseSchema: zod.ZodSchema<TicketMetricsResponse> =
  zod.object({ ticket_metrics: zod.array(ticketMetricObjectSchema) });

export const ticketObjectSchema: zod.ZodSchema<TicketObject> = zod.object({
  allow_attachments: zod
    .boolean()
    .describe(
      "Permission for agents to add add attachments to a comment. Defaults to true",
    ),
  allow_channelback: zod
    .boolean()
    .describe(
      "Is false if channelback is disabled, true otherwise. Only applicable for channels framework ticket",
    ),
  assignee_email: zod
    .string()
    .describe(
      "Write only. The email address of the agent to assign the ticket to",
    ),
  assignee_id: zod
    .number()
    .describe("The agent currently assigned to the ticket"),
  attribute_value_ids: zod
    .array(zod.unknown())
    .describe(
      "Write only. An array of the IDs of attribute values to be associated with the ticket",
    ),
  brand_id: zod
    .number()
    .describe(
      "Enterprise only. The id of the brand this ticket is associated with",
    ),
  collaborator_ids: zod
    .array(zod.unknown())
    .describe("The ids of users currently CC'ed on the ticket"),
  collaborators: zod
    .array(collaboratorObjectSchema)
    .describe(
      "POST requests only. Users to add as cc's when creating a ticket. See [Setting Collaborators](/documentation/ticketing/managing-tickets/creating-and-updating-tickets#setting-collaborators)",
    ),
  comment: zod
    .object({})
    .describe(
      "Write only. An object that adds a comment to the ticket. See [Ticket comments](/api-reference/ticketing/tickets/ticket_comments/). To include an attachment with the comment, see [Attaching files](/documentation/ticketing/managing-tickets/creating-and-updating-tickets/#attaching-files)",
    ),
  created_at: zod.string().describe("When this record was created"),
  custom_fields: zod
    .array(zod.unknown())
    .describe(
      "Custom fields for the ticket. See [Setting custom field values](/documentation/ticketing/managing-tickets/creating-and-updating-tickets#setting-custom-field-values)",
    ),
  custom_status_id: zod
    .number()
    .describe(
      "The custom ticket status id of the ticket. See [custom ticket statuses](#custom-ticket-statuses)",
    ),
  description: zod
    .string()
    .describe(
      "Read-only first comment on the ticket. When [creating a ticket](#create-ticket), use `comment` to set the description. See [Description and first comment](#description-and-first-comment)\n",
    ),
  due_at: zod
    .string()
    .nullable()
    .describe(
      'If this is a ticket of type "task" it has a due date.  Due date format uses [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) format.',
    ),
  email_cc_ids: zod
    .array(zod.unknown())
    .describe(
      "The ids of agents or end users currently CC'ed on the ticket. See [CCs and followers resources](https://support.zendesk.com/hc/en-us/articles/360020585233) in the Support Help Center",
    ),
  email_ccs: zod
    .object({})
    .describe(
      "Write only. An array of objects that represent agent or end users email CCs to add or delete from the ticket. See [Setting email CCs](/documentation/ticketing/managing-tickets/creating-and-updating-tickets/#setting-email-ccs)",
    ),
  external_id: zod
    .string()
    .describe(
      "An id you can use to link Zendesk Support tickets to local records",
    ),
  follower_ids: zod
    .array(zod.unknown())
    .describe(
      "The ids of agents currently following the ticket. See [CCs and followers resources](https://support.zendesk.com/hc/en-us/articles/360020585233)",
    ),
  followers: zod
    .object({})
    .describe(
      "Write only. An array of objects that represent agent followers to add or delete from the ticket. See [Setting followers](/documentation/ticketing/managing-tickets/creating-and-updating-tickets/#setting-followers)",
    ),
  followup_ids: zod
    .array(zod.unknown())
    .describe(
      "The ids of the followups created from this ticket. Ids are only visible once the ticket is closed",
    ),
  forum_topic_id: zod
    .number()
    .describe(
      "The topic in the Zendesk Web portal this ticket originated from, if any. The Web portal is deprecated",
    ),
  from_messaging_channel: zod
    .boolean()
    .describe(
      "If true, the ticket's [via type](/documentation/ticketing/reference-guides/via-object-reference/) is a messaging channel.",
    ),
  group_id: zod.number().describe("The group this ticket is assigned to"),
  has_incidents: zod
    .boolean()
    .describe(
      "Is true if a ticket is a problem type and has one or more incidents linked to it. Otherwise, the value is false.",
    ),
  id: zod
    .number()
    .describe("Automatically assigned when the ticket is created"),
  is_public: zod
    .boolean()
    .describe("Is true if any comments are public, false otherwise"),
  macro_id: zod
    .number()
    .describe("Write only. A macro ID to be recorded in the ticket audit"),
  macro_ids: zod
    .array(zod.unknown())
    .describe(
      "POST requests only. List of macro IDs to be recorded in the ticket audit",
    ),
  metadata: zod
    .object({})
    .describe(
      "Write only. Metadata for the audit. In the `audit` object, the data is specified in the `custom` property of the `metadata` object. See [Setting Metadata](/documentation/ticketing/managing-tickets/creating-and-updating-tickets/#setting-metadata)",
    ),
  organization_id: zod
    .number()
    .describe(
      "The organization of the requester. You can only specify the ID of an organization associated with the requester. See [Organization Memberships](/api-reference/ticketing/organizations/organization_memberships/)",
    ),
  priority: zod
    .union([
      zod.literal("urgent"),
      zod.literal("high"),
      zod.literal("normal"),
      zod.literal("low"),
    ])
    .describe("The urgency with which the ticket should be addressed."),
  problem_id: zod
    .number()
    .describe(
      'For tickets of type "incident", the ID of the problem the incident is linked to',
    ),
  raw_subject: zod
    .string()
    .describe(
      'The dynamic content placeholder, if present, or the "subject" value, if not. See [Dynamic Content Items](/api-reference/ticketing/ticket-management/dynamic_content/)\n',
    ),
  recipient: zod
    .string()
    .describe(
      "The original recipient e-mail address of the ticket. Notification emails for the ticket are sent from this address",
    ),
  requester: zod
    .object({})
    .describe(
      "Write only. See [Creating a ticket with a new requester](/documentation/ticketing/managing-tickets/creating-and-updating-tickets/#creating-a-ticket-with-a-new-requester)",
    ),
  requester_id: zod.number().describe("The user who requested this ticket"),
  safe_update: zod
    .boolean()
    .describe(
      "Write only. Optional boolean. When true and an `update_stamp` date is included, protects against ticket update collisions and returns a message to let you know if one occurs. See [Protecting against ticket update collisions](/documentation/ticketing/managing-tickets/creating-and-updating-tickets/#protecting-against-ticket-update-collisions). A value of false has the same effect as true. Omit the property to force the updates to not be safe",
    ),
  satisfaction_rating: zod
    .object({})
    .passthrough()
    .describe(
      'The satisfaction rating of the ticket, if it exists, or the state of satisfaction, "offered" or "unoffered". The value is null for plan types that don\'t support CSAT',
    ),
  sharing_agreement_ids: zod
    .array(zod.unknown())
    .describe("The ids of the sharing agreements used for this ticket"),
  status: zod
    .union([
      zod.literal("new"),
      zod.literal("open"),
      zod.literal("pending"),
      zod.literal("hold"),
      zod.literal("solved"),
      zod.literal("closed"),
    ])
    .describe(
      "The state of the ticket.\n\nIf your account has activated custom ticket statuses, this is the ticket's\nstatus category. See [custom ticket statuses](#custom-ticket-statuses).\n",
    ),
  subject: zod
    .string()
    .describe("The value of the subject field for this ticket"),
  submitter_id: zod
    .number()
    .describe(
      "The user who submitted the ticket. The submitter always becomes the author of the first comment on the ticket",
    ),
  tags: zod
    .array(zod.unknown())
    .describe("The array of tags applied to this ticket"),
  ticket_form_id: zod
    .number()
    .describe(
      "Enterprise only. The id of the ticket form to render for the ticket",
    ),
  type: zod
    .union([
      zod.literal("problem"),
      zod.literal("incident"),
      zod.literal("question"),
      zod.literal("task"),
    ])
    .describe("The type of this ticket."),
  updated_at: zod.string().describe("When this record last got updated"),
  updated_stamp: zod
    .string()
    .describe(
      "Write only. Datetime of last update received from API. See the `safe_update` property",
    ),
  url: zod.string().describe("The API url of this ticket"),
  via: zod
    .object({
      channel: zod
        .string()
        .describe(
          'This tells you how the ticket or event was created. Examples: "web", "mobile", "rule", "system"\n',
        ),
      source: zod
        .object({})
        .passthrough()
        .describe(
          "For some channels a source object gives more information about how or why the ticket or event was created\n",
        ),
    })
    .describe(
      "For more information, see the [Via object reference](/documentation/ticketing/reference-guides/via-object-reference)",
    ),
  via_followup_source_id: zod
    .number()
    .describe(
      "POST requests only. The id of a closed ticket when creating a follow-up ticket. See [Creating a follow-up ticket](/documentation/ticketing/managing-tickets/creating-and-updating-tickets#creating-a-follow-up-ticket)",
    ),
  via_id: zod
    .number()
    .describe(
      "Write only. For more information, see the [Via object reference](/documentation/ticketing/reference-guides/via-object-reference/)",
    ),
  voice_comment: zod
    .object({})
    .describe(
      "Write only. See [Creating voicemail ticket](/api-reference/voice/talk-partner-edition-api/reference/#creating-voicemail-tickets)",
    ),
});

export const bookmarkObjectSchema: zod.ZodSchema<BookmarkObject> = zod.object({
  created_at: zod.string().describe("The time the bookmark was created"),
  id: zod
    .number()
    .describe("Automatically assigned when the bookmark is created"),
  ticket: ticketObjectSchema,
  url: zod.string().describe("The API url of this bookmark"),
});

export const bookmarkResponseSchema: zod.ZodSchema<BookmarkResponse> =
  zod.object({ bookmark: bookmarkObjectSchema });

export const bookmarksResponseSchema: zod.ZodSchema<BookmarksResponse> =
  zod.intersection(
    offsetPaginationObjectSchema,
    zod.object({ bookmarks: zod.array(bookmarkObjectSchema) }),
  );

export const cursorBasedExportIncrementalTicketsResponseSchema: zod.ZodSchema<CursorBasedExportIncrementalTicketsResponse> =
  zod
    .object({
      after_cursor: zod.string().nullable(),
      after_url: zod.string().nullable(),
      before_cursor: zod.string().nullable(),
      before_url: zod.string().nullable(),
      end_of_stream: zod.boolean(),
      tickets: zod.array(ticketObjectSchema),
    })
    .describe(
      "See [Tickets](/api-reference/ticketing/tickets/tickets/) for a detailed example.\n",
    );

export const ticketRelatedInformationSchema: zod.ZodSchema<TicketRelatedInformation> =
  zod.object({
    followup_source_ids: zod.array(
      zod.string().describe("Sources to follow up"),
    ),
    from_archive: zod
      .boolean()
      .describe("Is true if the current ticket is archived"),
    incidents: zod.number().describe("A count of related incident occurrences"),
    topic_id: zod
      .string()
      .nullable()
      .describe("Related topic in the Web portal (deprecated feature)"),
    twitter: zod
      .object({})
      .passthrough()
      .describe("X (formerly Twitter) information associated with the ticket"),
  });

export const ticketResponseSchema: zod.ZodSchema<TicketResponse> = zod.object({
  ticket: ticketObjectSchema,
});

export const ticketSkipObjectSchema: zod.ZodSchema<TicketSkipObject> =
  zod.object({
    created_at: zod.string().describe("Time the skip was created"),
    id: zod.number().describe("Automatically assigned upon creation"),
    reason: zod.string().describe("Reason for skipping the ticket"),
    ticket: ticketObjectSchema.describe(
      "The skipped ticket. See the [Ticket object reference](/api-reference/ticketing/tickets/tickets/#json-format)",
    ),
    ticket_id: zod.number().describe("ID of the skipped ticket"),
    updated_at: zod.string().describe("Time the skip was last updated"),
    user_id: zod.number().describe("ID of the skipping agent"),
  });

export const ticketSkipCreationSchema: zod.ZodSchema<TicketSkipCreation> =
  zod.object({ skip: ticketSkipObjectSchema });

export const ticketSkipsResponseSchema: zod.ZodSchema<TicketSkipsResponse> =
  zod.object({ skips: zod.array(ticketSkipObjectSchema) });

export const ticketUpdateInputSchema: zod.ZodSchema<TicketUpdateInput> =
  zod.object({
    additional_collaborators: zod
      .array(collaboratorObjectSchema)
      .describe(
        "An array of numeric IDs, emails, or objects containing name and email properties. See [Setting Collaborators](/api-reference/ticketing/tickets/tickets/#setting-collaborators). An email notification is sent to them when the ticket is updated",
      ),
    assignee_email: zod
      .string()
      .describe("The email address of the agent to assign the ticket to"),
    assignee_id: zod
      .number()
      .describe("The agent currently assigned to the ticket"),
    attribute_value_ids: zod
      .array(zod.number())
      .describe(
        "An array of the IDs of attribute values to be associated with the ticket",
      ),
    collaborator_ids: zod
      .array(zod.unknown())
      .describe("The ids of users currently CC'ed on the ticket"),
    comment: ticketCommentObjectSchema,
    custom_fields: zod
      .array(zod.unknown())
      .describe(
        "Custom fields for the ticket. See [Setting custom field values](/documentation/ticketing/managing-tickets/creating-and-updating-tickets#setting-custom-field-values)",
      ),
    custom_status_id: zod
      .number()
      .describe(
        "The custom ticket status id of the ticket. See [custom ticket statuses](#custom-ticket-statuses)",
      ),
    due_at: zod
      .string()
      .nullable()
      .describe(
        'If this is a ticket of type "task" it has a due date.  Due date format uses [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) format.',
      ),
    email_ccs: zod
      .array(emailCcObjectSchema)
      .describe(
        "An array of objects that represent agent or end users email CCs to add or delete from the ticket. See [Setting email CCs](/documentation/ticketing/managing-tickets/creating-and-updating-tickets#setting-email-ccs)",
      ),
    external_id: zod
      .string()
      .describe(
        "An id you can use to link Zendesk Support tickets to local records",
      ),
    followers: zod
      .array(followerObjectSchema)
      .describe(
        "An array of objects that represent agent followers to add or delete from the ticket. See [Setting followers](/documentation/ticketing/managing-tickets/creating-and-updating-tickets#setting-followers)",
      ),
    group_id: zod.number().describe("The group this ticket is assigned to"),
    organization_id: zod
      .number()
      .describe(
        "The organization of the requester. You can only specify the ID of an organization associated with the requester. See [Organization Memberships](/api-reference/ticketing/organizations/organization_memberships/)",
      ),
    priority: zod
      .union([
        zod.literal("urgent"),
        zod.literal("high"),
        zod.literal("normal"),
        zod.literal("low"),
      ])
      .describe("The urgency with which the ticket should be addressed."),
    problem_id: zod
      .number()
      .describe(
        'For tickets of type "incident", the ID of the problem the incident is linked to',
      ),
    requester_id: zod.number().describe("The user who requested this ticket"),
    safe_update: zod
      .boolean()
      .describe(
        "Optional boolean. Prevents updates with outdated ticket data (`updated_stamp` property required when true)",
      ),
    sharing_agreement_ids: zod
      .array(zod.number())
      .describe(
        "An array of the numeric IDs of sharing agreements. Note that this replaces any existing agreements",
      ),
    status: zod
      .union([
        zod.literal("new"),
        zod.literal("open"),
        zod.literal("pending"),
        zod.literal("hold"),
        zod.literal("solved"),
        zod.literal("closed"),
      ])
      .describe(
        "The state of the ticket.\n\nIf your account has activated custom ticket statuses, this is the ticket's\nstatus category. See [custom ticket statuses](#custom-ticket-statuses).\n",
      ),
    subject: zod
      .string()
      .describe("The value of the subject field for this ticket"),
    tags: zod
      .array(zod.unknown())
      .describe("The array of tags applied to this ticket"),
    type: zod
      .union([
        zod.literal("problem"),
        zod.literal("incident"),
        zod.literal("question"),
        zod.literal("task"),
      ])
      .describe("The type of this ticket."),
    updated_stamp: zod
      .string()
      .describe(
        "Datetime of last update received from API. See the safe_update property",
      ),
  });

export const ticketUpdateRequestSchema: zod.ZodSchema<TicketUpdateRequest> =
  zod.object({ ticket: ticketUpdateInputSchema });

export const ticketsResponseSchema: zod.ZodSchema<TicketsResponse> = zod.object(
  { tickets: zod.array(ticketObjectSchema) },
);

export const timeBasedExportIncrementalTicketsResponseSchema: zod.ZodSchema<TimeBasedExportIncrementalTicketsResponse> =
  zod
    .object({
      count: zod.number(),
      end_of_stream: zod.boolean(),
      end_time: zod.number(),
      next_page: zod.string().nullable(),
      tickets: zod.array(ticketObjectSchema),
    })
    .describe(
      "See [Tickets](/api-reference/ticketing/tickets/tickets/) for a detailed example.\n",
    );

export const trialAccountObjectSchema: zod.ZodSchema<TrialAccountObject> =
  zod.object({
    name: zod.string().describe("The name of the account"),
    subdomain: zod.string().describe("The subdomain of the account"),
    url: zod.string().describe("The URL of the account"),
  });

export const trialAccountResponseSchema: zod.ZodSchema<TrialAccountResponse> =
  zod.object({ account: trialAccountObjectSchema });

export const triggerActionDefinitionObjectSchema: zod.ZodSchema<TriggerActionDefinitionObject> =
  zod.object({
    group: zod.string(),
    nullable: zod.boolean(),
    repeatable: zod.boolean(),
    subject: zod.string(),
    title: zod.string(),
    type: zod.string(),
    values: zod.array(
      zod.object({
        enabled: zod.boolean(),
        title: zod.string(),
        value: zod.string(),
      }),
    ),
  });

export const triggerActionObjectSchema: zod.ZodSchema<TriggerActionObject> =
  zod.object({
    field: zod.string(),
    value: zod.union([zod.string(), zod.array(zod.unknown()), zod.number()]),
  });

export const triggerBatchRequestSchema: zod.ZodSchema<TriggerBatchRequest> =
  zod.object({
    active: zod.boolean(),
    category_id: zod.string(),
    id: zod.string(),
    position: zod.number(),
  });

export const triggerBulkUpdateItemSchema: zod.ZodSchema<TriggerBulkUpdateItem> =
  zod.object({
    active: zod
      .boolean()
      .describe("The active status of the trigger (true or false)"),
    category_id: zod
      .string()
      .describe("The ID of the new category the trigger is to be moved to"),
    id: zod.number().describe("The ID of the trigger to update"),
    position: zod.number().describe("The new position of the trigger"),
  });

export const triggerBulkUpdateRequestSchema: zod.ZodSchema<TriggerBulkUpdateRequest> =
  zod.object({ triggers: zod.array(triggerBulkUpdateItemSchema) });

export const triggerCategorySchema: zod.ZodSchema<TriggerCategory> = zod.object(
  {
    created_at: zod.string(),
    id: zod.string(),
    name: zod.string(),
    position: zod.number(),
    updated_at: zod.string(),
  },
);

export const triggerCategoryBatchRequestSchema: zod.ZodSchema<TriggerCategoryBatchRequest> =
  zod.object({ id: zod.string(), position: zod.number() });

export const batchJobRequestSchema: zod.ZodSchema<BatchJobRequest> = zod.object(
  {
    job: zod.object({
      action: zod.literal("patch"),
      items: zod.object({
        trigger_categories: zod.array(triggerCategoryBatchRequestSchema),
        triggers: zod.array(triggerBatchRequestSchema),
      }),
    }),
  },
);

export const triggerCategoryIdSchema: zod.ZodSchema<TriggerCategoryId> =
  zod.string();

export const triggerCategoryRequestSchema: zod.ZodSchema<TriggerCategoryRequest> =
  zod.object({ name: zod.string(), position: zod.number() });

export const triggerCategoryRequestRequiredSchema: zod.ZodSchema<TriggerCategoryRequestRequired> =
  zod.object({});

export const triggerCategoryResponseSchema: zod.ZodSchema<TriggerCategoryResponse> =
  zod.object({ trigger_category: triggerCategorySchema });

export const triggerCategoryRuleCountsSchema: zod.ZodSchema<TriggerCategoryRuleCounts> =
  zod.object({ active_count: zod.number(), inactive_count: zod.number() });

export const triggerCategoriesResponseSchema: zod.ZodSchema<TriggerCategoriesResponse> =
  zod.object({ trigger_categories: zod.array(triggerCategorySchema) });

export const triggerChangeObjectSchema: zod.ZodSchema<TriggerChangeObject> =
  zod.object({
    change: zod
      .string()
      .describe("One of `-`, `+`, `=` representing the type of change"),
    content: zod
      .union([
        zod.boolean(),
        zod.string(),
        zod.number(),
        zod.array(zod.unknown()),
      ])
      .describe("The value of the item it represents"),
  });

export const triggerActionDiffObjectSchema: zod.ZodSchema<TriggerActionDiffObject> =
  zod.object({
    field: zod
      .array(triggerChangeObjectSchema)
      .describe("An array of [change](#change) objects."),
    value: zod
      .array(triggerChangeObjectSchema)
      .describe("An array of [change](#change) objects."),
  });

export const triggerConditionDefinitionObjectAllSchema: zod.ZodSchema<TriggerConditionDefinitionObjectAll> =
  zod.object({
    group: zod.string(),
    nullable: zod.boolean(),
    operators: zod.array(
      zod.object({
        terminal: zod.boolean(),
        title: zod.string(),
        value: zod.string(),
      }),
    ),
    repeatable: zod.boolean(),
    subject: zod.string(),
    title: zod.string(),
    type: zod.string(),
    values: zod.array(
      zod.object({
        enabled: zod.boolean(),
        title: zod.string(),
        value: zod.string(),
      }),
    ),
  });

export const triggerConditionDefinitionObjectAnySchema: zod.ZodSchema<TriggerConditionDefinitionObjectAny> =
  zod.object({
    group: zod.string(),
    nullable: zod.boolean(),
    operators: zod.array(
      zod.object({
        terminal: zod.boolean(),
        title: zod.string(),
        value: zod.string(),
      }),
    ),
    repeatable: zod.boolean(),
    subject: zod.string(),
    title: zod.string(),
    type: zod.string(),
  });

export const relationshipFilterDefinitionSchema: zod.ZodSchema<RelationshipFilterDefinition> =
  zod.object({
    conditions_all: zod.array(triggerConditionDefinitionObjectAllSchema),
    conditions_any: zod.array(triggerConditionDefinitionObjectAnySchema),
  });

export const relationshipFilterDefinitionResponseSchema: zod.ZodSchema<RelationshipFilterDefinitionResponse> =
  zod.object({ definitions: relationshipFilterDefinitionSchema });

export const triggerConditionDiffObjectSchema: zod.ZodSchema<TriggerConditionDiffObject> =
  zod.object({
    field: zod
      .array(triggerChangeObjectSchema)
      .describe("An array of [change](#change) objects"),
    operator: zod
      .array(triggerChangeObjectSchema)
      .describe("An array of [change](#change) objects"),
    value: zod
      .array(triggerChangeObjectSchema)
      .describe("An array of [change](#change) objects"),
  });

export const triggerConditionObjectSchema: zod.ZodSchema<TriggerConditionObject> =
  zod.object({
    field: zod.string(),
    operator: zod.string(),
    value: zod.union([zod.string(), zod.array(zod.unknown())]),
  });

export const triggerConditionsDiffObjectSchema: zod.ZodSchema<TriggerConditionsDiffObject> =
  zod.object({
    all: zod.array(triggerConditionDiffObjectSchema).nullable(),
    any: zod.array(triggerConditionDiffObjectSchema).nullable(),
  });

export const triggerConditionsObjectSchema: zod.ZodSchema<TriggerConditionsObject> =
  zod
    .object({
      all: zod.array(triggerConditionObjectSchema).nullable(),
      any: zod.array(triggerConditionObjectSchema).nullable(),
    })
    .describe(
      "An object that describes the conditions under which the trigger will execute. See [Conditions reference](/documentation/ticketing/reference-guides/conditions-reference)",
    );

export const triggerDefinitionObjectSchema: zod.ZodSchema<TriggerDefinitionObject> =
  zod.object({
    actions: zod.array(triggerActionDefinitionObjectSchema),
    conditions_all: zod.array(triggerConditionDefinitionObjectAllSchema),
    conditions_any: zod.array(triggerConditionDefinitionObjectAnySchema),
  });

export const triggerDefinitionResponseSchema: zod.ZodSchema<TriggerDefinitionResponse> =
  zod.object({ definitions: triggerDefinitionObjectSchema });

export const triggerObjectSchema: zod.ZodSchema<TriggerObject> = zod.object({
  actions: zod
    .array(triggerActionObjectSchema)
    .describe(
      "An array of actions describing what the trigger will do. See [Actions reference](/documentation/ticketing/reference-guides/actions-reference)",
    ),
  active: zod.boolean().describe("Whether the trigger is active"),
  category_id: zod
    .string()
    .describe("The ID of the category the trigger belongs to"),
  conditions: triggerConditionsObjectSchema,
  created_at: zod.string().describe("The time the trigger was created"),
  default: zod.boolean().describe("If true, the trigger is a default trigger"),
  description: zod.string().describe("The description of the trigger"),
  id: zod.number().describe("Automatically assigned when created"),
  position: zod
    .number()
    .describe(
      "Position of the trigger, determines the order they will execute in",
    ),
  raw_title: zod
    .string()
    .describe("The raw format of the title of the trigger"),
  title: zod.string().describe("The title of the trigger"),
  updated_at: zod
    .string()
    .describe("The time of the last update of the trigger"),
  url: zod.string().describe("The url of the trigger"),
});

export const batchJobResponseSchema: zod.ZodSchema<BatchJobResponse> =
  zod.object({
    errors: zod.array(batchErrorItemSchema),
    results: zod.object({
      trigger_categories: zod.array(triggerCategorySchema),
      triggers: zod.array(triggerObjectSchema),
    }),
    status: zod.union([zod.literal("complete"), zod.literal("failed")]),
  });

export const triggerResponseSchema: zod.ZodSchema<TriggerResponse> = zod.object(
  { trigger: triggerObjectSchema },
);

export const triggerRevisionResponseSchema: zod.ZodSchema<TriggerRevisionResponse> =
  zod.object({
    trigger_revision: zod.object({
      author_id: zod.number(),
      created_at: zod.string(),
      id: zod.number(),
      snapshot: zod.object({
        actions: zod.array(triggerActionObjectSchema),
        active: zod.boolean(),
        conditions: triggerConditionsObjectSchema,
        description: zod.string().nullable(),
        title: zod.string(),
      }),
      url: zod.string(),
    }),
  });

export const triggerSnapshotObjectSchema: zod.ZodSchema<TriggerSnapshotObject> =
  zod.object({
    actions: zod
      .array(triggerActionObjectSchema)
      .describe(
        "An array of [Actions](#actions) describing what the trigger will do",
      ),
    active: zod.boolean().describe("Whether the trigger is active"),
    conditions: triggerConditionsObjectSchema,
    description: zod
      .string()
      .nullable()
      .describe("The description of the trigger"),
    title: zod.string().describe("The title of the trigger"),
  });

export const triggerRevisionsResponseSchema: zod.ZodSchema<TriggerRevisionsResponse> =
  zod.object({
    after_cursor: zod.string(),
    after_url: zod.string(),
    before_cursor: zod.string(),
    before_url: zod.string(),
    count: zod.number(),
    trigger_revisions: zod.array(
      zod.object({
        author_id: zod.number(),
        created_at: zod.string(),
        diff: zod.object({
          actions: zod
            .array(triggerActionDiffObjectSchema)
            .describe(
              "An array that contain [action diff objects](#Action Diffs)",
            ),
          active: zod
            .array(triggerChangeObjectSchema)
            .describe("An array of [change](#change) objects"),
          conditions: triggerConditionDiffObjectSchema,
          description: zod
            .array(triggerChangeObjectSchema)
            .describe("An array of [change](#change) objects"),
          source_id: zod.number().describe("ID of the source revision"),
          target_id: zod.number().describe("ID of the target revision"),
          title: zod
            .array(triggerChangeObjectSchema)
            .describe("An array of [change](#change) objects"),
        }),
        id: zod.number(),
        snapshot: triggerSnapshotObjectSchema,
        url: zod.string(),
      }),
    ),
  });

export const triggerWithCategoryRequestSchema: zod.ZodSchema<TriggerWithCategoryRequest> =
  zod.object({
    trigger: zod.intersection(
      triggerObjectSchema,
      zod.union([triggerCategorySchema, triggerCategoryIdSchema]),
    ),
  });

export const triggersResponseSchema: zod.ZodSchema<TriggersResponse> =
  zod.object({
    count: zod.number(),
    next_page: zod.string().nullable(),
    previous_page: zod.string().nullable(),
    triggers: zod.array(triggerObjectSchema),
  });

export const twitterChannelObjectSchema: zod.ZodSchema<TwitterChannelObject> =
  zod.object({
    allow_reply: zod
      .boolean()
      .describe("If replies are allowed for this handle"),
    avatar_url: zod.string().describe("The profile image url of the handle"),
    brand_id: zod.number().describe("What brand the handle is associated with"),
    can_reply: zod.boolean().describe("If replies are allowed for this handle"),
    created_at: zod.string().describe("The time the handle was created"),
    id: zod.number().describe("Automatically assigned upon creation"),
    name: zod.string().describe("The profile name of the handle"),
    screen_name: zod.string().describe("The Twitter handle"),
    twitter_user_id: zod.number().describe("The country's code"),
    updated_at: zod
      .string()
      .describe("The time of the last update of the handle"),
  });

export const twitterChannelResponseSchema: zod.ZodSchema<TwitterChannelResponse> =
  zod.object({ monitored_twitter_handle: twitterChannelObjectSchema });

export const twitterChannelTwicketStatusResponseSchema: zod.ZodSchema<TwitterChannelTwicketStatusResponse> =
  zod.object({
    statuses: zod.array(
      zod.object({
        favorited: zod.boolean(),
        id: zod.number(),
        retweeted: zod.boolean(),
        user_followed: zod.boolean(),
      }),
    ),
  });

export const twitterChannelsResponseSchema: zod.ZodSchema<TwitterChannelsResponse> =
  zod.object({
    monitored_twitter_handles: zod.array(twitterChannelObjectSchema),
  });

export const updateResourceResultSchema: zod.ZodSchema<UpdateResourceResult> =
  zod.object({
    action: zod
      .string()
      .describe('the action the job attempted (`"action": "update"`)\n'),
    id: zod
      .number()
      .describe("the id of the resource the job attempted to update"),
    status: zod.string().describe('the status (`"status": "Updated"`)\n'),
    success: zod
      .boolean()
      .describe(
        'whether the action was successful or not (`"success": true`)\n',
      ),
  });

export const jobStatusResultObjectSchema: zod.ZodSchema<JobStatusResultObject> =
  zod.union([createResourceResultSchema, updateResourceResultSchema]);

export const jobStatusObjectSchema: zod.ZodSchema<JobStatusObject> = zod.object(
  {
    id: zod.string().describe("Automatically assigned when the job is queued"),
    job_type: zod.string().describe("The type of the job"),
    message: zod
      .string()
      .nullable()
      .describe("Message from the job worker, if any"),
    progress: zod
      .number()
      .nullable()
      .describe("Number of tasks that have already been completed"),
    results: zod
      .union([
        zod.array(jobStatusResultObjectSchema).nullable(),
        zod.object({
          success: zod
            .boolean()
            .describe("Whether the action was successful or not"),
        }),
      ])
      .describe(
        "Result data from processed tasks. See [Results](#results) below",
      ),
    status: zod
      .string()
      .describe(
        'The current status. One of the following: "queued", "working", "failed", "completed"',
      ),
    total: zod
      .number()
      .nullable()
      .describe("The total number of tasks this job is batching through"),
    url: zod.string().describe("The URL to poll for status updates"),
  },
);

export const jobStatusResponseSchema: zod.ZodSchema<JobStatusResponse> =
  zod.object({ job_status: jobStatusObjectSchema });

export const jobStatusesResponseSchema: zod.ZodSchema<JobStatusesResponse> =
  zod.object({ job_statuses: zod.array(jobStatusObjectSchema) });

export const urlObjectSchema: zod.ZodSchema<UrlObject> = zod.object({
  url: zod.string(),
});

export const userCreateInputSchema: zod.ZodSchema<UserCreateInput> = zod.object(
  {
    custom_role_id: zod.number(),
    email: zod.string(),
    external_id: zod.string(),
    identities: zod.array(
      zod.object({ type: zod.string(), value: zod.string() }),
    ),
    name: zod.string(),
    organization: zod.object({ name: zod.string() }),
    organization_id: zod.number(),
    role: zod.string(),
  },
);

export const userFieldObjectSchema: zod.ZodSchema<UserFieldObject> =
  customFieldObjectSchema;

export const userFieldResponseSchema: zod.ZodSchema<UserFieldResponse> =
  zod.object({ user_field: userFieldObjectSchema });

export const userFieldsResponseSchema: zod.ZodSchema<UserFieldsResponse> =
  zod.object({
    count: zod.number().describe("Total count of records retrieved"),
    next_page: zod.string().nullable().describe("URL of the next page"),
    previous_page: zod.string().nullable().describe("URL of the previous page"),
    user_fields: zod.array(userFieldObjectSchema),
  });

export const userForAdminSchema: zod.ZodSchema<UserForAdmin> = zod.object({
  active: zod.boolean().describe("false if the user has been deleted"),
  alias: zod.string().describe("An alias displayed to end users"),
  chat_only: zod
    .boolean()
    .describe("Whether or not the user is a chat-only agent"),
  created_at: zod.string().describe("The time the user was created"),
  custom_role_id: zod
    .number()
    .nullable()
    .describe(
      "A custom role if the user is an agent on the Enterprise plan or above",
    ),
  default_group_id: zod.number().describe("The id of the user's default group"),
  details: zod
    .string()
    .describe(
      "Any details you want to store about the user, such as an address",
    ),
  email: zod
    .string()
    .describe(
      "The user's primary email address. *Writeable on create only. On update, a secondary email is added. See [Email Address](#email-address)",
    ),
  external_id: zod
    .string()
    .nullable()
    .describe(
      'A unique identifier from another system. The API treats the id as case insensitive. Example: "ian1" and "IAN1" are the same value.',
    ),
  iana_time_zone: zod.string().describe("The time zone for the user"),
  id: zod.number().describe("Automatically assigned when the user is created"),
  last_login_at: zod
    .string()
    .describe(
      "Last time the user signed in to Zendesk Support or made an API request\nusing an API token or basic authentication\n",
    ),
  locale: zod
    .string()
    .describe(
      'The user\'s locale. A BCP-47 compliant tag for the locale. If both "locale" and "locale_id" are present on create or update, "locale_id" is ignored and only "locale" is used.',
    ),
  locale_id: zod.number().describe("The user's language identifier"),
  moderator: zod
    .boolean()
    .describe("Designates whether the user has forum moderation capabilities"),
  name: zod.string().describe("The user's name"),
  notes: zod.string().describe("Any notes you want to store about the user"),
  only_private_comments: zod
    .boolean()
    .describe("true if the user can only create private comments"),
  organization_id: zod
    .number()
    .nullable()
    .describe(
      "The id of the user's organization. If the user has more than one [organization memberships](/api-reference/ticketing/organizations/organization_memberships/), the id of the user's default organization. If updating, see [Organization ID](#organization-id)",
    ),
  phone: zod
    .string()
    .nullable()
    .describe(
      "The user's primary phone number. See [Phone Number](#phone-number) below",
    ),
  photo: zod
    .object({})
    .passthrough()
    .nullable()
    .describe(
      "The user's profile picture represented as an [Attachment](/api-reference/ticketing/tickets/ticket-attachments/) object",
    ),
  remote_photo_url: zod
    .string()
    .describe("A URL pointing to the user's profile picture."),
  report_csv: zod
    .boolean()
    .describe(
      "This parameter is inert and has no effect. It may be deprecated in the\nfuture.\n\nPreviously, this parameter determined whether a user could access a CSV\nreport in a legacy Guide dashboard. This dashboard has been removed. See\n[Announcing Guide legacy reporting upgrade to\nExplore](https://support.zendesk.com/hc/en-us/articles/4762263171610-Announcing-Guide-legacy-reporting-upgrade-to-Explore-)\n",
    ),
  restricted_agent: zod
    .boolean()
    .describe(
      "If the agent has any restrictions; false for admins and unrestricted agents, true for other agents",
    ),
  role: zod
    .string()
    .describe(
      'The user\'s role. Possible values are "end-user", "agent", or "admin"',
    ),
  role_type: zod
    .number()
    .nullable()
    .describe(
      "The user's role id. 0 for a custom agent, 1 for a light agent, 2 for a chat agent, 3 for a chat agent added to the Support account as a contributor ([Chat Phase 4](https://support.zendesk.com/hc/en-us/articles/360022365373#topic_djh_1zk_4fb)), 4 for an admin, and 5 for a billing admin",
    ),
  shared: zod
    .boolean()
    .describe(
      "If the user is shared from a different Zendesk Support instance. Ticket sharing accounts only",
    ),
  shared_agent: zod
    .boolean()
    .describe(
      "If the user is a shared agent from a different Zendesk Support instance. Ticket sharing accounts only",
    ),
  shared_phone_number: zod
    .boolean()
    .nullable()
    .describe(
      "Whether the `phone` number is shared or not. See [Phone Number](#phone-number) below",
    ),
  signature: zod
    .string()
    .describe(
      "The user's signature. Only agents and admins can have signatures",
    ),
  suspended: zod
    .boolean()
    .describe(
      "If the agent is suspended. Tickets from suspended users are also suspended, and these users cannot sign in to the end user portal",
    ),
  tags: zod
    .array(zod.unknown())
    .describe(
      "The user's tags. Only present if your account has user tagging enabled",
    ),
  ticket_restriction: zod
    .string()
    .nullable()
    .describe(
      'Specifies which tickets the user has access to. Possible values are: "organization", "groups", "assigned", "requested", null. "groups" and "assigned" are valid only for agents. If you pass an invalid value to an end user (for example, "groups"), they will be assigned to "requested", regardless of their previous access',
    ),
  time_zone: zod
    .string()
    .describe("The user's time zone. See [Time Zone](#time-zone)"),
  two_factor_auth_enabled: zod
    .boolean()
    .nullable()
    .describe("If two factor authentication is enabled"),
  updated_at: zod.string().describe("The time the user was last updated"),
  url: zod.string().describe("The user's API url"),
  user_fields: zod
    .object({})
    .passthrough()
    .describe(
      "Values of custom fields in the user's profile. See [User Fields](#user-fields)",
    ),
  verified: zod
    .boolean()
    .describe(
      "Any of the user's identities is verified. See [User Identities](/api-reference/ticketing/users/user_identities)",
    ),
});

export const userForEndUserSchema: zod.ZodSchema<UserForEndUser> = zod.object({
  created_at: zod.string().describe("The time the user was created"),
  email: zod
    .string()
    .describe(
      "The primary email address of this user. If the primary email address is not [verified](https://support.zendesk.com/hc/en-us/articles/4408886752410), the secondary email address is used",
    ),
  iana_time_zone: zod.string().describe("The time zone for the user"),
  id: zod.number().describe("Automatically assigned when creating users"),
  locale: zod.string().describe("The locale for this user"),
  locale_id: zod.number().describe("The language identifier for this user"),
  name: zod.string().describe("The name of the user"),
  organization_id: zod
    .number()
    .describe(
      "The id of the user's organization. If the user has more than one [organization memberships](/api-reference/ticketing/organizations/organization_memberships/), the id of the user's default organization. If updating, see [Organization ID](/api-reference/ticketing/users/users/#organization-id)",
    ),
  phone: zod
    .string()
    .describe(
      "The primary phone number of this user. See [Phone Number](/api-reference/ticketing/users/users/#phone-number) in the Users API",
    ),
  photo: zod
    .object({})
    .passthrough()
    .describe(
      "The user's profile picture represented as an [Attachment](/api-reference/ticketing/tickets/ticket-attachments/) object",
    ),
  role: zod
    .string()
    .describe(
      'The role of the user. Possible values: `"end-user"`, `"agent"`, `"admin"`',
    ),
  shared_phone_number: zod
    .boolean()
    .describe(
      "Whether the `phone` number is shared or not. See [Phone Number](/api-reference/ticketing/users/users/#phone-number) in the Users API",
    ),
  time_zone: zod.string().describe("The time-zone of this user"),
  updated_at: zod.string().describe("The time of the last update of the user"),
  url: zod.string().describe("The API url of this user"),
  verified: zod
    .boolean()
    .describe(
      "Any of the user's identities is verified. See [User Identities](/api-reference/ticketing/users/user_identities)",
    ),
});

export const userIdentityObjectSchema: zod.ZodSchema<UserIdentityObject> =
  zod.object({
    created_at: zod.string().describe("The time the identity was created"),
    deliverable_state: zod
      .string()
      .describe(
        "Email identity type only. Indicates if Zendesk sends notifications to the email address. See [Deliverable state](#deliverable-state)",
      ),
    id: zod.number().describe("Automatically assigned on creation"),
    primary: zod
      .boolean()
      .describe(
        "If the identity is the primary identity. *Writable only when creating, not when updating. Use the [Make Identity Primary](#make-identity-primary) endpoint instead",
      ),
    type: zod
      .union([
        zod.literal("email"),
        zod.literal("twitter"),
        zod.literal("facebook"),
        zod.literal("google"),
        zod.literal("phone_number"),
        zod.literal("agent_forwarding"),
        zod.literal("any_channel"),
        zod.literal("foreign"),
        zod.literal("sdk"),
      ])
      .describe("The type of this identity"),
    undeliverable_count: zod
      .number()
      .describe(
        "The number of times a soft-bounce response was received at that address",
      ),
    updated_at: zod.string().describe("The time the identity was updated"),
    url: zod.string().describe("The API url of this identity"),
    user_id: zod.number().describe("The id of the user"),
    value: zod
      .string()
      .describe("The identifier for this identity, such as an email address"),
    verified: zod.boolean().describe("If the identity has been verified"),
  });

export const userIdentitiesResponseSchema: zod.ZodSchema<UserIdentitiesResponse> =
  zod.object({ identities: zod.array(userIdentityObjectSchema) });

export const userIdentityResponseSchema: zod.ZodSchema<UserIdentityResponse> =
  zod.object({ identity: userIdentityObjectSchema });

export const userMergeByIdInputSchema: zod.ZodSchema<UserMergeByIdInput> =
  zod.object({ id: zod.number() });

export const userMergePropertiesInputSchema: zod.ZodSchema<UserMergePropertiesInput> =
  zod.object({
    email: zod.string(),
    name: zod.string(),
    organization_id: zod.number(),
    password: zod.string(),
  });

export const userInputSchema: zod.ZodSchema<UserInput> = zod.union([
  userCreateInputSchema,
  userMergePropertiesInputSchema,
  userMergeByIdInputSchema,
]);

export const userObjectSchema: zod.ZodSchema<UserObject> = zod.union([
  userForAdminSchema,
  userForEndUserSchema,
]);

export const activityObjectSchema: zod.ZodSchema<ActivityObject> = zod.object({
  actor: userObjectSchema.describe(
    "The full user record of the user responsible for the ticket activity. See [Users](/api-reference/ticketing/users/users/)",
  ),
  actor_id: zod
    .number()
    .describe(
      'The id of the user responsible for the ticket activity. An `actor_id` of "-1" is a Zendesk system user, such as an automations action.',
    ),
  created_at: zod.string().describe("When the record was created"),
  id: zod.number().describe("Automatically assigned on creation"),
  object: zod
    .object({})
    .passthrough()
    .describe(
      "The content of the activity. Can be a ticket, comment, or change.",
    ),
  target: zod
    .object({})
    .passthrough()
    .describe("The target of the activity, a ticket."),
  title: zod.string().describe("Description of the activity"),
  updated_at: zod.string().describe("When the record was last updated"),
  url: zod.string().describe("The API url of the activity"),
  user: userObjectSchema.describe(
    "The full user record of the agent making the request. See [Users](/api-reference/ticketing/users/users/)",
  ),
  user_id: zod.number().describe("The id of the agent making the request"),
  verb: zod
    .string()
    .describe(
      'The type of activity. Can be "tickets.assignment", "tickets.comment", or "tickets.priority_increase"',
    ),
});

export const activitiesResponseSchema: zod.ZodSchema<ActivitiesResponse> =
  zod.object({
    activities: zod.array(activityObjectSchema),
    actors: zod.array(zod.object({}).passthrough()),
    count: zod.number(),
    next_page: zod.string().nullable(),
    previous_page: zod.string().nullable(),
    users: zod.array(zod.object({}).passthrough()),
  });

export const activityResponseSchema: zod.ZodSchema<ActivityResponse> =
  zod.object({ activity: activityObjectSchema });

export const currentUserResponseSchema: zod.ZodSchema<CurrentUserResponse> =
  zod.object({
    user: zod.intersection(
      userObjectSchema,
      zod.object({
        authenticity_token: zod
          .string()
          .describe("CSRF token required by some Zendesk APIs."),
      }),
    ),
  });

export const cursorBasedExportIncrementalUsersResponseSchema: zod.ZodSchema<CursorBasedExportIncrementalUsersResponse> =
  zod.object({
    after_cursor: zod.string().nullable(),
    after_url: zod.string().nullable(),
    before_cursor: zod.string().nullable(),
    before_url: zod.string().nullable(),
    end_of_stream: zod.boolean(),
    users: zod.array(userObjectSchema),
  });

export const timeBasedExportIncrementalUsersResponseSchema: zod.ZodSchema<TimeBasedExportIncrementalUsersResponse> =
  zod.object({
    count: zod.number(),
    end_of_stream: zod.boolean(),
    end_time: zod.number(),
    next_page: zod.string().nullable(),
    users: zod.array(userObjectSchema),
  });

export const userPasswordRequirementsResponseSchema: zod.ZodSchema<UserPasswordRequirementsResponse> =
  zod.object({ requirements: zod.array(zod.string()) });

export const userRelatedObjectSchema: zod.ZodSchema<UserRelatedObject> =
  zod.object({
    assigned_tickets: zod.number().describe("Count of assigned tickets"),
    ccd_tickets: zod.number().describe("Count of collaborated tickets"),
    organization_subscriptions: zod
      .number()
      .describe("Count of organization subscriptions"),
    requested_tickets: zod.number().describe("Count of requested tickets"),
  });

export const userRelatedResponseSchema: zod.ZodSchema<UserRelatedResponse> =
  zod.object({ user_related: userRelatedObjectSchema });

export const userRequestSchema: zod.ZodSchema<UserRequest> = zod.object({
  user: userInputSchema,
});

export const userResponseSchema: zod.ZodSchema<UserResponse> = zod.object({
  user: userObjectSchema,
});

export const usersRequestSchema: zod.ZodSchema<UsersRequest> = zod.object({
  users: zod.array(userInputSchema),
});

export const usersResponseSchema: zod.ZodSchema<UsersResponse> = zod.object({
  users: zod.array(userObjectSchema),
});

export const reverseLookupResponseSchema: zod.ZodSchema<ReverseLookupResponse> =
  usersResponseSchema;

export const viaObjectSchema: zod.ZodSchema<ViaObject> = zod
  .object({
    channel: zod
      .string()
      .describe(
        'This tells you how the ticket or event was created. Examples: "web", "mobile", "rule", "system"\n',
      ),
    source: zod
      .object({
        from: zod.object({
          address: zod.string().nullable(),
          id: zod.number().nullable(),
          name: zod.string().nullable(),
          title: zod.string().nullable(),
        }),
        rel: zod.string().nullable(),
        to: zod.object({ address: zod.string(), name: zod.string() }),
      })
      .passthrough()
      .describe(
        "For some channels a source object gives more information about how or why the ticket or event was created\n",
      ),
  })
  .describe(
    "An object explaining how the ticket was created. See the [Via object reference](/documentation/ticketing/reference-guides/via-object-reference)\n",
  );

export const auditObjectSchema: zod.ZodSchema<AuditObject> = zod.object({
  author_id: zod.number(),
  created_at: zod.string(),
  events: zod.array(zod.unknown()),
  id: zod.number(),
  metadata: zod.object({}),
  ticket_id: zod.number(),
  via: viaObjectSchema,
});

export const suspendedTicketObjectSchema: zod.ZodSchema<SuspendedTicketObject> =
  zod.object({
    attachments: zod
      .array(attachmentObjectSchema)
      .nullable()
      .describe(
        "The attachments, if any associated to this suspended ticket. See [Attachments](/api-reference/ticketing/tickets/ticket-attachments/)",
      ),
    author: authorObjectSchema.describe(
      "The author id (if available), name and email",
    ),
    brand_id: zod
      .number()
      .describe(
        "The id of the brand this ticket is associated with. Only applicable for Enterprise accounts",
      ),
    cause: zod.string().describe("Why the ticket was suspended"),
    cause_id: zod.number().describe("The ID of the cause"),
    content: zod.string().describe("The content that was flagged"),
    created_at: zod
      .string()
      .describe(
        "The ticket ID this suspended email is associated with, if available",
      ),
    error_messages: zod
      .array(zod.object({}))
      .nullable()
      .describe(
        "The error messages if any associated to this suspended ticket",
      ),
    id: zod.number().describe("Automatically assigned"),
    message_id: zod.string().describe("The ID of the email, if available"),
    recipient: zod
      .string()
      .describe("The original recipient e-mail address of the ticket"),
    subject: zod
      .string()
      .describe("The value of the subject field for this ticket"),
    ticket_id: zod
      .number()
      .describe(
        "The ticket ID this suspended email is associated with, if available",
      ),
    updated_at: zod.string().describe("When the ticket was assigned"),
    url: zod.string().describe("The API url of this ticket"),
    via: viaObjectSchema,
  });

export const recoverSuspendedTicketResponseSchema: zod.ZodSchema<RecoverSuspendedTicketResponse> =
  zod.object({ ticket: zod.array(suspendedTicketObjectSchema) });

export const recoverSuspendedTicketUnprocessableContentResponseSchema: zod.ZodSchema<RecoverSuspendedTicketUnprocessableContentResponse> =
  zod.object({ ticket: zod.array(suspendedTicketObjectSchema) });

export const recoverSuspendedTicketsResponseSchema: zod.ZodSchema<RecoverSuspendedTicketsResponse> =
  zod.object({ tickets: zod.array(suspendedTicketObjectSchema) });

export const suspendedTicketResponseSchema: zod.ZodSchema<SuspendedTicketResponse> =
  zod.object({ suspended_ticket: zod.array(suspendedTicketObjectSchema) });

export const suspendedTicketsResponseSchema: zod.ZodSchema<SuspendedTicketsResponse> =
  zod.object({ suspended_tickets: zod.array(suspendedTicketObjectSchema) });

export const ticketCreateInputSchema: zod.ZodSchema<TicketCreateInput> =
  zod.intersection(
    ticketUpdateInputSchema,
    zod.object({
      brand_id: zod
        .number()
        .describe(
          "Enterprise only. The id of the brand this ticket is associated with",
        ),
      collaborators: zod
        .array(zod.unknown())
        .describe(
          "POST requests only. Users to add as cc's when creating a ticket. See [Setting Collaborators](/documentation/ticketing/managing-tickets/creating-and-updating-tickets#setting-collaborators)",
        ),
      email_cc_ids: zod
        .array(zod.unknown())
        .describe(
          "The ids of agents or end users currently CC'ed on the ticket. See [CCs and followers resources](https://support.zendesk.com/hc/en-us/articles/360020585233) in the Support Help Center",
        ),
      follower_ids: zod
        .array(zod.unknown())
        .describe(
          "The ids of agents currently following the ticket. See [CCs and followers resources](https://support.zendesk.com/hc/en-us/articles/360020585233)",
        ),
      macro_ids: zod
        .array(zod.unknown())
        .describe(
          "POST requests only. List of macro IDs to be recorded in the ticket audit",
        ),
      raw_subject: zod
        .string()
        .describe(
          'The dynamic content placeholder, if present, or the "subject" value, if not. See [Dynamic Content Items](/api-reference/ticketing/ticket-management/dynamic_content/)\n',
        ),
      recipient: zod
        .string()
        .describe("The original recipient e-mail address of the ticket"),
      submitter_id: zod
        .number()
        .describe(
          "The user who submitted the ticket. The submitter always becomes the author of the first comment on the ticket",
        ),
      ticket_form_id: zod
        .number()
        .describe(
          "Enterprise only. The id of the ticket form to render for the ticket",
        ),
      via: viaObjectSchema,
      via_followup_source_id: zod
        .number()
        .describe(
          "POST requests only. The id of a closed ticket when creating a follow-up ticket. See [Creating a follow-up ticket](/documentation/ticketing/managing-tickets/creating-and-updating-tickets#creating-a-follow-up-ticket)",
        ),
    }),
  );

export const ticketCreateRequestSchema: zod.ZodSchema<TicketCreateRequest> =
  zod.object({ ticket: ticketCreateInputSchema });

export const ticketUpdateResponseSchema: zod.ZodSchema<TicketUpdateResponse> =
  zod.object({ audit: auditObjectSchema, ticket: ticketObjectSchema });

export const ticketsCreateRequestSchema: zod.ZodSchema<TicketsCreateRequest> =
  zod.object({ tickets: zod.array(ticketCreateInputSchema) });

export const viewCountObjectSchema: zod.ZodSchema<ViewCountObject> = zod.object(
  {
    active: zod
      .boolean()
      .describe(
        "Only active views if true, inactive views if false, all views if null.",
      ),
    fresh: zod
      .boolean()
      .describe(
        "false if the cached data is stale and the system is still loading and caching new data",
      ),
    pretty: zod
      .string()
      .describe("A pretty-printed text approximation of the view count"),
    url: zod.string().describe("The API url of the count"),
    value: zod
      .number()
      .nullable()
      .describe(
        "The cached number of tickets in the view. Can also be null if the system is loading and caching new data. Not to be confused with 0 tickets",
      ),
    view_id: zod.number().describe("The id of the view"),
  },
);

export const viewCountResponseSchema: zod.ZodSchema<ViewCountResponse> =
  zod.object({ view_count: viewCountObjectSchema });

export const viewCountsResponseSchema: zod.ZodSchema<ViewCountsResponse> =
  zod.object({ view_counts: zod.array(viewCountObjectSchema) });

export const viewExportResponseSchema: zod.ZodSchema<ViewExportResponse> =
  zod.object({
    export: zod.object({ status: zod.string(), view_id: zod.number() }),
  });

export const viewObjectSchema: zod.ZodSchema<ViewObject> = zod.object({
  active: zod.boolean().describe("Whether the view is active"),
  conditions: zod
    .object({})
    .passthrough()
    .describe(
      "Describes how the view is constructed. See [Conditions reference](/documentation/ticketing/reference-guides/conditions-reference)",
    ),
  created_at: zod.string().describe("The time the view was created"),
  default: zod.boolean().describe("If true, the view is a default view"),
  description: zod.string().describe("The description of the view"),
  execution: zod
    .object({})
    .passthrough()
    .describe(
      "Describes how the view should be executed. See [Execution](#execution)",
    ),
  id: zod.number().describe("Automatically assigned when created"),
  position: zod.number().describe("The position of the view"),
  restriction: zod
    .object({})
    .passthrough()
    .describe(
      "Who may access this account. Is null when everyone in the account can access it",
    ),
  title: zod.string().describe("The title of the view"),
  updated_at: zod.string().describe("The time the view was last updated"),
});

export const viewResponseSchema: zod.ZodSchema<ViewResponse> = zod.object({
  columns: zod.array(zod.object({}).passthrough()),
  groups: zod.array(zod.object({}).passthrough()),
  rows: zod.array(zod.object({}).passthrough()),
  view: viewObjectSchema,
});

export const viewsCountResponseSchema: zod.ZodSchema<ViewsCountResponse> =
  zod.object({
    count: zod.object({ refreshed_at: zod.string(), value: zod.number() }),
  });

export const viewsResponseSchema: zod.ZodSchema<ViewsResponse> = zod.object({
  count: zod.number(),
  next_page: zod.string().nullable(),
  previous_page: zod.string().nullable(),
  views: zod.array(viewObjectSchema),
});

export const workspaceInputSchema: zod.ZodSchema<WorkspaceInput> = zod.object({
  conditions: conditionsObjectSchema,
  description: zod
    .string()
    .describe("User-defined description of this workspace's purpose"),
  macros: zod.array(zod.number()),
  ticket_form_id: zod.number(),
  title: zod.string().describe("The title of the workspace"),
});

export const workspaceObjectSchema: zod.ZodSchema<WorkspaceObject> = zod.object(
  {
    activated: zod
      .boolean()
      .describe("If true, this workspace is available for use"),
    apps: zod
      .array(zod.object({}).passthrough())
      .describe("The apps associated to this workspace"),
    conditions: conditionsObjectSchema,
    created_at: zod.string().describe("The time the workspace was created"),
    description: zod
      .string()
      .describe("User-defined description of this workspace's purpose"),
    id: zod.number().describe("Automatically assigned upon creation"),
    macro_ids: zod
      .array(zod.number())
      .describe("The ids of the macros associated to this workspace"),
    macros: zod
      .array(zod.number())
      .describe("The ids of the macros associated to this workspace"),
    position: zod
      .number()
      .describe("Ordering of the workspace relative to other workspaces"),
    prefer_workspace_app_order: zod
      .boolean()
      .describe(
        "If true, the order of apps within the workspace will be preserved",
      ),
    selected_macros: zod
      .array(macroObjectSchema)
      .describe(
        "An array of the macro objects that will be used in this workspace. See [Macros](/api-reference/ticketing/business-rules/macros/)",
      ),
    ticket_form_id: zod
      .number()
      .describe("The id of the ticket web form associated to this workspace"),
    title: zod.string().describe("The title of the workspace"),
    updated_at: zod
      .string()
      .describe("The time of the last update of the workspace"),
    url: zod.string().describe("The URL for this resource"),
  },
);

export const workspaceResponseSchema: zod.ZodSchema<WorkspaceResponse> =
  zod.intersection(
    zod.object({ workspaces: zod.array(workspaceObjectSchema) }),
    offsetPaginationObjectSchema,
  );

export const getApiV2ByTargetTypeByTargetIdRelationshipFieldsByFieldIdBySourceTypeResponseSchema: zod.ZodSchema<ReverseLookupResponse> =
  reverseLookupResponseSchema;

export const getApiV2AccountSettingsResponseSchema: zod.ZodSchema<AccountSettingsResponse> =
  accountSettingsResponseSchema;

export const getApiV2AccountsAvailableResponseSchema: zod.ZodSchema<{
  success: boolean;
}> = zod.object({ success: zod.boolean() });

export const getApiV2ActivitiesResponseSchema: zod.ZodSchema<ActivitiesResponse> =
  activitiesResponseSchema;

export const getApiV2ActivitiesByActivityIdResponseSchema: zod.ZodSchema<ActivityResponse> =
  activityResponseSchema;

export const getApiV2ActivitiesCountResponseSchema: zod.ZodSchema<ActivitiesCountResponse> =
  activitiesCountResponseSchema;

export const getApiV2AttachmentsByAttachmentIdResponseSchema: zod.ZodSchema<AttachmentResponse> =
  attachmentResponseSchema;

export const getApiV2AuditLogsResponseSchema: zod.ZodSchema<AuditLogsResponse> =
  auditLogsResponseSchema;

export const getApiV2AuditLogsByAuditLogIdResponseSchema: zod.ZodSchema<AuditLogResponse> =
  auditLogResponseSchema;

export const getApiV2AutocompleteTagsResponseSchema: zod.ZodSchema<TagsByObjectIdResponse> =
  tagsByObjectIdResponseSchema;

export const getApiV2AutomationsResponseSchema: zod.ZodSchema<AutomationsResponse> =
  automationsResponseSchema;

export const getApiV2AutomationsByAutomationIdResponseSchema: zod.ZodSchema<AutomationResponse> =
  automationResponseSchema;

export const getApiV2AutomationsActiveResponseSchema: zod.ZodSchema<AutomationsResponse> =
  automationsResponseSchema;

export const getApiV2AutomationsSearchResponseSchema: zod.ZodSchema<AutomationsResponse> =
  automationsResponseSchema;

export const getApiV2BookmarksResponseSchema: zod.ZodSchema<BookmarksResponse> =
  bookmarksResponseSchema;

export const getApiV2BrandsResponseSchema: zod.ZodSchema<BrandsResponse> =
  brandsResponseSchema;

export const getApiV2BrandsByBrandIdResponseSchema: zod.ZodSchema<BrandResponse> =
  brandResponseSchema;

export const getApiV2BrandsByBrandIdCheckHostMappingResponseSchema: zod.ZodSchema<HostMappingObject> =
  hostMappingObjectSchema;

export const getApiV2BrandsCheckHostMappingResponseSchema: zod.ZodSchema<HostMappingObject> =
  hostMappingObjectSchema;

export const getApiV2ChannelsTwitterMonitoredTwitterHandlesResponseSchema: zod.ZodSchema<TwitterChannelsResponse> =
  twitterChannelsResponseSchema;

export const getApiV2ChannelsTwitterMonitoredTwitterHandlesByMonitoredTwitterHandleIdResponseSchema: zod.ZodSchema<TwitterChannelResponse> =
  twitterChannelResponseSchema;

export const getApiV2ChannelsTwitterTicketsByCommentIdStatusesResponseSchema: zod.ZodSchema<TwitterChannelTwicketStatusResponse> =
  twitterChannelTwicketStatusResponseSchema;

export const getApiV2CustomObjectsResponseSchema: zod.ZodSchema<CustomObjectsResponse> =
  customObjectsResponseSchema;

export const getApiV2CustomObjectsByCustomObjectKeyResponseSchema: zod.ZodSchema<CustomObjectResponse> =
  customObjectResponseSchema;

export const getApiV2CustomObjectsByCustomObjectKeyFieldsResponseSchema: zod.ZodSchema<CustomObjectFieldsResponse> =
  customObjectFieldsResponseSchema;

export const getApiV2CustomObjectsByCustomObjectKeyFieldsByCustomObjectFieldKeyOrIdResponseSchema: zod.ZodSchema<CustomObjectFieldResponse> =
  customObjectFieldResponseSchema;

export const getApiV2CustomObjectsByCustomObjectKeyLimitsFieldLimitResponseSchema: zod.ZodSchema<CustomObjectLimitsResponse> =
  customObjectLimitsResponseSchema;

export const getApiV2CustomObjectsByCustomObjectKeyRecordsResponseSchema: zod.ZodSchema<CustomObjectRecordsResponse> =
  customObjectRecordsResponseSchema;

export const getApiV2CustomObjectsByCustomObjectKeyRecordsByCustomObjectRecordIdResponseSchema: zod.ZodSchema<CustomObjectRecordResponse> =
  customObjectRecordResponseSchema;

export const getApiV2CustomObjectsByCustomObjectKeyRecordsAutocompleteResponseSchema: zod.ZodSchema<CustomObjectRecordsResponse> =
  customObjectRecordsResponseSchema;

export const getApiV2CustomObjectsByCustomObjectKeyRecordsCountResponseSchema: zod.ZodSchema<{
  count: Record<string, unknown>;
}> = zod.object({ count: zod.object({}).passthrough() });

export const getApiV2CustomObjectsByCustomObjectKeyRecordsSearchResponseSchema: zod.ZodSchema<CustomObjectRecordsResponse> =
  customObjectRecordsResponseSchema;

export const getApiV2CustomObjectsLimitsObjectLimitResponseSchema: zod.ZodSchema<CustomObjectLimitsResponse> =
  customObjectLimitsResponseSchema;

export const getApiV2CustomObjectsLimitsRecordLimitResponseSchema: zod.ZodSchema<CustomObjectLimitsResponse> =
  customObjectLimitsResponseSchema;

export const getApiV2CustomRolesResponseSchema: zod.ZodSchema<CustomRolesResponse> =
  customRolesResponseSchema;

export const getApiV2CustomRolesByCustomRoleIdResponseSchema: zod.ZodSchema<CustomRoleResponse> =
  customRoleResponseSchema;

export const getApiV2CustomStatusesResponseSchema: zod.ZodSchema<CustomStatusesResponse> =
  customStatusesResponseSchema;

export const getApiV2CustomStatusesByCustomStatusIdResponseSchema: zod.ZodSchema<CustomStatusResponse> =
  customStatusResponseSchema;

export const getApiV2DeletedTicketsResponseSchema: zod.ZodSchema<ListDeletedTicketsResponse> =
  listDeletedTicketsResponseSchema;

export const getApiV2DeletedUsersResponseSchema: zod.ZodSchema<DeletedUsersResponse> =
  deletedUsersResponseSchema;

export const getApiV2DeletedUsersByDeletedUserIdResponseSchema: zod.ZodSchema<DeletedUserResponse> =
  deletedUserResponseSchema;

export const getApiV2DeletedUsersCountResponseSchema: zod.ZodSchema<CountResponse> =
  countResponseSchema;

export const getApiV2DynamicContentItemsResponseSchema: zod.ZodSchema<DynamicContentsResponse> =
  dynamicContentsResponseSchema;

export const getApiV2DynamicContentItemsByDynamicContentItemIdResponseSchema: zod.ZodSchema<DynamicContentResponse> =
  dynamicContentResponseSchema;

export const getApiV2DynamicContentItemsByDynamicContentItemIdVariantsResponseSchema: zod.ZodSchema<DynamicContentVariantsResponse> =
  dynamicContentVariantsResponseSchema;

export const getApiV2DynamicContentItemsByDynamicContentItemIdVariantsByDynammicContentVariantIdResponseSchema: zod.ZodSchema<DynamicContentVariantResponse> =
  dynamicContentVariantResponseSchema;

export const getApiV2DynamicContentItemsShowManyResponseSchema: zod.ZodSchema<DynamicContentsResponse> =
  dynamicContentsResponseSchema;

export const getApiV2GroupMembershipsResponseSchema: zod.ZodSchema<GroupMembershipsResponse> =
  groupMembershipsResponseSchema;

export const getApiV2GroupMembershipsByGroupMembershipIdResponseSchema: zod.ZodSchema<GroupMembershipResponse> =
  groupMembershipResponseSchema;

export const getApiV2GroupMembershipsAssignableResponseSchema: zod.ZodSchema<GroupMembershipsResponse> =
  groupMembershipsResponseSchema;

export const getApiV2GroupSlasPoliciesResponseSchema: zod.ZodSchema<GroupSLAPoliciesResponse> =
  groupSlaPoliciesResponseSchema;

export const getApiV2GroupSlasPoliciesByGroupSlaPolicyIdResponseSchema: zod.ZodSchema<GroupSLAPolicyResponse> =
  groupSlaPolicyResponseSchema;

export const getApiV2GroupSlasPoliciesDefinitionsResponseSchema: zod.ZodSchema<GroupSLAPolicyFilterDefinitionResponse> =
  groupSlaPolicyFilterDefinitionResponseSchema;

export const getApiV2GroupsResponseSchema: zod.ZodSchema<GroupsResponse> =
  groupsResponseSchema;

export const getApiV2GroupsByGroupIdResponseSchema: zod.ZodSchema<GroupResponse> =
  groupResponseSchema;

export const getApiV2GroupsByGroupIdMembershipsResponseSchema: zod.ZodSchema<GroupMembershipsResponse> =
  groupMembershipsResponseSchema;

export const getApiV2GroupsAssignableResponseSchema: zod.ZodSchema<GroupsResponse> =
  groupsResponseSchema;

export const getApiV2GroupsCountResponseSchema: zod.ZodSchema<GroupsCountObject> =
  groupsCountObjectSchema;

export const getApiV2IncrementalByIncrementalResourceSampleResponseSchema: zod.ZodSchema<TimeBasedExportIncrementalTicketsResponse> =
  timeBasedExportIncrementalTicketsResponseSchema;

export const getApiV2IncrementalOrganizationsResponseSchema: zod.ZodSchema<ExportIncrementalOrganizationsResponse> =
  exportIncrementalOrganizationsResponseSchema;

export const getApiV2IncrementalRoutingAttributeValuesResponseSchema: zod.ZodSchema<IncrementalSkillBasedRouting> =
  incrementalSkillBasedRoutingSchema;

export const getApiV2IncrementalRoutingAttributesResponseSchema: zod.ZodSchema<IncrementalSkillBasedRouting> =
  incrementalSkillBasedRoutingSchema;

export const getApiV2IncrementalRoutingInstanceValuesResponseSchema: zod.ZodSchema<IncrementalSkillBasedRouting> =
  incrementalSkillBasedRoutingSchema;

export const getApiV2IncrementalTicketEventsResponseSchema: zod.ZodSchema<ExportIncrementalTicketEventsResponse> =
  exportIncrementalTicketEventsResponseSchema;

export const getApiV2IncrementalTicketMetricEventsResponseSchema: zod.ZodSchema<TicketMetricEventsResponse> =
  ticketMetricEventsResponseSchema;

export const getApiV2IncrementalTicketsResponseSchema: zod.ZodSchema<TimeBasedExportIncrementalTicketsResponse> =
  timeBasedExportIncrementalTicketsResponseSchema;

export const getApiV2IncrementalTicketsCursorResponseSchema: zod.ZodSchema<CursorBasedExportIncrementalTicketsResponse> =
  cursorBasedExportIncrementalTicketsResponseSchema;

export const getApiV2IncrementalUsersResponseSchema: zod.ZodSchema<TimeBasedExportIncrementalUsersResponse> =
  timeBasedExportIncrementalUsersResponseSchema;

export const getApiV2IncrementalUsersCursorResponseSchema: zod.ZodSchema<CursorBasedExportIncrementalUsersResponse> =
  cursorBasedExportIncrementalUsersResponseSchema;

export const getApiV2JobStatusesResponseSchema: zod.ZodSchema<JobStatusesResponse> =
  jobStatusesResponseSchema;

export const getApiV2JobStatusesByJobStatusIdResponseSchema: zod.ZodSchema<JobStatusResponse> =
  jobStatusResponseSchema;

export const getApiV2JobStatusesShowManyResponseSchema: zod.ZodSchema<JobStatusesResponse> =
  jobStatusesResponseSchema;

export const getApiV2LocalesResponseSchema: zod.ZodSchema<LocalesResponse> =
  localesResponseSchema;

export const getApiV2LocalesByLocaleIdResponseSchema: zod.ZodSchema<LocaleResponse> =
  localeResponseSchema;

export const getApiV2LocalesAgentResponseSchema: zod.ZodSchema<LocalesResponse> =
  localesResponseSchema;

export const getApiV2LocalesCurrentResponseSchema: zod.ZodSchema<LocaleResponse> =
  localeResponseSchema;

export const getApiV2LocalesDetectBestLocaleResponseSchema: zod.ZodSchema<LocaleResponse> =
  localeResponseSchema;

export const getApiV2LocalesPublicResponseSchema: zod.ZodSchema<LocalesResponse> =
  localesResponseSchema;

export const getApiV2MacrosResponseSchema: zod.ZodSchema<MacrosResponse> =
  macrosResponseSchema;

export const getApiV2MacrosByMacroIdResponseSchema: zod.ZodSchema<MacroResponse> =
  macroResponseSchema;

export const getApiV2MacrosByMacroIdApplyResponseSchema: zod.ZodSchema<MacroApplyTicketResponse> =
  macroApplyTicketResponseSchema;

export const getApiV2MacrosByMacroIdAttachmentsResponseSchema: zod.ZodSchema<MacroAttachmentsResponse> =
  macroAttachmentsResponseSchema;

export const getApiV2MacrosActionsResponseSchema: zod.ZodSchema<{
  actions: Record<string, unknown>[];
}> = zod.object({ actions: zod.array(zod.object({}).passthrough()) });

export const getApiV2MacrosActiveResponseSchema: zod.ZodSchema<MacrosResponse> =
  macrosResponseSchema;

export const getApiV2MacrosAttachmentsByAttachmentIdResponseSchema: zod.ZodSchema<MacroAttachmentResponse> =
  macroAttachmentResponseSchema;

export const getApiV2MacrosCategoriesResponseSchema: zod.ZodSchema<MacroCategoriesResponse> =
  macroCategoriesResponseSchema;

export const getApiV2MacrosDefinitionsResponseSchema: zod.ZodSchema<{
  definitions: {
    actions: Record<string, unknown>[];
  };
}> = zod.object({
  definitions: zod.object({ actions: zod.array(zod.object({}).passthrough()) }),
});

export const getApiV2MacrosNewResponseSchema: zod.ZodSchema<MacroResponse> =
  macroResponseSchema;

export const getApiV2MacrosSearchResponseSchema: zod.ZodSchema<MacrosResponse> =
  macrosResponseSchema;

export const getApiV2OrganizationFieldsResponseSchema: zod.ZodSchema<OrganizationFieldsResponse> =
  organizationFieldsResponseSchema;

export const getApiV2OrganizationFieldsByOrganizationFieldIdResponseSchema: zod.ZodSchema<OrganizationFieldResponse> =
  organizationFieldResponseSchema;

export const getApiV2OrganizationMembershipsResponseSchema: zod.ZodSchema<OrganizationMembershipsResponse> =
  organizationMembershipsResponseSchema;

export const getApiV2OrganizationMembershipsByOrganizationMembershipIdResponseSchema: zod.ZodSchema<OrganizationMembershipResponse> =
  organizationMembershipResponseSchema;

export const getApiV2OrganizationSubscriptionsResponseSchema: zod.ZodSchema<OrganizationSubscriptionsResponse> =
  organizationSubscriptionsResponseSchema;

export const getApiV2OrganizationSubscriptionsByOrganizationSubscriptionIdResponseSchema: zod.ZodSchema<OrganizationSubscriptionResponse> =
  organizationSubscriptionResponseSchema;

export const getApiV2OrganizationsResponseSchema: zod.ZodSchema<OrganizationsResponse> =
  organizationsResponseSchema;

export const getApiV2OrganizationsByOrganizationIdResponseSchema: zod.ZodSchema<OrganizationResponse> =
  organizationResponseSchema;

export const getApiV2OrganizationsByOrganizationIdRelatedResponseSchema: zod.ZodSchema<OrganizationsRelatedResponse> =
  organizationsRelatedResponseSchema;

export const getApiV2OrganizationsAutocompleteResponseSchema: zod.ZodSchema<OrganizationsResponse> =
  organizationsResponseSchema;

export const getApiV2OrganizationsCountResponseSchema: zod.ZodSchema<CountOrganizationResponse> =
  countOrganizationResponseSchema;

export const getApiV2OrganizationsSearchResponseSchema: zod.ZodSchema<OrganizationsResponse> =
  organizationsResponseSchema;

export const getApiV2OrganizationsShowManyResponseSchema: zod.ZodSchema<OrganizationsResponse> =
  organizationsResponseSchema;

export const getApiV2ProblemsResponseSchema: zod.ZodSchema<ListTicketProblemsResponse> =
  listTicketProblemsResponseSchema;

export const getApiV2RecipientAddressesResponseSchema: zod.ZodSchema<SupportAddressesResponse> =
  supportAddressesResponseSchema;

export const getApiV2RecipientAddressesBySupportAddressIdResponseSchema: zod.ZodSchema<SupportAddressResponse> =
  supportAddressResponseSchema;

export const getApiV2RelationshipsDefinitionsByTargetTypeResponseSchema: zod.ZodSchema<RelationshipFilterDefinitionResponse> =
  relationshipFilterDefinitionResponseSchema;

export const getApiV2RequestsResponseSchema: zod.ZodSchema<RequestsResponse> =
  requestsResponseSchema;

export const getApiV2RequestsByRequestIdResponseSchema: zod.ZodSchema<RequestResponse> =
  requestResponseSchema;

export const getApiV2RequestsByRequestIdCommentsResponseSchema: zod.ZodSchema<TicketCommentsResponse> =
  ticketCommentsResponseSchema;

export const getApiV2RequestsByRequestIdCommentsByTicketCommentIdResponseSchema: zod.ZodSchema<TicketCommentResponse> =
  ticketCommentResponseSchema;

export const getApiV2RequestsSearchResponseSchema: zod.ZodSchema<RequestsResponse> =
  requestsResponseSchema;

export const getApiV2ResourceCollectionsResponseSchema: zod.ZodSchema<ResourceCollectionsResponse> =
  resourceCollectionsResponseSchema;

export const getApiV2ResourceCollectionsByResourceCollectionIdResponseSchema: zod.ZodSchema<ResourceCollectionResponse> =
  resourceCollectionResponseSchema;

export const getApiV2RoutingAgentsByUserIdInstanceValuesResponseSchema: zod.ZodSchema<SkillBasedRoutingAttributeValuesResponse> =
  skillBasedRoutingAttributeValuesResponseSchema;

export const getApiV2RoutingAttributesResponseSchema: zod.ZodSchema<SkillBasedRoutingAttributesResponse> =
  skillBasedRoutingAttributesResponseSchema;

export const getApiV2RoutingAttributesByAttributeIdResponseSchema: zod.ZodSchema<SkillBasedRoutingAttributeResponse> =
  skillBasedRoutingAttributeResponseSchema;

export const getApiV2RoutingAttributesByAttributeIdValuesResponseSchema: zod.ZodSchema<SkillBasedRoutingAttributeValuesResponse> =
  skillBasedRoutingAttributeValuesResponseSchema;

export const getApiV2RoutingAttributesByAttributeIdValuesByAttributeValueIdResponseSchema: zod.ZodSchema<SkillBasedRoutingAttributeValueResponse> =
  skillBasedRoutingAttributeValueResponseSchema;

export const getApiV2RoutingAttributesDefinitionsResponseSchema: zod.ZodSchema<SkillBasedRoutingAttributeDefinitions> =
  skillBasedRoutingAttributeDefinitionsSchema;

export const getApiV2RoutingRequirementsFulfilledResponseSchema: zod.ZodSchema<SkillBasedRoutingTicketFulfilledResponse> =
  skillBasedRoutingTicketFulfilledResponseSchema;

export const getApiV2RoutingTicketsByTicketIdInstanceValuesResponseSchema: zod.ZodSchema<SkillBasedRoutingAttributeValuesResponse> =
  skillBasedRoutingAttributeValuesResponseSchema;

export const getApiV2SatisfactionRatingsResponseSchema: zod.ZodSchema<SatisfactionRatingsResponse> =
  satisfactionRatingsResponseSchema;

export const getApiV2SatisfactionRatingsBySatisfactionRatingIdResponseSchema: zod.ZodSchema<SatisfactionRatingResponse> =
  satisfactionRatingResponseSchema;

export const getApiV2SatisfactionRatingsCountResponseSchema: zod.ZodSchema<SatisfactionRatingsCountResponse> =
  satisfactionRatingsCountResponseSchema;

export const getApiV2SatisfactionReasonsResponseSchema: zod.ZodSchema<SatisfactionReasonsResponse> =
  satisfactionReasonsResponseSchema;

export const getApiV2SatisfactionReasonsBySatisfactionReasonIdResponseSchema: zod.ZodSchema<SatisfactionReasonResponse> =
  satisfactionReasonResponseSchema;

export const getApiV2SearchResponseSchema: zod.ZodSchema<SearchResponse> =
  searchResponseSchema;

export const getApiV2SearchCountResponseSchema: zod.ZodSchema<SearchCountResponse> =
  searchCountResponseSchema;

export const getApiV2SearchExportResponseSchema: zod.ZodSchema<SearchExportResponse> =
  searchExportResponseSchema;

export const getApiV2SessionsResponseSchema: zod.ZodSchema<SessionsResponse> =
  sessionsResponseSchema;

export const getApiV2SharingAgreementsResponseSchema: zod.ZodSchema<SharingAgreementsResponse> =
  sharingAgreementsResponseSchema;

export const getApiV2SharingAgreementsBySharingAgreementIdResponseSchema: zod.ZodSchema<SharingAgreementResponse> =
  sharingAgreementResponseSchema;

export const getApiV2SlasPoliciesResponseSchema: zod.ZodSchema<SLAPoliciesResponse> =
  slaPoliciesResponseSchema;

export const getApiV2SlasPoliciesBySlaPolicyIdResponseSchema: zod.ZodSchema<SLAPolicyResponse> =
  slaPolicyResponseSchema;

export const getApiV2SlasPoliciesDefinitionsResponseSchema: zod.ZodSchema<SLAPolicyFilterDefinitionResponse> =
  slaPolicyFilterDefinitionResponseSchema;

export const getApiV2SuspendedTicketsResponseSchema: zod.ZodSchema<SuspendedTicketsResponse> =
  suspendedTicketsResponseSchema;

export const getApiV2SuspendedTicketsByIdResponseSchema: zod.ZodSchema<SuspendedTicketsResponse> =
  suspendedTicketsResponseSchema;

export const getApiV2TagsResponseSchema: zod.ZodSchema<TagsResponse> =
  tagsResponseSchema;

export const getApiV2TagsCountResponseSchema: zod.ZodSchema<TagCountResponse> =
  tagCountResponseSchema;

export const getApiV2TargetFailuresResponseSchema: zod.ZodSchema<TargetFailuresResponse> =
  targetFailuresResponseSchema;

export const getApiV2TargetFailuresByTargetFailureIdResponseSchema: zod.ZodSchema<TargetFailureResponse> =
  targetFailureResponseSchema;

export const getApiV2TargetsResponseSchema: zod.ZodSchema<TargetsResponse> =
  targetsResponseSchema;

export const getApiV2TargetsByTargetIdResponseSchema: zod.ZodSchema<TargetResponse> =
  targetResponseSchema;

export const getApiV2TicketAuditsResponseSchema: zod.ZodSchema<TicketAuditsResponse> =
  ticketAuditsResponseSchema;

export const getApiV2TicketFieldsResponseSchema: zod.ZodSchema<TicketFieldsResponse> =
  ticketFieldsResponseSchema;

export const getApiV2TicketFieldsByTicketFieldIdResponseSchema: zod.ZodSchema<TicketFieldResponse> =
  ticketFieldResponseSchema;

export const getApiV2TicketFieldsByTicketFieldIdOptionsResponseSchema: zod.ZodSchema<CustomFieldOptionsResponse> =
  customFieldOptionsResponseSchema;

export const getApiV2TicketFieldsByTicketFieldIdOptionsByTicketFieldOptionIdResponseSchema: zod.ZodSchema<CustomFieldOptionResponse> =
  customFieldOptionResponseSchema;

export const getApiV2TicketFieldsCountResponseSchema: zod.ZodSchema<TicketFieldCountResponse> =
  ticketFieldCountResponseSchema;

export const getApiV2TicketFormsResponseSchema: zod.ZodSchema<TicketFormsResponse> =
  ticketFormsResponseSchema;

export const getApiV2TicketFormsByTicketFormIdResponseSchema: zod.ZodSchema<TicketFormResponse> =
  ticketFormResponseSchema;

export const getApiV2TicketFormsShowManyResponseSchema: zod.ZodSchema<TicketFormsResponse> =
  ticketFormsResponseSchema;

export const getApiV2TicketMetricsResponseSchema: zod.ZodSchema<TicketMetricsResponse> =
  ticketMetricsResponseSchema;

export const getApiV2TicketMetricsByTicketMetricIdResponseSchema: zod.ZodSchema<TicketMetricsByTicketMetricIdResponse> =
  ticketMetricsByTicketMetricIdResponseSchema;

export const getApiV2TicketsResponseSchema: zod.ZodSchema<TicketsResponse> =
  ticketsResponseSchema;

export const getApiV2TicketsByTicketIdResponseSchema: zod.ZodSchema<TicketResponse> =
  ticketResponseSchema;

export const getApiV2TicketsByTicketIdAuditsResponseSchema: zod.ZodSchema<TicketAuditsResponseNoneCursor> =
  ticketAuditsResponseNoneCursorSchema;

export const getApiV2TicketsByTicketIdAuditsByTicketAuditIdResponseSchema: zod.ZodSchema<TicketAuditResponse> =
  ticketAuditResponseSchema;

export const getApiV2TicketsByTicketIdAuditsCountResponseSchema: zod.ZodSchema<TicketAuditsCountResponse> =
  ticketAuditsCountResponseSchema;

export const getApiV2TicketsByTicketIdCollaboratorsResponseSchema: zod.ZodSchema<ListTicketCollaboratorsResponse> =
  listTicketCollaboratorsResponseSchema;

export const getApiV2TicketsByTicketIdCommentsResponseSchema: zod.ZodSchema<TicketCommentsResponse> =
  ticketCommentsResponseSchema;

export const getApiV2TicketsByTicketIdCommentsCountResponseSchema: zod.ZodSchema<TicketCommentsCountResponse> =
  ticketCommentsCountResponseSchema;

export const getApiV2TicketsByTicketIdEmailCcsResponseSchema: zod.ZodSchema<ListTicketEmailCCsResponse> =
  listTicketEmailCCsResponseSchema;

export const getApiV2TicketsByTicketIdFollowersResponseSchema: zod.ZodSchema<ListTicketFollowersResponse> =
  listTicketFollowersResponseSchema;

export const getApiV2TicketsByTicketIdIncidentsResponseSchema: zod.ZodSchema<ListTicketIncidentsResponse> =
  listTicketIncidentsResponseSchema;

export const getApiV2TicketsByTicketIdMacrosByMacroIdApplyResponseSchema: zod.ZodSchema<MacroApplyTicketResponse> =
  macroApplyTicketResponseSchema;

export const getApiV2TicketsByTicketIdRelatedResponseSchema: zod.ZodSchema<TicketRelatedInformation> =
  ticketRelatedInformationSchema;

export const getApiV2TicketsByTicketIdTagsResponseSchema: zod.ZodSchema<TagsByObjectIdResponse> =
  tagsByObjectIdResponseSchema;

export const getApiV2TicketsCountResponseSchema: zod.ZodSchema<{
  count: {
    refreshed_at: string;
    value: number;
  };
}> = zod.object({
  count: zod.object({ refreshed_at: zod.string(), value: zod.number() }),
});

export const getApiV2TicketsShowManyResponseSchema: zod.ZodSchema<TicketsResponse> =
  ticketsResponseSchema;

export const getApiV2TriggerCategoriesResponseSchema: zod.ZodSchema<
  TriggerCategoriesResponse & Pagination
> = zod.intersection(triggerCategoriesResponseSchema, paginationSchema);

export const getApiV2TriggerCategoriesByTriggerCategoryIdResponseSchema: zod.ZodSchema<TriggerCategoryResponse> =
  triggerCategoryResponseSchema;

export const getApiV2TriggersResponseSchema: zod.ZodSchema<TriggersResponse> =
  triggersResponseSchema;

export const getApiV2TriggersByTriggerIdResponseSchema: zod.ZodSchema<TriggerResponse> =
  triggerResponseSchema;

export const getApiV2TriggersByTriggerIdRevisionsResponseSchema: zod.ZodSchema<TriggerRevisionsResponse> =
  triggerRevisionsResponseSchema;

export const getApiV2TriggersByTriggerIdRevisionsByTriggerRevisionIdResponseSchema: zod.ZodSchema<TriggerRevisionResponse> =
  triggerRevisionResponseSchema;

export const getApiV2TriggersActiveResponseSchema: zod.ZodSchema<TriggersResponse> =
  triggersResponseSchema;

export const getApiV2TriggersDefinitionsResponseSchema: zod.ZodSchema<TriggerDefinitionResponse> =
  triggerDefinitionResponseSchema;

export const getApiV2TriggersSearchResponseSchema: zod.ZodSchema<TriggersResponse> =
  triggersResponseSchema;

export const getApiV2UserFieldsResponseSchema: zod.ZodSchema<UserFieldsResponse> =
  userFieldsResponseSchema;

export const getApiV2UserFieldsByUserFieldIdResponseSchema: zod.ZodSchema<UserFieldResponse> =
  userFieldResponseSchema;

export const getApiV2UserFieldsByUserFieldIdOptionsResponseSchema: zod.ZodSchema<CustomFieldOptionsResponse> =
  customFieldOptionsResponseSchema;

export const getApiV2UserFieldsByUserFieldIdOptionsByUserFieldOptionIdResponseSchema: zod.ZodSchema<CustomFieldOptionResponse> =
  customFieldOptionResponseSchema;

export const getApiV2UsersResponseSchema: zod.ZodSchema<UsersResponse> =
  usersResponseSchema;

export const getApiV2UsersByUserIdResponseSchema: zod.ZodSchema<UserResponse> =
  userResponseSchema;

export const getApiV2UsersByUserIdComplianceDeletionStatusesResponseSchema: zod.ZodSchema<ComplianceDeletionStatusesResponse> =
  complianceDeletionStatusesResponseSchema;

export const getApiV2UsersByUserIdGroupMembershipsResponseSchema: zod.ZodSchema<GroupMembershipsResponse> =
  groupMembershipsResponseSchema;

export const getApiV2UsersByUserIdIdentitiesResponseSchema: zod.ZodSchema<UserIdentitiesResponse> =
  userIdentitiesResponseSchema;

export const getApiV2UsersByUserIdIdentitiesByUserIdentityIdResponseSchema: zod.ZodSchema<UserIdentityResponse> =
  userIdentityResponseSchema;

export const getApiV2UsersByUserIdPasswordRequirementsResponseSchema: zod.ZodSchema<UserPasswordRequirementsResponse> =
  userPasswordRequirementsResponseSchema;

export const getApiV2UsersByUserIdRelatedResponseSchema: zod.ZodSchema<UserRelatedResponse> =
  userRelatedResponseSchema;

export const getApiV2UsersByUserIdSessionsBySessionIdResponseSchema: zod.ZodSchema<SessionResponse> =
  sessionResponseSchema;

export const getApiV2UsersByUserIdSkipsResponseSchema: zod.ZodSchema<TicketSkipsResponse> =
  ticketSkipsResponseSchema;

export const getApiV2UsersAutocompleteResponseSchema: zod.ZodSchema<UsersResponse> =
  usersResponseSchema;

export const getApiV2UsersCountResponseSchema: zod.ZodSchema<CountResponse> =
  countResponseSchema;

export const getApiV2UsersMeResponseSchema: zod.ZodSchema<CurrentUserResponse> =
  currentUserResponseSchema;

export const getApiV2UsersMeSessionResponseSchema: zod.ZodSchema<SessionResponse> =
  sessionResponseSchema;

export const getApiV2UsersMeSessionRenewResponseSchema: zod.ZodSchema<RenewSessionResponse> =
  renewSessionResponseSchema;

export const getApiV2UsersSearchResponseSchema: zod.ZodSchema<UsersResponse> =
  usersResponseSchema;

export const getApiV2UsersShowManyResponseSchema: zod.ZodSchema<UsersResponse> =
  usersResponseSchema;

export const getApiV2ViewsResponseSchema: zod.ZodSchema<ViewsResponse> =
  viewsResponseSchema;

export const getApiV2ViewsByViewIdResponseSchema: zod.ZodSchema<ViewResponse> =
  viewResponseSchema;

export const getApiV2ViewsByViewIdCountResponseSchema: zod.ZodSchema<ViewCountResponse> =
  viewCountResponseSchema;

export const getApiV2ViewsByViewIdExecuteResponseSchema: zod.ZodSchema<ViewResponse> =
  viewResponseSchema;

export const getApiV2ViewsByViewIdExportResponseSchema: zod.ZodSchema<ViewExportResponse> =
  viewExportResponseSchema;

export const getApiV2ViewsByViewIdTicketsResponseSchema: zod.ZodSchema<TicketsResponse> =
  ticketsResponseSchema;

export const getApiV2ViewsActiveResponseSchema: zod.ZodSchema<ViewsResponse> =
  viewsResponseSchema;

export const getApiV2ViewsCompactResponseSchema: zod.ZodSchema<ViewsResponse> =
  viewsResponseSchema;

export const getApiV2ViewsCountResponseSchema: zod.ZodSchema<ViewsCountResponse> =
  viewsCountResponseSchema;

export const getApiV2ViewsCountManyResponseSchema: zod.ZodSchema<ViewCountsResponse> =
  viewCountsResponseSchema;

export const getApiV2ViewsSearchResponseSchema: zod.ZodSchema<ViewsResponse> =
  viewsResponseSchema;

export const getApiV2ViewsShowManyResponseSchema: zod.ZodSchema<ViewsResponse> =
  viewsResponseSchema;

export const getApiV2WorkspacesResponseSchema: zod.ZodSchema<WorkspaceResponse> =
  workspaceResponseSchema;

export const getApiV2WorkspacesByWorkspaceIdResponseSchema: zod.ZodSchema<{
  workspace: WorkspaceObject;
}> = zod.object({ workspace: workspaceObjectSchema });

export const postApiV2AnyChannelChannelbackReportErrorResponseSchema: zod.ZodSchema<string> =
  zod.string().describe("Empty response");

export const postApiV2AnyChannelPushResponseSchema: zod.ZodSchema<ChannelFrameworkPushResultsResponse> =
  channelFrameworkPushResultsResponseSchema;

export const postApiV2AnyChannelValidateTokenResponseSchema: zod.ZodSchema<string> =
  zod.string().describe("Empty response");

export const postApiV2BookmarksResponseSchema: zod.ZodSchema<BookmarkResponse> =
  bookmarkResponseSchema;

export const postApiV2ChannelsVoiceAgentsByAgentIdTicketsByTicketIdDisplayResponseSchema: zod.ZodSchema<string> =
  zod.string().describe("empty");

export const postApiV2ChannelsVoiceAgentsByAgentIdUsersByUserIdDisplayResponseSchema: zod.ZodSchema<string> =
  zod.string().describe("empty");

export const postApiV2CustomRolesResponseSchema: zod.ZodSchema<CustomRoleResponse> =
  customRoleResponseSchema;

export const postApiV2GroupMembershipsCreateManyResponseSchema: zod.ZodSchema<JobStatusResponse> =
  jobStatusResponseSchema;

export const postApiV2ImportsTicketsCreateManyResponseSchema: zod.ZodSchema<JobStatusResponse> =
  jobStatusResponseSchema;

export const postApiV2MacrosResponseSchema: zod.ZodSchema<{
  macro: MacroObject;
}> = zod.object({ macro: macroObjectSchema });

export const postApiV2OrganizationMembershipsCreateManyResponseSchema: zod.ZodSchema<JobStatusResponse> =
  jobStatusResponseSchema;

export const postApiV2OrganizationSubscriptionsResponseSchema: zod.ZodSchema<OrganizationSubscriptionResponse> =
  organizationSubscriptionResponseSchema;

export const postApiV2OrganizationsCreateManyResponseSchema: zod.ZodSchema<JobStatusResponse> =
  jobStatusResponseSchema;

export const postApiV2OrganizationsCreateOrUpdateResponseSchema: zod.ZodSchema<OrganizationResponse> =
  organizationResponseSchema;

export const postApiV2ProblemsAutocompleteResponseSchema: zod.ZodSchema<ListTicketProblemsResponse> =
  listTicketProblemsResponseSchema;

export const postApiV2PushNotificationDevicesDestroyManyResponseSchema: zod.ZodSchema<string> =
  zod.string().describe("empty");

export const postApiV2ResourceCollectionsResponseSchema: zod.ZodSchema<JobStatusResponse> =
  jobStatusResponseSchema;

export const postApiV2RoutingAgentsByUserIdInstanceValuesResponseSchema: zod.ZodSchema<SkillBasedRoutingAttributeValuesResponse> =
  skillBasedRoutingAttributeValuesResponseSchema;

export const postApiV2RoutingTicketsByTicketIdInstanceValuesResponseSchema: zod.ZodSchema<SkillBasedRoutingAttributeValuesResponse> =
  skillBasedRoutingAttributeValuesResponseSchema;

export const postApiV2SuspendedTicketsAttachmentsResponseSchema: zod.ZodSchema<SuspendedTicketsAttachmentsResponse> =
  suspendedTicketsAttachmentsResponseSchema;

export const postApiV2SuspendedTicketsExportResponseSchema: zod.ZodSchema<SuspendedTicketsExportResponse> =
  suspendedTicketsExportResponseSchema;

export const postApiV2TicketFieldsByTicketFieldIdOptionsResponseSchema: zod.ZodSchema<CustomFieldOptionResponse> =
  customFieldOptionResponseSchema;

export const postApiV2TicketFormsByTicketFormIdCloneResponseSchema: zod.ZodSchema<TicketFormResponse> =
  ticketFormResponseSchema;

export const postApiV2TicketsByTicketIdMergeResponseSchema: zod.ZodSchema<JobStatusResponse> =
  jobStatusResponseSchema;

export const postApiV2TicketsByTicketIdSatisfactionRatingResponseSchema: zod.ZodSchema<SatisfactionRatingResponse> =
  satisfactionRatingResponseSchema;

export const postApiV2TicketsCreateManyResponseSchema: zod.ZodSchema<JobStatusResponse> =
  jobStatusResponseSchema;

export const postApiV2TriggerCategoriesResponseSchema: zod.ZodSchema<TriggerCategoryResponse> =
  triggerCategoryResponseSchema;

export const postApiV2TriggerCategoriesJobsResponseSchema: zod.ZodSchema<BatchJobResponse> =
  batchJobResponseSchema;

export const postApiV2UserFieldsByUserFieldIdOptionsResponseSchema: zod.ZodSchema<CustomFieldOptionResponse> =
  customFieldOptionResponseSchema;

export const postApiV2UsersByUserIdPasswordResponseSchema: zod.ZodSchema<string> =
  zod.string().describe("Empty response");

export const postApiV2UsersCreateManyResponseSchema: zod.ZodSchema<JobStatusResponse> =
  jobStatusResponseSchema;

export const postApiV2UsersCreateOrUpdateResponseSchema: zod.ZodSchema<UserResponse> =
  userResponseSchema;

export const postApiV2UsersCreateOrUpdateManyResponseSchema: zod.ZodSchema<JobStatusResponse> =
  jobStatusResponseSchema;

export const postApiV2UsersRequestCreateResponseSchema: zod.ZodSchema<string> =
  zod.string().describe("Empty response");

export const postApiV2ViewsResponseSchema: zod.ZodSchema<ViewResponse> =
  viewResponseSchema;

export const postApiV2ViewsPreviewResponseSchema: zod.ZodSchema<ViewResponse> =
  viewResponseSchema;

export const postApiV2ViewsPreviewCountResponseSchema: zod.ZodSchema<ViewCountResponse> =
  viewCountResponseSchema;

export const putApiV2AccountSettingsResponseSchema: zod.ZodSchema<AccountSettingsResponse> =
  accountSettingsResponseSchema;

export const putApiV2AttachmentsByAttachmentIdResponseSchema: zod.ZodSchema<AttachmentResponse> =
  attachmentResponseSchema;

export const putApiV2AutomationsByAutomationIdResponseSchema: zod.ZodSchema<AutomationResponse> =
  automationResponseSchema;

export const putApiV2AutomationsUpdateManyResponseSchema: zod.ZodSchema<AutomationsResponse> =
  automationsResponseSchema;

export const putApiV2BrandsByBrandIdResponseSchema: zod.ZodSchema<BrandResponse> =
  brandResponseSchema;

export const putApiV2ChatFileRedactionsByTicketIdResponseSchema: zod.ZodSchema<TicketChatCommentRedactionResponse> =
  ticketChatCommentRedactionResponseSchema;

export const putApiV2ChatRedactionsByTicketIdResponseSchema: zod.ZodSchema<TicketChatCommentRedactionResponse> =
  ticketChatCommentRedactionResponseSchema;

export const putApiV2CommentRedactionsByTicketCommentIdResponseSchema: zod.ZodSchema<TicketCommentResponse> =
  ticketCommentResponseSchema;

export const putApiV2CustomObjectsByCustomObjectKeyFieldsReorderResponseSchema: zod.ZodSchema<string> =
  zod.string().describe("Empty response");

export const putApiV2CustomRolesByCustomRoleIdResponseSchema: zod.ZodSchema<CustomRoleResponse> =
  customRoleResponseSchema;

export const putApiV2CustomStatusDefaultResponseSchema: zod.ZodSchema<BulkUpdateDefaultCustomStatusResponse> =
  bulkUpdateDefaultCustomStatusResponseSchema;

export const putApiV2CustomStatusesByCustomStatusIdResponseSchema: zod.ZodSchema<CustomStatusResponse> =
  customStatusResponseSchema;

export const putApiV2DeletedTicketsByTicketIdRestoreResponseSchema: zod.ZodSchema<string> =
  zod.string().describe("Empty response");

export const putApiV2DeletedTicketsRestoreManyResponseSchema: zod.ZodSchema<string> =
  zod.string().describe("Empty response");

export const putApiV2DynamicContentItemsByDynamicContentItemIdResponseSchema: zod.ZodSchema<DynamicContentResponse> =
  dynamicContentResponseSchema;

export const putApiV2DynamicContentItemsByDynamicContentItemIdVariantsByDynammicContentVariantIdResponseSchema: zod.ZodSchema<DynamicContentVariantResponse> =
  dynamicContentVariantResponseSchema;

export const putApiV2DynamicContentItemsByDynamicContentItemIdVariantsUpdateManyResponseSchema: zod.ZodSchema<DynamicContentVariantsResponse> =
  dynamicContentVariantsResponseSchema;

export const putApiV2GroupSlasPoliciesByGroupSlaPolicyIdResponseSchema: zod.ZodSchema<GroupSLAPolicyResponse> =
  groupSlaPolicyResponseSchema;

export const putApiV2GroupSlasPoliciesReorderResponseSchema: zod.ZodSchema<string> =
  zod.string().describe("Empty response");

export const putApiV2GroupsByGroupIdResponseSchema: zod.ZodSchema<GroupResponse> =
  groupResponseSchema;

export const putApiV2MacrosByMacroIdResponseSchema: zod.ZodSchema<{
  macro: MacroObject;
}> = zod.object({ macro: macroObjectSchema });

export const putApiV2MacrosUpdateManyResponseSchema: zod.ZodSchema<MacrosResponse> =
  macrosResponseSchema;

export const putApiV2OrganizationFieldsByOrganizationFieldIdResponseSchema: zod.ZodSchema<OrganizationFieldResponse> =
  organizationFieldResponseSchema;

export const putApiV2OrganizationFieldsReorderResponseSchema: zod.ZodSchema<string> =
  zod.string().describe("Empty response");

export const putApiV2OrganizationsByOrganizationIdResponseSchema: zod.ZodSchema<OrganizationResponse> =
  organizationResponseSchema;

export const putApiV2OrganizationsUpdateManyResponseSchema: zod.ZodSchema<JobStatusResponse> =
  jobStatusResponseSchema;

export const putApiV2RecipientAddressesBySupportAddressIdResponseSchema: zod.ZodSchema<SupportAddressResponse> =
  supportAddressResponseSchema;

export const putApiV2RecipientAddressesBySupportAddressIdVerifyResponseSchema: zod.ZodSchema<string> =
  zod.string().describe("Empty response");

export const putApiV2RequestsByRequestIdResponseSchema: zod.ZodSchema<RequestResponse> =
  requestResponseSchema;

export const putApiV2ResourceCollectionsByResourceCollectionIdResponseSchema: zod.ZodSchema<JobStatusResponse> =
  jobStatusResponseSchema;

export const putApiV2RoutingAttributesByAttributeIdResponseSchema: zod.ZodSchema<SkillBasedRoutingAttributeResponse> =
  skillBasedRoutingAttributeResponseSchema;

export const putApiV2SharingAgreementsBySharingAgreementIdResponseSchema: zod.ZodSchema<SharingAgreementResponse> =
  sharingAgreementResponseSchema;

export const putApiV2SlasPoliciesBySlaPolicyIdResponseSchema: zod.ZodSchema<SLAPolicyResponse> =
  slaPolicyResponseSchema;

export const putApiV2SlasPoliciesReorderResponseSchema: zod.ZodSchema<string> =
  zod.string().describe("Empty response");

export const putApiV2SuspendedTicketsByIdRecoverResponseSchema: zod.ZodSchema<RecoverSuspendedTicketResponse> =
  recoverSuspendedTicketResponseSchema;

export const putApiV2SuspendedTicketsRecoverManyResponseSchema: zod.ZodSchema<RecoverSuspendedTicketsResponse> =
  recoverSuspendedTicketsResponseSchema;

export const putApiV2TargetsByTargetIdResponseSchema: zod.ZodSchema<TargetResponse> =
  targetResponseSchema;

export const putApiV2TicketFieldsByTicketFieldIdResponseSchema: zod.ZodSchema<TicketFieldResponse> =
  ticketFieldResponseSchema;

export const putApiV2TicketFormsByTicketFormIdResponseSchema: zod.ZodSchema<TicketFormResponse> =
  ticketFormResponseSchema;

export const putApiV2TicketFormsReorderResponseSchema: zod.ZodSchema<TicketFormsResponse> =
  ticketFormsResponseSchema;

export const putApiV2TicketsByTicketIdResponseSchema: zod.ZodSchema<TicketUpdateResponse> =
  ticketUpdateResponseSchema;

export const putApiV2TicketsByTicketIdAuditsByTicketAuditIdMakePrivateResponseSchema: zod.ZodSchema<string> =
  zod.string().describe("Empty response");

export const putApiV2TicketsByTicketIdCommentsByCommentIdAttachmentsByAttachmentIdRedactResponseSchema: zod.ZodSchema<AttachmentResponse> =
  attachmentResponseSchema;

export const putApiV2TicketsByTicketIdCommentsByTicketCommentIdMakePrivateResponseSchema: zod.ZodSchema<string> =
  zod.string().describe("Empty response");

export const putApiV2TicketsByTicketIdCommentsByTicketCommentIdRedactResponseSchema: zod.ZodSchema<TicketCommentResponse> =
  ticketCommentResponseSchema;

export const putApiV2TicketsByTicketIdMarkAsSpamResponseSchema: zod.ZodSchema<string> =
  zod.string();

export const putApiV2TicketsByTicketIdTagsResponseSchema: zod.ZodSchema<TagsByObjectIdResponse> =
  tagsByObjectIdResponseSchema;

export const putApiV2TicketsMarkManyAsSpamResponseSchema: zod.ZodSchema<JobStatusResponse> =
  jobStatusResponseSchema;

export const putApiV2TicketsUpdateManyResponseSchema: zod.ZodSchema<JobStatusResponse> =
  jobStatusResponseSchema;

export const putApiV2TriggersByTriggerIdResponseSchema: zod.ZodSchema<TriggerResponse> =
  triggerResponseSchema;

export const putApiV2TriggersReorderResponseSchema: zod.ZodSchema<TriggerResponse> =
  triggerResponseSchema;

export const putApiV2TriggersUpdateManyResponseSchema: zod.ZodSchema<TriggersResponse> =
  triggersResponseSchema;

export const putApiV2UserFieldsByUserFieldIdResponseSchema: zod.ZodSchema<UserFieldResponse> =
  userFieldResponseSchema;

export const putApiV2UserFieldsReorderResponseSchema: zod.ZodSchema<string> =
  zod.string().describe("Empty response");

export const putApiV2UsersByUserIdResponseSchema: zod.ZodSchema<UserResponse> =
  userResponseSchema;

export const putApiV2UsersByUserIdGroupMembershipsByGroupMembershipIdMakeDefaultResponseSchema: zod.ZodSchema<GroupMembershipsResponse> =
  groupMembershipsResponseSchema;

export const putApiV2UsersByUserIdIdentitiesByUserIdentityIdResponseSchema: zod.ZodSchema<UserIdentityResponse> =
  userIdentityResponseSchema;

export const putApiV2UsersByUserIdIdentitiesByUserIdentityIdMakePrimaryResponseSchema: zod.ZodSchema<UserIdentitiesResponse> =
  userIdentitiesResponseSchema;

export const putApiV2UsersByUserIdIdentitiesByUserIdentityIdRequestVerificationResponseSchema: zod.ZodSchema<string> =
  zod.string().describe("Empty response");

export const putApiV2UsersByUserIdIdentitiesByUserIdentityIdVerifyResponseSchema: zod.ZodSchema<UserIdentityResponse> =
  userIdentityResponseSchema;

export const putApiV2UsersByUserIdMergeResponseSchema: zod.ZodSchema<UserResponse> =
  userResponseSchema;

export const putApiV2UsersByUserIdOrganizationMembershipsByOrganizationMembershipIdMakeDefaultResponseSchema: zod.ZodSchema<OrganizationMembershipsResponse> =
  organizationMembershipsResponseSchema;

export const putApiV2UsersByUserIdOrganizationsByOrganizationIdMakeDefaultResponseSchema: zod.ZodSchema<OrganizationMembershipResponse> =
  organizationMembershipResponseSchema;

export const putApiV2UsersByUserIdPasswordResponseSchema: zod.ZodSchema<string> =
  zod.string().describe("Empty response");

export const putApiV2UsersUpdateManyResponseSchema: zod.ZodSchema<JobStatusResponse> =
  jobStatusResponseSchema;

export const putApiV2ViewsByViewIdResponseSchema: zod.ZodSchema<ViewResponse> =
  viewResponseSchema;

export const putApiV2ViewsUpdateManyResponseSchema: zod.ZodSchema<ViewsResponse> =
  viewsResponseSchema;

export const putApiV2WorkspacesByWorkspaceIdResponseSchema: zod.ZodSchema<{
  workspace: WorkspaceObject;
}> = zod.object({ workspace: workspaceObjectSchema });

export const putApiV2WorkspacesReorderResponseSchema: zod.ZodSchema<string> =
  zod.string().describe("Empty response");

export const deleteApiV2DeletedTicketsByTicketIdResponseSchema: zod.ZodSchema<JobStatusResponse> =
  jobStatusResponseSchema;

export const deleteApiV2DeletedTicketsDestroyManyResponseSchema: zod.ZodSchema<JobStatusResponse> =
  jobStatusResponseSchema;

export const deleteApiV2DeletedUsersByDeletedUserIdResponseSchema: zod.ZodSchema<DeletedUserResponse> =
  deletedUserResponseSchema;

export const deleteApiV2GroupMembershipsDestroyManyResponseSchema: zod.ZodSchema<JobStatusResponse> =
  jobStatusResponseSchema;

export const deleteApiV2OrganizationMembershipsDestroyManyResponseSchema: zod.ZodSchema<JobStatusResponse> =
  jobStatusResponseSchema;

export const deleteApiV2OrganizationsDestroyManyResponseSchema: zod.ZodSchema<JobStatusResponse> =
  jobStatusResponseSchema;

export const deleteApiV2ResourceCollectionsByResourceCollectionIdResponseSchema: zod.ZodSchema<JobStatusResponse> =
  jobStatusResponseSchema;

export const deleteApiV2TicketsDestroyManyResponseSchema: zod.ZodSchema<JobStatusResponse> =
  jobStatusResponseSchema;

export const deleteApiV2UsersByUserIdResponseSchema: zod.ZodSchema<UserResponse> =
  userResponseSchema;

export const deleteApiV2UsersDestroyManyResponseSchema: zod.ZodSchema<JobStatusResponse> =
  jobStatusResponseSchema;

export const deleteApiV2WorkspacesDestroyManyResponseSchema: zod.ZodSchema<string> =
  zod.string().describe("Empty response");
