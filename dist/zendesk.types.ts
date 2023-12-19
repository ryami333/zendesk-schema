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
  zod.object({
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
  });

export const accountSettingsAgentObjectSchema: zod.ZodSchema<AccountSettingsAgentObject> =
  zod.object({
    agent_home: zod.boolean(),
    agent_workspace: zod.boolean(),
    aw_self_serve_migration_enabled: zod.boolean(),
    focus_mode: zod.boolean(),
    idle_timeout_enabled: zod.boolean(),
    unified_agent_statuses: zod.boolean(),
  });

export const accountSettingsApiObjectSchema: zod.ZodSchema<AccountSettingsApiObject> =
  zod.object({
    accepted_api_agreement: zod.boolean(),
    api_password_access: zod.string(),
    api_token_access: zod.string(),
  });

export const accountSettingsAppsObjectSchema: zod.ZodSchema<AccountSettingsAppsObject> =
  zod.object({
    create_private: zod.boolean(),
    create_public: zod.boolean(),
    use: zod.boolean(),
  });

export const accountSettingsBillingObjectSchema: zod.ZodSchema<AccountSettingsBillingObject> =
  zod.object({ backend: zod.string() });

export const accountSettingsBrandingObjectSchema: zod.ZodSchema<AccountSettingsBrandingObject> =
  zod.object({
    favicon_url: zod.string().nullable(),
    header_color: zod.string(),
    header_logo_url: zod.string().nullable(),
    page_background_color: zod.string(),
    tab_background_color: zod.string(),
    text_color: zod.string(),
  });

export const accountSettingsBrandsObjectSchema: zod.ZodSchema<AccountSettingsBrandsObject> =
  zod.object({
    default_brand_id: zod.number(),
    require_brand_on_new_tickets: zod.boolean(),
  });

export const accountSettingsCdnObjectSchema: zod.ZodSchema<AccountSettingsCdnObject> =
  zod.object({
    cdn_provider: zod.string(),
    fallback_cdn_provider: zod.string(),
    hosts: zod.array(zod.object({ name: zod.string(), url: zod.string() })),
  });

export const accountSettingsChatObjectSchema: zod.ZodSchema<AccountSettingsChatObject> =
  zod.object({
    available: zod.boolean(),
    enabled: zod.boolean(),
    integrated: zod.boolean(),
    maximum_request_count: zod.number(),
    welcome_message: zod.string(),
  });

export const accountSettingsCrossSellObjectSchema: zod.ZodSchema<AccountSettingsCrossSellObject> =
  zod.object({
    show_chat_tooltip: zod.boolean(),
    xsell_source: zod.string().nullable(),
  });

export const accountSettingsGooddataAdvancedAnalyticsObjectSchema: zod.ZodSchema<AccountSettingsGooddataAdvancedAnalyticsObject> =
  zod.object({ enabled: zod.boolean() });

export const accountSettingsGoogleAppsObjectSchema: zod.ZodSchema<AccountSettingsGoogleAppsObject> =
  zod.object({
    has_google_apps: zod.boolean(),
    has_google_apps_admin: zod.boolean(),
  });

export const accountSettingsGroupObjectSchema: zod.ZodSchema<AccountSettingsGroupObject> =
  zod.object({ check_group_name_uniqueness: zod.boolean() });

export const accountSettingsLimitsObjectSchema: zod.ZodSchema<AccountSettingsLimitsObject> =
  zod.object({ attachment_size: zod.number() });

export const accountSettingsLocalizationObjectSchema: zod.ZodSchema<AccountSettingsLocalizationObject> =
  zod.object({ locale_ids: zod.array(zod.number()) });

export const accountSettingsLotusObjectSchema: zod.ZodSchema<AccountSettingsLotusObject> =
  zod.object({
    pod_id: zod.number(),
    prefer_lotus: zod.boolean(),
    reporting: zod.boolean(),
  });

export const accountSettingsMetricsObjectSchema: zod.ZodSchema<AccountSettingsMetricsObject> =
  zod.object({ account_size: zod.string() });

export const accountSettingsOnboardingObjectSchema: zod.ZodSchema<AccountSettingsOnboardingObject> =
  zod.object({
    checklist_onboarding_version: zod.number(),
    onboarding_segments: zod.string().nullable(),
    product_sign_up: zod.string().nullable(),
  });

export const accountSettingsRoutingObjectSchema: zod.ZodSchema<AccountSettingsRoutingObject> =
  zod.object({
    autorouting_tag: zod.string(),
    enabled: zod.boolean(),
    max_email_capacity: zod.number(),
    max_messaging_capacity: zod.number(),
    reassignment_messaging_enabled: zod.boolean(),
    reassignment_messaging_timeout: zod.number(),
    reassignment_talk_timeout: zod.number(),
  });

export const accountSettingsRuleObjectSchema: zod.ZodSchema<AccountSettingsRuleObject> =
  zod.object({
    macro_most_used: zod.boolean(),
    macro_order: zod.string(),
    skill_based_filtered_views: zod.array(zod.record(zod.unknown())),
    using_skill_based_routing: zod.boolean(),
  });

export const accountSettingsSideConversationsObjectSchema: zod.ZodSchema<AccountSettingsSideConversationsObject> =
  zod.object({
    email_channel: zod.boolean(),
    msteams_channel: zod.boolean(),
    show_in_context_panel: zod.boolean(),
    slack_channel: zod.boolean(),
    tickets_channel: zod.boolean(),
  });

export const accountSettingsStatisticsObjectSchema: zod.ZodSchema<AccountSettingsStatisticsObject> =
  zod.object({
    forum: zod.boolean(),
    rule_usage: zod.boolean(),
    search: zod.boolean(),
  });

export const accountSettingsTicketFormObjectSchema: zod.ZodSchema<AccountSettingsTicketFormObject> =
  zod.object({
    raw_ticket_forms_instructions: zod.string(),
    ticket_forms_instructions: zod.string(),
  });

export const accountSettingsTicketObjectSchema: zod.ZodSchema<AccountSettingsTicketObject> =
  zod.object({
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
  });

export const accountSettingsTicketSharingPartnersObjectSchema: zod.ZodSchema<AccountSettingsTicketSharingPartnersObject> =
  zod.object({ support_addresses: zod.array(zod.string()) });

export const accountSettingsTwitterObjectSchema: zod.ZodSchema<AccountSettingsTwitterObject> =
  zod.object({ shorten_url: zod.string() });

export const accountSettingsUserObjectSchema: zod.ZodSchema<AccountSettingsUserObject> =
  zod.object({
    agent_created_welcome_emails: zod.boolean(),
    end_user_phone_number_validation: zod.boolean(),
    have_gravatars_enabled: zod.boolean(),
    language_selection: zod.boolean(),
    multiple_organizations: zod.boolean(),
    tagging: zod.boolean(),
    time_zone_selection: zod.boolean(),
  });

export const accountSettingsVoiceObjectSchema: zod.ZodSchema<AccountSettingsVoiceObject> =
  zod.object({
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
  });

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
  field: zod.string(),
  value: zod.string(),
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
    avatar_url: zod.string().nullable(),
    id: zod.number(),
    name: zod.string(),
  });

export const assigneeFieldAssignableGroupAgentsResponseSchema: zod.ZodSchema<AssigneeFieldAssignableGroupAgentsResponse> =
  zod.object({
    agents: zod.array(assigneeFieldAssignableAgentObjectSchema),
    count: zod.number(),
    next_page: zod.string().nullable(),
    previous_page: zod.string().nullable(),
  });

export const assigneeFieldAssignableGroupObjectSchema: zod.ZodSchema<AssigneeFieldAssignableGroupObject> =
  zod.object({
    description: zod.string(),
    id: zod.number(),
    name: zod.string(),
  });

export const assigneeFieldAssignableGroupsResponseSchema: zod.ZodSchema<AssigneeFieldAssignableGroupsResponse> =
  zod.object({
    count: zod.number(),
    groups: zod.array(assigneeFieldAssignableGroupObjectSchema),
    next_page: zod.string().nullable(),
    previous_page: zod.string().nullable(),
  });

export const assigneeFieldAssignableSearchAgentObjectSchema: zod.ZodSchema<AssigneeFieldAssignableSearchAgentObject> =
  zod.object({
    group: zod.string(),
    group_id: zod.number(),
    id: zod.number(),
    name: zod.string(),
    photo_url: zod.string().nullable(),
  });

export const assigneeFieldAssignableSearchGroupObjectSchema: zod.ZodSchema<AssigneeFieldAssignableSearchGroupObject> =
  zod.object({ id: zod.number(), name: zod.string() });

export const assigneeFieldAssignableGroupsAndAgentsSearchResponseSchema: zod.ZodSchema<AssigneeFieldAssignableGroupsAndAgentsSearchResponse> =
  zod.object({
    agents: zod.array(assigneeFieldAssignableSearchAgentObjectSchema),
    count: zod.number(),
    groups: zod.array(assigneeFieldAssignableSearchGroupObjectSchema),
  });

export const attachmentBaseObjectSchema: zod.ZodSchema<AttachmentBaseObject> =
  zod.object({
    content_type: zod.string(),
    content_url: zod.string(),
    deleted: zod.boolean(),
    file_name: zod.string(),
    height: zod.string(),
    id: zod.number(),
    inline: zod.boolean(),
    malware_access_override: zod.boolean(),
    malware_scan_result: zod.string(),
    mapped_content_url: zod.string(),
    size: zod.number(),
    url: zod.string(),
    width: zod.string(),
  });

export const attachmentThumbnailsSchema: zod.ZodSchema<AttachmentThumbnails> =
  zod.object({ thumbnails: zod.array(attachmentBaseObjectSchema) });

export const attachmentObjectSchema: zod.ZodSchema<AttachmentObject> =
  zod.intersection(attachmentBaseObjectSchema, attachmentThumbnailsSchema);

export const attachmentResponseSchema: zod.ZodSchema<AttachmentResponse> =
  zod.object({ attachment: attachmentObjectSchema });

export const attachmentUpdateInputSchema: zod.ZodSchema<AttachmentUpdateInput> =
  zod.object({ malware_access_override: zod.boolean() });

export const attachmentUpdateRequestSchema: zod.ZodSchema<AttachmentUpdateRequest> =
  zod.object({ attachment: attachmentUpdateInputSchema });

export const attachmentUploadResponseSchema: zod.ZodSchema<AttachmentUploadResponse> =
  zod.object({
    upload: zod.object({
      attachment: attachmentObjectSchema,
      attachments: zod.array(attachmentObjectSchema),
      token: zod.string(),
    }),
  });

export const auditLogObjectSchema: zod.ZodSchema<AuditLogObject> = zod.object({
  action: zod.string(),
  action_label: zod.string(),
  actor_id: zod.number(),
  actor_name: zod.string(),
  change_description: zod.string(),
  created_at: zod.string(),
  id: zod.number(),
  ip_address: zod.string(),
  source_id: zod.number(),
  source_label: zod.string(),
  source_type: zod.string(),
  url: zod.string(),
});

export const auditLogResponseSchema: zod.ZodSchema<AuditLogResponse> =
  zod.object({ audit_log: auditLogObjectSchema });

export const auditLogsResponseSchema: zod.ZodSchema<AuditLogsResponse> =
  zod.object({ audit_logs: zod.array(auditLogObjectSchema) });

export const authorObjectSchema: zod.ZodSchema<AuthorObject> = zod.object({
  email: zod.string(),
  id: zod.number(),
  name: zod.string(),
});

export const bookmarkInputSchema: zod.ZodSchema<BookmarkInput> = zod.object({
  ticket_id: zod.number(),
});

export const bookmarkCreateRequestSchema: zod.ZodSchema<BookmarkCreateRequest> =
  zod.object({ bookmark: bookmarkInputSchema });

export const brandObjectSchema: zod.ZodSchema<BrandObject> = zod.object({
  active: zod.boolean(),
  brand_url: zod.string(),
  created_at: zod.string(),
  default: zod.boolean(),
  has_help_center: zod.boolean(),
  help_center_state: zod.union([
    zod.literal("enabled"),
    zod.literal("disabled"),
    zod.literal("restricted"),
  ]),
  host_mapping: zod.string(),
  id: zod.number(),
  is_deleted: zod.boolean(),
  logo: attachmentObjectSchema,
  name: zod.string(),
  signature_template: zod.string(),
  subdomain: zod.string(),
  ticket_form_ids: zod.array(zod.unknown()),
  updated_at: zod.string(),
  url: zod.string(),
});

export const brandCreateRequestSchema: zod.ZodSchema<BrandCreateRequest> =
  zod.object({ brand: brandObjectSchema });

export const brandResponseSchema: zod.ZodSchema<BrandResponse> = zod.object({
  brand: brandObjectSchema,
});

export const brandUpdateRequestSchema: zod.ZodSchema<BrandUpdateRequest> =
  zod.object({ brand: brandObjectSchema });

export const bulkUpdateDefaultCustomStatusRequestSchema: zod.ZodSchema<BulkUpdateDefaultCustomStatusRequest> =
  zod.object({ ids: zod.string() });

export const bulkUpdateDefaultCustomStatusResponseSchema: zod.ZodSchema<BulkUpdateDefaultCustomStatusResponse> =
  zod.record(zod.unknown());

export const channelFrameworkResultStatusObjectSchema: zod.ZodSchema<ChannelFrameworkResultStatusObject> =
  zod.object({ code: zod.string(), description: zod.string() });

export const channelFrameworkResultObjectSchema: zod.ZodSchema<ChannelFrameworkResultObject> =
  zod.object({
    external_resource_id: zod.string(),
    status: channelFrameworkResultStatusObjectSchema,
  });

export const channelFrameworkPushResultsResponseSchema: zod.ZodSchema<ChannelFrameworkPushResultsResponse> =
  zod.object({ results: zod.array(channelFrameworkResultObjectSchema) });

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
    field: zod.string(),
    operator: zod.string(),
    value: zod.union([zod.string(), zod.array(zod.unknown())]),
  },
);

export const conditionsObjectSchema: zod.ZodSchema<ConditionsObject> =
  zod.object({
    all: zod.array(conditionObjectSchema),
    any: zod.array(conditionObjectSchema),
  });

export const automationObjectSchema: zod.ZodSchema<AutomationObject> =
  zod.object({
    actions: zod.array(actionObjectSchema),
    active: zod.boolean(),
    conditions: conditionsObjectSchema,
    created_at: zod.string(),
    default: zod.boolean(),
    id: zod.number(),
    position: zod.number(),
    raw_title: zod.string(),
    title: zod.string(),
    updated_at: zod.string(),
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
  zod.object({ id: zod.number(), index: zod.number() });

export const customFieldOptionObjectSchema: zod.ZodSchema<CustomFieldOptionObject> =
  zod.object({
    id: zod.number(),
    name: zod.string(),
    position: zod.number(),
    raw_name: zod.string(),
    url: zod.string(),
    value: zod.string(),
  });

export const customFieldObjectSchema: zod.ZodSchema<CustomFieldObject> =
  zod.object({
    active: zod.boolean(),
    created_at: zod.string(),
    custom_field_options: zod.array(customFieldOptionObjectSchema),
    description: zod.string(),
    id: zod.number(),
    key: zod.string(),
    position: zod.number(),
    raw_description: zod.string(),
    raw_title: zod.string(),
    regexp_for_validation: zod.string().nullable(),
    relationship_filter: zod.record(zod.unknown()),
    relationship_target_type: zod.string(),
    system: zod.boolean(),
    tag: zod.string(),
    title: zod.string(),
    type: zod.string(),
    updated_at: zod.string(),
    url: zod.string(),
  });

export const customFieldOptionResponseSchema: zod.ZodSchema<CustomFieldOptionResponse> =
  zod.object({ custom_field_option: customFieldOptionObjectSchema });

export const customFieldOptionsResponseSchema: zod.ZodSchema<CustomFieldOptionsResponse> =
  zod.object({
    count: zod.number(),
    custom_field_options: zod.array(customFieldOptionObjectSchema),
    next_page: zod.string().nullable(),
    previous_page: zod.string().nullable(),
  });

export const customObjectSchema: zod.ZodSchema<CustomObject> = zod.object({
  created_at: zod.string(),
  created_by_user_id: zod.string(),
  description: zod.string(),
  key: zod.string(),
  raw_description: zod.string(),
  raw_title: zod.string(),
  raw_title_pluralized: zod.string(),
  title: zod.string(),
  title_pluralized: zod.string(),
  updated_at: zod.string(),
  updated_by_user_id: zod.string(),
  url: zod.string(),
});

export const customObjectCreateInputSchema: zod.ZodSchema<CustomObjectCreateInput> =
  zod.object({
    key: zod.string(),
    title: zod.string(),
    title_pluralized: zod.string(),
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
  zod.object({ count: zod.number(), limit: zod.number() });

export const customObjectRecordSchema: zod.ZodSchema<CustomObjectRecord> =
  zod.object({
    created_at: zod.string(),
    created_by_user_id: zod.string(),
    custom_object_fields: zod.record(zod.unknown()),
    custom_object_key: zod.string(),
    external_id: zod.string().nullable(),
    id: zod.string(),
    name: zod.string(),
    updated_at: zod.string(),
    updated_by_user_id: zod.string(),
    url: zod.string(),
  });

export const customObjectRecordResponseSchema: zod.ZodSchema<CustomObjectRecordResponse> =
  zod.object({ custom_object_record: customObjectRecordSchema });

export const customObjectRecordsBulkCreateRequestSchema: zod.ZodSchema<CustomObjectRecordsBulkCreateRequest> =
  zod.object({
    job: zod.object({
      action: zod.string(),
      items: zod.array(customObjectRecordSchema),
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
    count: zod.number(),
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
  zod.object({
    assign_tickets_to_any_group: zod.boolean(),
    chat_access: zod.boolean(),
    end_user_list_access: zod.string(),
    end_user_profile_access: zod.string(),
    explore_access: zod.string(),
    forum_access: zod.string(),
    forum_access_restricted_content: zod.boolean(),
    group_access: zod.boolean(),
    light_agent: zod.boolean(),
    macro_access: zod.string(),
    manage_business_rules: zod.boolean(),
    manage_contextual_workspaces: zod.boolean(),
    manage_dynamic_content: zod.boolean(),
    manage_extensions_and_channels: zod.boolean(),
    manage_facebook: zod.boolean(),
    manage_organization_fields: zod.boolean(),
    manage_ticket_fields: zod.boolean(),
    manage_ticket_forms: zod.boolean(),
    manage_user_fields: zod.boolean(),
    moderate_forums: zod.boolean(),
    organization_editing: zod.boolean(),
    organization_notes_editing: zod.boolean(),
    report_access: zod.string(),
    side_conversation_create: zod.boolean(),
    ticket_access: zod.string(),
    ticket_comment_access: zod.string(),
    ticket_deletion: zod.boolean(),
    ticket_editing: zod.boolean(),
    ticket_merge: zod.boolean(),
    ticket_tag_editing: zod.boolean(),
    twitter_search_access: zod.boolean(),
    user_view_access: zod.string(),
    view_access: zod.string(),
    view_deleted_tickets: zod.boolean(),
    voice_access: zod.boolean(),
    voice_dashboard_access: zod.boolean(),
  });

export const customRoleObjectSchema: zod.ZodSchema<CustomRoleObject> =
  zod.object({
    configuration: customRoleConfigurationObjectSchema,
    created_at: zod.string(),
    description: zod.string(),
    id: zod.number(),
    name: zod.string(),
    role_type: zod.number(),
    team_member_count: zod.number(),
    updated_at: zod.string(),
  });

export const customRoleResponseSchema: zod.ZodSchema<CustomRoleResponse> =
  zod.object({ custom_role: customRoleObjectSchema });

export const customRolesResponseSchema: zod.ZodSchema<CustomRolesResponse> =
  zod.object({ custom_roles: zod.array(customRoleObjectSchema) });

export const customStatusObjectSchema: zod.ZodSchema<CustomStatusObject> =
  zod.object({
    active: zod.boolean(),
    agent_label: zod.string(),
    created_at: zod.string(),
    default: zod.boolean(),
    description: zod.string(),
    end_user_description: zod.string(),
    end_user_label: zod.string(),
    id: zod.number(),
    raw_agent_label: zod.string(),
    raw_description: zod.string(),
    raw_end_user_description: zod.string(),
    raw_end_user_label: zod.string(),
    status_category: zod.union([
      zod.literal("new"),
      zod.literal("open"),
      zod.literal("pending"),
      zod.literal("hold"),
      zod.literal("solved"),
    ]),
    updated_at: zod.string(),
  });

export const customStatusResponseSchema: zod.ZodSchema<CustomStatusResponse> =
  zod.object({ custom_status: customStatusObjectSchema });

export const customStatusUpdateInputSchema: zod.ZodSchema<CustomStatusUpdateInput> =
  zod.object({
    active: zod.boolean(),
    agent_label: zod.string(),
    description: zod.string(),
    end_user_description: zod.string(),
    end_user_label: zod.string(),
  });

export const customStatusCreateInputSchema: zod.ZodSchema<CustomStatusCreateInput> =
  zod.intersection(
    customStatusUpdateInputSchema,
    zod.object({
      status_category: zod.union([
        zod.literal("new"),
        zod.literal("open"),
        zod.literal("pending"),
        zod.literal("hold"),
        zod.literal("solved"),
      ]),
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
    photo: zod.record(zod.unknown()).nullable(),
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
    active: zod.boolean(),
    content: zod.string(),
    created_at: zod.string(),
    default: zod.boolean(),
    id: zod.number(),
    locale_id: zod.number(),
    outdated: zod.boolean(),
    updated_at: zod.string(),
    url: zod.string(),
  });

export const dynamicContentObjectSchema: zod.ZodSchema<DynamicContentObject> =
  zod.object({
    created_at: zod.string(),
    default_locale_id: zod.number(),
    id: zod.number(),
    name: zod.string(),
    outdated: zod.boolean(),
    placeholder: zod.string(),
    updated_at: zod.string(),
    url: zod.string(),
    variants: zod.array(dynamicContentVariantObjectSchema),
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
  links: zod.record(zod.unknown()),
  source: zod.record(zod.unknown()),
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
    created_at: zod.string(),
    default: zod.boolean(),
    fields: zod.array(zod.record(zod.unknown())),
    id: zod.string().nullable(),
    key: zod.string(),
    layout: zod.string(),
    max_count: zod.number(),
    updated_at: zod.string(),
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
    created_at: zod.string(),
    default: zod.boolean(),
    group_id: zod.number(),
    id: zod.number(),
    updated_at: zod.string(),
    url: zod.string(),
    user_id: zod.number(),
  });

export const groupMembershipResponseSchema: zod.ZodSchema<GroupMembershipResponse> =
  zod.object({ group_membership: groupMembershipObjectSchema });

export const groupMembershipsResponseSchema: zod.ZodSchema<GroupMembershipsResponse> =
  zod.object({ group_memberships: zod.array(groupMembershipObjectSchema) });

export const groupObjectSchema: zod.ZodSchema<GroupObject> = zod.object({
  created_at: zod.string(),
  default: zod.boolean(),
  deleted: zod.boolean(),
  description: zod.string(),
  id: zod.number(),
  is_public: zod.boolean(),
  name: zod.string(),
  updated_at: zod.string(),
  url: zod.string(),
});

export const groupResponseSchema: zod.ZodSchema<GroupResponse> = zod.object({
  group: groupObjectSchema,
});

export const groupSlaPolicyFilterConditionObjectSchema: zod.ZodSchema<GroupSLAPolicyFilterConditionObject> =
  zod.object({
    field: zod.string(),
    operator: zod.string(),
    value: zod.array(zod.unknown()),
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
  zod.object({ all: zod.array(groupSlaPolicyFilterConditionObjectSchema) });

export const groupSlaPolicyMetricObjectSchema: zod.ZodSchema<GroupSLAPolicyMetricObject> =
  zod.object({
    business_hours: zod.boolean(),
    metric: zod.string(),
    priority: zod.string(),
    target: zod.number(),
  });

export const groupSlaPolicyObjectSchema: zod.ZodSchema<GroupSLAPolicyObject> =
  zod.object({
    created_at: zod.string(),
    description: zod.string(),
    filter: groupSlaPolicyFilterObjectSchema,
    id: zod.string(),
    policy_metrics: zod.array(groupSlaPolicyMetricObjectSchema),
    position: zod.number(),
    title: zod.string(),
    updated_at: zod.string(),
    url: zod.string(),
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
    count: zod.object({ refreshed_at: zod.string(), value: zod.number() }),
  });

export const groupsResponseSchema: zod.ZodSchema<GroupsResponse> = zod.object({
  groups: zod.array(groupObjectSchema),
});

export const hostMappingObjectSchema: zod.ZodSchema<HostMappingObject> =
  zod.object({
    cname: zod.string(),
    expected_cnames: zod.array(zod.string()),
    is_valid: zod.boolean(),
    reason: zod.string(),
  });

export const incrementalSkillBasedRoutingAttributeSchema: zod.ZodSchema<IncrementalSkillBasedRoutingAttribute> =
  zod.object({
    id: zod.string(),
    name: zod.string(),
    time: zod.string(),
    type: zod.string(),
  });

export const incrementalSkillBasedRoutingAttributeValueSchema: zod.ZodSchema<IncrementalSkillBasedRoutingAttributeValue> =
  zod.object({
    attribute_id: zod.string(),
    id: zod.string(),
    name: zod.string(),
    time: zod.string(),
    type: zod.string(),
  });

export const incrementalSkillBasedRoutingInstanceValueSchema: zod.ZodSchema<IncrementalSkillBasedRoutingInstanceValue> =
  zod.object({
    attribute_value_id: zod.string(),
    id: zod.string(),
    instance_id: zod.string(),
    time: zod.string(),
    type: zod.string(),
  });

export const incrementalSkillBasedRoutingSchema: zod.ZodSchema<IncrementalSkillBasedRouting> =
  zod.object({
    attribute_values: zod.array(
      incrementalSkillBasedRoutingAttributeValueSchema,
    ),
    attributes: zod.array(incrementalSkillBasedRoutingAttributeSchema),
    count: zod.number(),
    end_time: zod.number(),
    instance_values: zod.array(incrementalSkillBasedRoutingInstanceValueSchema),
    next_page: zod.string(),
  });

export const keyDetailObjectSchema: zod.ZodSchema<KeyDetailObject> = zod.object(
  {
    created_at: zod.string(),
    default: zod.boolean(),
    fields: zod.array(zod.record(zod.unknown())),
    key: zod.string(),
    max_count: zod.number(),
    updated_at: zod.string(),
  },
);

export const keyDetailsResponseSchema: zod.ZodSchema<KeyDetailsResponse> =
  zod.object({ key_detail: keyDetailObjectSchema });

export const listTicketCollaboratorsResponseSchema: zod.ZodSchema<ListTicketCollaboratorsResponse> =
  zod.record(zod.unknown());

export const listTicketEmailCCsResponseSchema: zod.ZodSchema<ListTicketEmailCCsResponse> =
  zod.record(zod.unknown());

export const listTicketFollowersResponseSchema: zod.ZodSchema<ListTicketFollowersResponse> =
  zod.record(zod.unknown());

export const listTicketIncidentsResponseSchema: zod.ZodSchema<ListTicketIncidentsResponse> =
  zod.record(zod.unknown());

export const listTicketProblemsResponseSchema: zod.ZodSchema<ListTicketProblemsResponse> =
  zod.record(zod.unknown());

export const localeObjectSchema: zod.ZodSchema<LocaleObject> = zod.object({
  created_at: zod.string(),
  id: zod.number(),
  locale: zod.string(),
  name: zod.string(),
  updated_at: zod.string(),
  url: zod.string(),
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
    content_type: zod.string(),
    content_url: zod.string(),
    created_at: zod.string(),
    filename: zod.string(),
    id: zod.number(),
    size: zod.number(),
  });

export const macroAttachmentResponseSchema: zod.ZodSchema<MacroAttachmentResponse> =
  zod.object({ macro_attachment: macroAttachmentObjectSchema });

export const macroAttachmentsResponseSchema: zod.ZodSchema<MacroAttachmentsResponse> =
  zod.object({ macro_attachments: zod.array(macroAttachmentObjectSchema) });

export const macroCategoriesResponseSchema: zod.ZodSchema<MacroCategoriesResponse> =
  zod.object({ categories: zod.array(zod.string()) });

export const macroCommonObjectSchema: zod.ZodSchema<MacroCommonObject> =
  zod.object({
    actions: zod.array(actionObjectSchema),
    active: zod.boolean(),
    created_at: zod.string(),
    default: zod.boolean(),
    description: zod.string().nullable(),
    id: zod.number(),
    position: zod.number(),
    restriction: zod.record(zod.unknown()).nullable(),
    title: zod.string(),
    updated_at: zod.string(),
    url: zod.string(),
  });

export const macroInputSchema: zod.ZodSchema<MacroInput> = zod.object({
  actions: zod.array(actionObjectSchema),
  active: zod.boolean(),
  description: zod.string().nullable(),
  restriction: zod.object({
    id: zod.number(),
    ids: zod.array(zod.number()),
    type: zod.string(),
  }),
  title: zod.string(),
});

export const macroObjectSchema: zod.ZodSchema<MacroObject> = zod.intersection(
  macroCommonObjectSchema,
  zod.object({
    app_installation: zod.string().nullable(),
    categories: zod.string().nullable(),
    permissions: zod.string().nullable(),
    usage_1h: zod.number(),
    usage_7d: zod.number(),
    usage_24h: zod.number(),
    usage_30d: zod.number(),
  }),
);

export const macroResponseSchema: zod.ZodSchema<MacroResponse> = zod.object({
  macro: macroObjectSchema,
});

export const macroUpdateManyInputSchema: zod.ZodSchema<MacroUpdateManyInput> =
  zod.object({
    macros: zod.array(
      zod.object({
        active: zod.boolean(),
        id: zod.number(),
        position: zod.number(),
      }),
    ),
  });

export const offsetPaginationObjectSchema: zod.ZodSchema<OffsetPaginationObject> =
  zod.object({
    count: zod.number(),
    next_page: zod.string().nullable(),
    previous_page: zod.string().nullable(),
  });

export const brandsResponseSchema: zod.ZodSchema<BrandsResponse> =
  zod.intersection(
    offsetPaginationObjectSchema,
    zod.object({ brands: zod.array(brandObjectSchema) }),
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
    count: zod.number(),
    next_page: zod.string().nullable(),
    organization_fields: zod.array(organizationFieldObjectSchema),
    previous_page: zod.string().nullable(),
  });

export const organizationMembershipObjectSchema: zod.ZodSchema<OrganizationMembershipObject> =
  zod.object({
    created_at: zod.string(),
    default: zod.boolean().nullable(),
    id: zod.number(),
    organization_id: zod.number(),
    organization_name: zod.string(),
    updated_at: zod.string(),
    url: zod.string(),
    user_id: zod.number(),
    view_tickets: zod.boolean(),
  });

export const organizationMembershipResponseSchema: zod.ZodSchema<OrganizationMembershipResponse> =
  zod.object({ organization_membership: organizationMembershipObjectSchema });

export const organizationMembershipsResponseSchema: zod.ZodSchema<OrganizationMembershipsResponse> =
  zod.object({
    organization_memberships: zod.array(organizationMembershipObjectSchema),
  });

export const organizationMetadataObjectSchema: zod.ZodSchema<OrganizationMetadataObject> =
  zod.object({ tickets_count: zod.number(), users_count: zod.number() });

export const organizationObjectSchema: zod.ZodSchema<OrganizationObject> =
  zod.object({
    created_at: zod.string(),
    details: zod.string().nullable(),
    domain_names: zod.array(zod.string()),
    external_id: zod.string().nullable(),
    group_id: zod.number().nullable(),
    id: zod.number(),
    name: zod.string(),
    notes: zod.string().nullable(),
    organization_fields: zod.record(zod.unknown()).nullable(),
    shared_comments: zod.boolean(),
    shared_tickets: zod.boolean(),
    tags: zod.array(zod.string()),
    updated_at: zod.string(),
    url: zod.string(),
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
  zod.object({ organization_id: zod.number(), user_id: zod.number() });

export const organizationSubscriptionCreateRequestSchema: zod.ZodSchema<OrganizationSubscriptionCreateRequest> =
  zod.object({
    organization_subscription: organizationSubscriptionInputSchema,
  });

export const organizationSubscriptionObjectSchema: zod.ZodSchema<OrganizationSubscriptionObject> =
  zod.object({
    created_at: zod.string(),
    id: zod.number(),
    organization_id: zod.number(),
    user_id: zod.number(),
  });

export const organizationSubscriptionResponseSchema: zod.ZodSchema<OrganizationSubscriptionResponse> =
  zod.object({
    organization_subscription: organizationSubscriptionObjectSchema,
  });

export const organizationSubscriptionsResponseSchema: zod.ZodSchema<OrganizationSubscriptionsResponse> =
  zod.intersection(
    offsetPaginationObjectSchema,
    zod.object({
      organization_subscriptions: zod.array(
        organizationSubscriptionObjectSchema,
      ),
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
  zod.object({ authenticity_token: zod.string() });

export const resourceCollectionObjectSchema: zod.ZodSchema<ResourceCollectionObject> =
  zod.object({
    created_at: zod.string(),
    id: zod.number(),
    resources: zod.array(zod.unknown()),
    updated_at: zod.string(),
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
    field: zod.string(),
    operator: zod.string(),
    value: zod.union([zod.string(), zod.array(zod.unknown())]),
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
  zod.object({
    all: zod.array(slaPolicyFilterConditionObjectSchema),
    any: zod.array(slaPolicyFilterConditionObjectSchema),
  });

export const slaPolicyMetricObjectSchema: zod.ZodSchema<SLAPolicyMetricObject> =
  zod.object({
    business_hours: zod.boolean(),
    metric: zod.string(),
    priority: zod.string(),
    target: zod.number(),
  });

export const slaPolicyObjectSchema: zod.ZodSchema<SLAPolicyObject> = zod.object(
  {
    created_at: zod.string(),
    description: zod.string(),
    filter: slaPolicyFilterObjectSchema,
    id: zod.number(),
    policy_metrics: zod.array(slaPolicyMetricObjectSchema),
    position: zod.number(),
    title: zod.string(),
    updated_at: zod.string(),
    url: zod.string(),
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
    assignee_id: zod.number(),
    comment: zod.string(),
    created_at: zod.string(),
    group_id: zod.number(),
    id: zod.number(),
    reason: zod.string(),
    reason_code: zod.number(),
    reason_id: zod.number(),
    requester_id: zod.number(),
    score: zod.string(),
    ticket_id: zod.number(),
    updated_at: zod.string(),
    url: zod.string(),
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
    created_at: zod.string(),
    deleted_at: zod.string(),
    id: zod.number(),
    raw_value: zod.string(),
    reason_code: zod.number(),
    updated_at: zod.string(),
    url: zod.string(),
    value: zod.string(),
  });

export const satisfactionReasonResponseSchema: zod.ZodSchema<SatisfactionReasonResponse> =
  zod.object({ reason: zod.array(satisfactionReasonObjectSchema) });

export const satisfactionReasonsResponseSchema: zod.ZodSchema<SatisfactionReasonsResponse> =
  zod.object({ reasons: zod.array(satisfactionReasonObjectSchema) });

export const searchCountResponseSchema: zod.ZodSchema<SearchCountResponse> =
  zod.object({ count: zod.number() });

export const searchResultObjectSchema: zod.ZodSchema<SearchResultObject> =
  zod.object({
    created_at: zod.string(),
    default: zod.boolean(),
    deleted: zod.boolean(),
    description: zod.string(),
    id: zod.number(),
    name: zod.string(),
    result_type: zod.string(),
    updated_at: zod.string(),
    url: zod.string(),
  });

export const searchExportResponseSchema: zod.ZodSchema<SearchExportResponse> =
  zod.object({
    facets: zod.string().nullable(),
    links: zod.object({
      next: zod.string().nullable(),
      prev: zod.string().nullable(),
    }),
    meta: zod.object({
      after_cursor: zod.string().nullable(),
      before_cursor: zod.string().nullable(),
      has_more: zod.boolean(),
    }),
    results: zod.array(searchResultObjectSchema),
  });

export const searchResponseSchema: zod.ZodSchema<SearchResponse> = zod.object({
  count: zod.number(),
  facets: zod.string().nullable(),
  next_page: zod.string().nullable(),
  previous_page: zod.string().nullable(),
  results: zod.array(searchResultObjectSchema),
});

export const sessionObjectSchema: zod.ZodSchema<SessionObject> = zod.object({
  authenticated_at: zod.string().nullable(),
  id: zod.number(),
  last_seen_at: zod.string().nullable(),
  url: zod.string().nullable(),
  user_id: zod.number().nullable(),
});

export const sessionResponseSchema: zod.ZodSchema<SessionResponse> = zod.object(
  { session: zod.array(sessionObjectSchema) },
);

export const sessionsResponseSchema: zod.ZodSchema<SessionsResponse> =
  zod.object({ sessions: zod.array(sessionObjectSchema) });

export const sharingAgreementObjectSchema: zod.ZodSchema<SharingAgreementObject> =
  zod.object({
    created_at: zod.string(),
    id: zod.number(),
    name: zod.string(),
    partner_name: zod.string().nullable(),
    remote_subdomain: zod.string(),
    status: zod.string(),
    type: zod.string(),
    url: zod.string(),
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
    created_at: zod.string(),
    id: zod.string(),
    name: zod.string(),
    updated_at: zod.string(),
    url: zod.string(),
  });

export const skillBasedRoutingAttributeResponseSchema: zod.ZodSchema<SkillBasedRoutingAttributeResponse> =
  zod.object({ attribute: skillBasedRoutingAttributeObjectSchema });

export const skillBasedRoutingAttributeValueObjectSchema: zod.ZodSchema<SkillBasedRoutingAttributeValueObject> =
  zod.object({
    attribute_id: zod.string(),
    created_at: zod.string(),
    id: zod.string(),
    name: zod.string(),
    updated_at: zod.string(),
    url: zod.string(),
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
    brand_id: zod.number(),
    cname_status: zod.union([
      zod.literal("unknown"),
      zod.literal("verified"),
      zod.literal("failed"),
    ]),
    created_at: zod.string(),
    default: zod.boolean(),
    dns_results: zod.union([zod.literal("verified"), zod.literal("failed")]),
    domain_verification_code: zod.string(),
    domain_verification_status: zod.union([
      zod.literal("unknown"),
      zod.literal("verified"),
      zod.literal("failed"),
    ]),
    email: zod.string(),
    forwarding_status: zod.union([
      zod.literal("unknown"),
      zod.literal("waiting"),
      zod.literal("verified"),
      zod.literal("failed"),
    ]),
    id: zod.number(),
    name: zod.string(),
    spf_status: zod.union([
      zod.literal("unknown"),
      zod.literal("verified"),
      zod.literal("failed"),
    ]),
    updated_at: zod.string(),
  });

export const supportAddressResponseSchema: zod.ZodSchema<SupportAddressResponse> =
  zod.object({ recipient_address: supportAddressObjectSchema });

export const supportAddressesResponseSchema: zod.ZodSchema<SupportAddressesResponse> =
  zod.object({ recipient_addresses: zod.array(supportAddressObjectSchema) });

export const suspendedTicketsAttachmentsResponseSchema: zod.ZodSchema<SuspendedTicketsAttachmentsResponse> =
  zod.object({
    upload: zod.object({
      attachments: zod.array(attachmentObjectSchema),
      token: zod.string(),
    }),
  });

export const suspendedTicketsExportResponseSchema: zod.ZodSchema<SuspendedTicketsExportResponse> =
  zod.object({
    export: zod.object({ status: zod.string(), view_id: zod.string() }),
  });

export const systemFieldOptionObjectSchema: zod.ZodSchema<SystemFieldOptionObject> =
  zod.object({ name: zod.string(), value: zod.string() });

export const tagCountObjectSchema: zod.ZodSchema<TagCountObject> = zod.object({
  refreshed_at: zod.string(),
  value: zod.number(),
});

export const tagCountResponseSchema: zod.ZodSchema<TagCountResponse> =
  zod.object({ count: tagCountObjectSchema });

export const tagListTagObjectSchema: zod.ZodSchema<TagListTagObject> =
  zod.object({ count: zod.number(), name: zod.string() });

export const tagUrlObjectSchema: zod.ZodSchema<TagUrlObject> = zod.object({
  url: zod.string(),
});

export const tagsByObjectIdResponseSchema: zod.ZodSchema<TagsByObjectIdResponse> =
  zod.object({ tags: zod.array(zod.string()) });

export const tagsResponseSchema: zod.ZodSchema<TagsResponse> = zod.object({
  count: zod.number(),
  next_page: zod.string().nullable(),
  previous_page: zod.string().nullable(),
  tags: zod.array(tagListTagObjectSchema),
});

export const targetBasecampSchema: zod.ZodSchema<TargetBasecamp> = zod.object({
  message_id: zod.string(),
  password: zod.string(),
  project_id: zod.string(),
  resource: zod.string(),
  target_url: zod.string(),
  todo_list_id: zod.string(),
  token: zod.string(),
  username: zod.string(),
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
    attribute: zod.string(),
    from: zod.string(),
    method: zod.string(),
    password: zod.string(),
    target_url: zod.string(),
    to: zod.string(),
    us_small_business_account: zod.string(),
    username: zod.string(),
  });

export const targetCommonFieldsSchema: zod.ZodSchema<TargetCommonFields> =
  zod.object({
    active: zod.boolean(),
    created_at: zod.string(),
    id: zod.number(),
    title: zod.string(),
    type: zod.string(),
  });

export const targetEmailSchema: zod.ZodSchema<TargetEmail> = zod.object({
  email: zod.string(),
  subject: zod.string(),
});

export const targetFailureObjectSchema: zod.ZodSchema<TargetFailureObject> =
  zod.object({
    consecutive_failure_count: zod.number(),
    created_at: zod.string(),
    id: zod.number(),
    raw_request: zod.string(),
    raw_response: zod.string(),
    status_code: zod.number(),
    target_name: zod.string(),
    url: zod.string(),
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
    password: zod.string(),
    target_url: zod.string(),
  });

export const targetHttpSchema: zod.ZodSchema<TargetHTTP> = zod.object({
  content_type: zod.string(),
  method: zod.string(),
  password: zod.string(),
  target_url: zod.string(),
  username: zod.string(),
});

export const targetJiraSchema: zod.ZodSchema<TargetJira> = zod.object({
  password: zod.string(),
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
  secret: zod.string(),
  token: zod.string(),
});

export const targetUrlSchema: zod.ZodSchema<TargetURL> = zod.object({
  attribute: zod.string(),
  method: zod.string(),
  password: zod.string(),
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
  zod.object({ channel: zod.string(), source: zod.record(zod.unknown()) });

export const requestObjectSchema: zod.ZodSchema<RequestObject> = zod.object({
  assignee_id: zod.number(),
  can_be_solved_by_me: zod.boolean(),
  collaborator_ids: zod.array(zod.number()),
  created_at: zod.string(),
  custom_fields: zod.array(
    zod.object({ id: zod.number(), value: zod.string() }),
  ),
  custom_status_id: zod.number(),
  description: zod.string(),
  due_at: zod.string(),
  email_cc_ids: zod.array(zod.number()),
  followup_source_id: zod.number(),
  group_id: zod.number(),
  id: zod.number(),
  is_public: zod.boolean(),
  organization_id: zod.number(),
  priority: zod.string(),
  recipient: zod.string(),
  requester_id: zod.number(),
  solved: zod.boolean(),
  status: zod.string(),
  subject: zod.string(),
  ticket_form_id: zod.number(),
  type: zod.string(),
  updated_at: zod.string(),
  url: zod.string(),
  via: ticketAuditViaObjectSchema,
});

export const requestResponseSchema: zod.ZodSchema<RequestResponse> = zod.object(
  { request: requestObjectSchema },
);

export const requestsResponseSchema: zod.ZodSchema<RequestsResponse> =
  zod.object({ requests: zod.array(requestObjectSchema) });

export const ticketAuditObjectSchema: zod.ZodSchema<TicketAuditObject> =
  zod.object({
    author_id: zod.number(),
    created_at: zod.string(),
    events: zod.array(zod.record(zod.unknown())),
    id: zod.number(),
    metadata: zod.record(zod.unknown()),
    ticket_id: zod.number(),
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
    chat_event: zod.object({
      id: zod.number(),
      type: zod.string(),
      value: zod.object({
        chat_id: zod.string(),
        history: zod.array(zod.record(zod.unknown())),
        visitor_id: zod.string(),
      }),
    }),
  });

export const ticketCommentObjectSchema: zod.ZodSchema<TicketCommentObject> =
  zod.object({
    attachments: zod.array(attachmentObjectSchema),
    audit_id: zod.number(),
    author_id: zod.number(),
    body: zod.string(),
    created_at: zod.string(),
    html_body: zod.string(),
    id: zod.number(),
    metadata: zod.record(zod.unknown()),
    plain_body: zod.string(),
    public: zod.boolean(),
    type: zod.string(),
    uploads: zod.array(zod.string()),
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
    answered_by_id: zod.number(),
    call_duration: zod.number(),
    from: zod.string(),
    location: zod.string(),
    recording_url: zod.string(),
    started_at: zod.string(),
    to: zod.string(),
    transcription_text: zod.string(),
  });

export const ticketCreateVoicemailTicketInputSchema: zod.ZodSchema<TicketCreateVoicemailTicketInput> =
  zod.object({
    comment: ticketCommentObjectSchema,
    priority: zod.union([
      zod.literal("urgent"),
      zod.literal("high"),
      zod.literal("normal"),
      zod.literal("low"),
    ]),
    via_id: zod.union([zod.literal(44), zod.literal(45), zod.literal(46)]),
    voice_comment: ticketCreateVoicemailTicketVoiceCommentInputSchema,
  });

export const ticketCreateVoicemailTicketRequestSchema: zod.ZodSchema<TicketCreateVoicemailTicketRequest> =
  zod.object({
    display_to_agent: zod.number(),
    ticket: ticketCreateVoicemailTicketInputSchema,
  });

export const ticketFieldCountResponseSchema: zod.ZodSchema<TicketFieldCountResponse> =
  zod.object({
    count: zod.object({ refreshed_at: zod.string(), value: zod.number() }),
  });

export const ticketFieldCustomStatusObjectSchema: zod.ZodSchema<TicketFieldCustomStatusObject> =
  zod.object({
    active: zod.boolean(),
    agent_label: zod.string(),
    created_at: zod.string(),
    default: zod.boolean(),
    description: zod.string(),
    end_user_description: zod.string(),
    end_user_label: zod.string(),
    id: zod.number(),
    status_category: zod.union([
      zod.literal("new"),
      zod.literal("open"),
      zod.literal("pending"),
      zod.literal("hold"),
      zod.literal("solved"),
    ]),
    updated_at: zod.string(),
  });

export const ticketFieldObjectSchema: zod.ZodSchema<TicketFieldObject> =
  zod.object({
    active: zod.boolean(),
    agent_description: zod.string(),
    collapsed_for_agents: zod.boolean(),
    created_at: zod.string(),
    creator_app_name: zod.string(),
    creator_user_id: zod.number(),
    custom_field_options: zod.array(customFieldOptionObjectSchema),
    custom_statuses: zod.array(ticketFieldCustomStatusObjectSchema),
    description: zod.string(),
    editable_in_portal: zod.boolean(),
    id: zod.number(),
    position: zod.number(),
    raw_description: zod.string(),
    raw_title: zod.string(),
    raw_title_in_portal: zod.string(),
    regexp_for_validation: zod.string().nullable(),
    relationship_filter: zod.record(zod.unknown()),
    relationship_target_type: zod.string(),
    removable: zod.boolean(),
    required: zod.boolean(),
    required_in_portal: zod.boolean(),
    sub_type_id: zod.number(),
    system_field_options: zod.array(systemFieldOptionObjectSchema),
    tag: zod.string().nullable(),
    title: zod.string(),
    title_in_portal: zod.string(),
    type: zod.string(),
    updated_at: zod.string(),
    url: zod.string(),
    visible_in_portal: zod.boolean(),
  });

export const ticketFieldResponseSchema: zod.ZodSchema<TicketFieldResponse> =
  zod.object({ ticket_field: ticketFieldObjectSchema });

export const ticketFieldsResponseSchema: zod.ZodSchema<TicketFieldsResponse> =
  zod.object({ ticket_fields: zod.array(ticketFieldObjectSchema) });

export const ticketFormObjectSchema: zod.ZodSchema<TicketFormObject> =
  zod.object({
    active: zod.boolean(),
    agent_conditions: zod.array(zod.record(zod.unknown())),
    created_at: zod.string(),
    default: zod.boolean(),
    display_name: zod.string(),
    end_user_conditions: zod.array(zod.record(zod.unknown())),
    end_user_visible: zod.boolean(),
    id: zod.number(),
    in_all_brands: zod.boolean(),
    name: zod.string(),
    position: zod.number(),
    raw_display_name: zod.string(),
    raw_name: zod.string(),
    restricted_brand_ids: zod.array(zod.number()),
    ticket_field_ids: zod.array(zod.number()),
    updated_at: zod.string(),
    url: zod.string(),
  });

export const ticketFormResponseSchema: zod.ZodSchema<TicketFormResponse> =
  zod.object({ ticket_form: ticketFormObjectSchema });

export const ticketFormsResponseSchema: zod.ZodSchema<TicketFormsResponse> =
  zod.object({ ticket_forms: zod.array(ticketFormObjectSchema) });

export const ticketImportInputSchema: zod.ZodSchema<TicketImportInput> =
  zod.object({
    assignee_id: zod.number(),
    comments: zod.array(
      zod.intersection(
        zod.object({ value: zod.string() }),
        ticketCommentObjectSchema,
      ),
    ),
    description: zod.string(),
    requester_id: zod.number(),
    subject: zod.string(),
    tags: zod.array(zod.string()),
  });

export const ticketBulkImportRequestSchema: zod.ZodSchema<TicketBulkImportRequest> =
  zod.object({ tickets: zod.array(ticketImportInputSchema) });

export const ticketImportRequestSchema: zod.ZodSchema<TicketImportRequest> =
  zod.object({ ticket: ticketImportInputSchema });

export const ticketMergeInputSchema: zod.ZodSchema<TicketMergeInput> =
  zod.object({
    ids: zod.array(zod.unknown()),
    source_comment: zod.string(),
    source_comment_is_public: zod.boolean(),
    target_comment: zod.string(),
    target_comment_is_public: zod.boolean(),
  });

export const ticketMetricEventBaseObjectSchema: zod.ZodSchema<TicketMetricEventBaseObject> =
  zod.object({
    id: zod.number(),
    instance_id: zod.number(),
    metric: zod.union([
      zod.literal("agent_work_time"),
      zod.literal("pausable_update_time"),
      zod.literal("periodic_update_time"),
      zod.literal("reply_time"),
      zod.literal("requester_wait_time"),
      zod.literal("resolution_time"),
    ]),
    ticket_id: zod.number(),
    time: zod.string(),
    type: zod.union([
      zod.literal("activate"),
      zod.literal("pause"),
      zod.literal("fulfill"),
      zod.literal("apply_sla"),
      zod.literal("breach"),
      zod.literal("update_status"),
      zod.literal("measure"),
    ]),
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
    zod.object({ deleted: zod.boolean() }),
  );

export const ticketMetricEventGroupSlaObjectSchema: zod.ZodSchema<TicketMetricEventGroupSLAObject> =
  zod.intersection(
    ticketMetricEventBaseObjectSchema,
    zod.object({ group_sla: zod.record(zod.unknown()) }),
  );

export const ticketMetricEventSlaObjectSchema: zod.ZodSchema<TicketMetricEventSLAObject> =
  zod.intersection(
    ticketMetricEventBaseObjectSchema,
    zod.object({ sla: zod.record(zod.unknown()) }),
  );

export const ticketMetricEventUpdateStatusObjectSchema: zod.ZodSchema<TicketMetricEventUpdateStatusObject> =
  zod.intersection(
    ticketMetricEventBaseObjectSchema,
    zod.object({ status: zod.record(zod.unknown()) }),
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
  zod.object({ business: zod.number(), calendar: zod.number() });

export const ticketMetricObjectSchema: zod.ZodSchema<TicketMetricObject> =
  zod.object({
    agent_wait_time_in_minutes: ticketMetricTimeObjectSchema,
    assigned_at: zod.string(),
    assignee_stations: zod.number(),
    assignee_updated_at: zod.string(),
    created_at: zod.string(),
    custom_status_updated_at: zod.string(),
    first_resolution_time_in_minutes: ticketMetricTimeObjectSchema,
    full_resolution_time_in_minutes: ticketMetricTimeObjectSchema,
    group_stations: zod.number(),
    id: zod.number(),
    initially_assigned_at: zod.string(),
    latest_comment_added_at: zod.string(),
    on_hold_time_in_minutes: ticketMetricTimeObjectSchema,
    reopens: zod.number(),
    replies: zod.number(),
    reply_time_in_minutes: ticketMetricTimeObjectSchema,
    reply_time_in_seconds: ticketMetricTimeObjectSchema,
    requester_updated_at: zod.string(),
    requester_wait_time_in_minutes: ticketMetricTimeObjectSchema,
    solved_at: zod.string(),
    status_updated_at: zod.string(),
    ticket_id: zod.number(),
    updated_at: zod.string(),
    url: zod.string(),
  });

export const ticketMetricsByTicketMetricIdResponseSchema: zod.ZodSchema<TicketMetricsByTicketMetricIdResponse> =
  zod.object({ ticket_metric: zod.array(ticketMetricObjectSchema) });

export const ticketMetricsResponseSchema: zod.ZodSchema<TicketMetricsResponse> =
  zod.object({ ticket_metrics: zod.array(ticketMetricObjectSchema) });

export const ticketObjectSchema: zod.ZodSchema<TicketObject> = zod.object({
  allow_attachments: zod.boolean(),
  allow_channelback: zod.boolean(),
  assignee_email: zod.string(),
  assignee_id: zod.number(),
  attribute_value_ids: zod.array(zod.unknown()),
  brand_id: zod.number(),
  collaborator_ids: zod.array(zod.unknown()),
  collaborators: zod.array(collaboratorObjectSchema),
  comment: zod.record(zod.unknown()),
  created_at: zod.string(),
  custom_fields: zod.array(zod.unknown()),
  custom_status_id: zod.number(),
  description: zod.string(),
  due_at: zod.string().nullable(),
  email_cc_ids: zod.array(zod.unknown()),
  email_ccs: zod.record(zod.unknown()),
  external_id: zod.string(),
  follower_ids: zod.array(zod.unknown()),
  followers: zod.record(zod.unknown()),
  followup_ids: zod.array(zod.unknown()),
  forum_topic_id: zod.number(),
  from_messaging_channel: zod.boolean(),
  group_id: zod.number(),
  has_incidents: zod.boolean(),
  id: zod.number(),
  is_public: zod.boolean(),
  macro_id: zod.number(),
  macro_ids: zod.array(zod.unknown()),
  metadata: zod.record(zod.unknown()),
  organization_id: zod.number(),
  priority: zod.union([
    zod.literal("urgent"),
    zod.literal("high"),
    zod.literal("normal"),
    zod.literal("low"),
  ]),
  problem_id: zod.number(),
  raw_subject: zod.string(),
  recipient: zod.string(),
  requester: zod.record(zod.unknown()),
  requester_id: zod.number(),
  safe_update: zod.boolean(),
  satisfaction_rating: zod.record(zod.unknown()),
  sharing_agreement_ids: zod.array(zod.unknown()),
  status: zod.union([
    zod.literal("new"),
    zod.literal("open"),
    zod.literal("pending"),
    zod.literal("hold"),
    zod.literal("solved"),
    zod.literal("closed"),
  ]),
  subject: zod.string(),
  submitter_id: zod.number(),
  tags: zod.array(zod.unknown()),
  ticket_form_id: zod.number(),
  type: zod.union([
    zod.literal("problem"),
    zod.literal("incident"),
    zod.literal("question"),
    zod.literal("task"),
  ]),
  updated_at: zod.string(),
  updated_stamp: zod.string(),
  url: zod.string(),
  via: zod.object({ channel: zod.string(), source: zod.record(zod.unknown()) }),
  via_followup_source_id: zod.number(),
  via_id: zod.number(),
  voice_comment: zod.record(zod.unknown()),
});

export const bookmarkObjectSchema: zod.ZodSchema<BookmarkObject> = zod.object({
  created_at: zod.string(),
  id: zod.number(),
  ticket: ticketObjectSchema,
  url: zod.string(),
});

export const bookmarkResponseSchema: zod.ZodSchema<BookmarkResponse> =
  zod.object({ bookmark: bookmarkObjectSchema });

export const bookmarksResponseSchema: zod.ZodSchema<BookmarksResponse> =
  zod.intersection(
    offsetPaginationObjectSchema,
    zod.object({ bookmarks: zod.array(bookmarkObjectSchema) }),
  );

export const cursorBasedExportIncrementalTicketsResponseSchema: zod.ZodSchema<CursorBasedExportIncrementalTicketsResponse> =
  zod.object({
    after_cursor: zod.string().nullable(),
    after_url: zod.string().nullable(),
    before_cursor: zod.string().nullable(),
    before_url: zod.string().nullable(),
    end_of_stream: zod.boolean(),
    tickets: zod.array(ticketObjectSchema),
  });

export const ticketRelatedInformationSchema: zod.ZodSchema<TicketRelatedInformation> =
  zod.object({
    followup_source_ids: zod.array(zod.string()),
    from_archive: zod.boolean(),
    incidents: zod.number(),
    topic_id: zod.string().nullable(),
    twitter: zod.record(zod.unknown()),
  });

export const ticketResponseSchema: zod.ZodSchema<TicketResponse> = zod.object({
  ticket: ticketObjectSchema,
});

export const ticketSkipObjectSchema: zod.ZodSchema<TicketSkipObject> =
  zod.object({
    created_at: zod.string(),
    id: zod.number(),
    reason: zod.string(),
    ticket: ticketObjectSchema,
    ticket_id: zod.number(),
    updated_at: zod.string(),
    user_id: zod.number(),
  });

export const ticketSkipCreationSchema: zod.ZodSchema<TicketSkipCreation> =
  zod.object({ skip: ticketSkipObjectSchema });

export const ticketSkipsResponseSchema: zod.ZodSchema<TicketSkipsResponse> =
  zod.object({ skips: zod.array(ticketSkipObjectSchema) });

export const ticketUpdateInputSchema: zod.ZodSchema<TicketUpdateInput> =
  zod.object({
    additional_collaborators: zod.array(collaboratorObjectSchema),
    assignee_email: zod.string(),
    assignee_id: zod.number(),
    attribute_value_ids: zod.array(zod.number()),
    collaborator_ids: zod.array(zod.unknown()),
    comment: ticketCommentObjectSchema,
    custom_fields: zod.array(zod.unknown()),
    custom_status_id: zod.number(),
    due_at: zod.string().nullable(),
    email_ccs: zod.array(emailCcObjectSchema),
    external_id: zod.string(),
    followers: zod.array(followerObjectSchema),
    group_id: zod.number(),
    organization_id: zod.number(),
    priority: zod.union([
      zod.literal("urgent"),
      zod.literal("high"),
      zod.literal("normal"),
      zod.literal("low"),
    ]),
    problem_id: zod.number(),
    requester_id: zod.number(),
    safe_update: zod.boolean(),
    sharing_agreement_ids: zod.array(zod.number()),
    status: zod.union([
      zod.literal("new"),
      zod.literal("open"),
      zod.literal("pending"),
      zod.literal("hold"),
      zod.literal("solved"),
      zod.literal("closed"),
    ]),
    subject: zod.string(),
    tags: zod.array(zod.unknown()),
    type: zod.union([
      zod.literal("problem"),
      zod.literal("incident"),
      zod.literal("question"),
      zod.literal("task"),
    ]),
    updated_stamp: zod.string(),
  });

export const ticketUpdateRequestSchema: zod.ZodSchema<TicketUpdateRequest> =
  zod.object({ ticket: ticketUpdateInputSchema });

export const ticketsResponseSchema: zod.ZodSchema<TicketsResponse> = zod.object(
  { tickets: zod.array(ticketObjectSchema) },
);

export const timeBasedExportIncrementalTicketsResponseSchema: zod.ZodSchema<TimeBasedExportIncrementalTicketsResponse> =
  zod.object({
    count: zod.number(),
    end_of_stream: zod.boolean(),
    end_time: zod.number(),
    next_page: zod.string().nullable(),
    tickets: zod.array(ticketObjectSchema),
  });

export const trialAccountObjectSchema: zod.ZodSchema<TrialAccountObject> =
  zod.object({
    name: zod.string(),
    subdomain: zod.string(),
    url: zod.string(),
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
    active: zod.boolean(),
    category_id: zod.string(),
    id: zod.number(),
    position: zod.number(),
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
  zod.record(zod.unknown());

export const triggerCategoryResponseSchema: zod.ZodSchema<TriggerCategoryResponse> =
  zod.object({ trigger_category: triggerCategorySchema });

export const triggerCategoryRuleCountsSchema: zod.ZodSchema<TriggerCategoryRuleCounts> =
  zod.object({ active_count: zod.number(), inactive_count: zod.number() });

export const triggerCategoriesResponseSchema: zod.ZodSchema<TriggerCategoriesResponse> =
  zod.object({ trigger_categories: zod.array(triggerCategorySchema) });

export const triggerChangeObjectSchema: zod.ZodSchema<TriggerChangeObject> =
  zod.object({
    change: zod.string(),
    content: zod.union([
      zod.boolean(),
      zod.string(),
      zod.number(),
      zod.array(zod.unknown()),
    ]),
  });

export const triggerActionDiffObjectSchema: zod.ZodSchema<TriggerActionDiffObject> =
  zod.object({
    field: zod.array(triggerChangeObjectSchema),
    value: zod.array(triggerChangeObjectSchema),
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
    field: zod.array(triggerChangeObjectSchema),
    operator: zod.array(triggerChangeObjectSchema),
    value: zod.array(triggerChangeObjectSchema),
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
  zod.object({
    all: zod.array(triggerConditionObjectSchema).nullable(),
    any: zod.array(triggerConditionObjectSchema).nullable(),
  });

export const triggerDefinitionObjectSchema: zod.ZodSchema<TriggerDefinitionObject> =
  zod.object({
    actions: zod.array(triggerActionDefinitionObjectSchema),
    conditions_all: zod.array(triggerConditionDefinitionObjectAllSchema),
    conditions_any: zod.array(triggerConditionDefinitionObjectAnySchema),
  });

export const triggerDefinitionResponseSchema: zod.ZodSchema<TriggerDefinitionResponse> =
  zod.object({ definitions: triggerDefinitionObjectSchema });

export const triggerObjectSchema: zod.ZodSchema<TriggerObject> = zod.object({
  actions: zod.array(triggerActionObjectSchema),
  active: zod.boolean(),
  category_id: zod.string(),
  conditions: triggerConditionsObjectSchema,
  created_at: zod.string(),
  default: zod.boolean(),
  description: zod.string(),
  id: zod.number(),
  position: zod.number(),
  raw_title: zod.string(),
  title: zod.string(),
  updated_at: zod.string(),
  url: zod.string(),
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
    actions: zod.array(triggerActionObjectSchema),
    active: zod.boolean(),
    conditions: triggerConditionsObjectSchema,
    description: zod.string().nullable(),
    title: zod.string(),
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
          actions: zod.array(triggerActionDiffObjectSchema),
          active: zod.array(triggerChangeObjectSchema),
          conditions: triggerConditionDiffObjectSchema,
          description: zod.array(triggerChangeObjectSchema),
          source_id: zod.number(),
          target_id: zod.number(),
          title: zod.array(triggerChangeObjectSchema),
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
    allow_reply: zod.boolean(),
    avatar_url: zod.string(),
    brand_id: zod.number(),
    can_reply: zod.boolean(),
    created_at: zod.string(),
    id: zod.number(),
    name: zod.string(),
    screen_name: zod.string(),
    twitter_user_id: zod.number(),
    updated_at: zod.string(),
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
    action: zod.string(),
    id: zod.number(),
    status: zod.string(),
    success: zod.boolean(),
  });

export const jobStatusResultObjectSchema: zod.ZodSchema<JobStatusResultObject> =
  zod.union([createResourceResultSchema, updateResourceResultSchema]);

export const jobStatusObjectSchema: zod.ZodSchema<JobStatusObject> = zod.object(
  {
    id: zod.string(),
    job_type: zod.string(),
    message: zod.string().nullable(),
    progress: zod.number().nullable(),
    results: zod.union([
      zod.array(jobStatusResultObjectSchema).nullable(),
      zod.object({ success: zod.boolean() }),
    ]),
    status: zod.string(),
    total: zod.number().nullable(),
    url: zod.string(),
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
    count: zod.number(),
    next_page: zod.string().nullable(),
    previous_page: zod.string().nullable(),
    user_fields: zod.array(userFieldObjectSchema),
  });

export const userForAdminSchema: zod.ZodSchema<UserForAdmin> = zod.object({
  active: zod.boolean(),
  alias: zod.string(),
  chat_only: zod.boolean(),
  created_at: zod.string(),
  custom_role_id: zod.number().nullable(),
  default_group_id: zod.number(),
  details: zod.string(),
  email: zod.string(),
  external_id: zod.string().nullable(),
  iana_time_zone: zod.string(),
  id: zod.number(),
  last_login_at: zod.string(),
  locale: zod.string(),
  locale_id: zod.number(),
  moderator: zod.boolean(),
  name: zod.string(),
  notes: zod.string(),
  only_private_comments: zod.boolean(),
  organization_id: zod.number().nullable(),
  phone: zod.string().nullable(),
  photo: zod.record(zod.unknown()).nullable(),
  remote_photo_url: zod.string(),
  report_csv: zod.boolean(),
  restricted_agent: zod.boolean(),
  role: zod.string(),
  role_type: zod.number().nullable(),
  shared: zod.boolean(),
  shared_agent: zod.boolean(),
  shared_phone_number: zod.boolean().nullable(),
  signature: zod.string(),
  suspended: zod.boolean(),
  tags: zod.array(zod.unknown()),
  ticket_restriction: zod.string().nullable(),
  time_zone: zod.string(),
  two_factor_auth_enabled: zod.boolean().nullable(),
  updated_at: zod.string(),
  url: zod.string(),
  user_fields: zod.record(zod.unknown()),
  verified: zod.boolean(),
});

export const userForEndUserSchema: zod.ZodSchema<UserForEndUser> = zod.object({
  created_at: zod.string(),
  email: zod.string(),
  iana_time_zone: zod.string(),
  id: zod.number(),
  locale: zod.string(),
  locale_id: zod.number(),
  name: zod.string(),
  organization_id: zod.number(),
  phone: zod.string(),
  photo: zod.record(zod.unknown()),
  role: zod.string(),
  shared_phone_number: zod.boolean(),
  time_zone: zod.string(),
  updated_at: zod.string(),
  url: zod.string(),
  verified: zod.boolean(),
});

export const userIdentityObjectSchema: zod.ZodSchema<UserIdentityObject> =
  zod.object({
    created_at: zod.string(),
    deliverable_state: zod.string(),
    id: zod.number(),
    primary: zod.boolean(),
    type: zod.union([
      zod.literal("email"),
      zod.literal("twitter"),
      zod.literal("facebook"),
      zod.literal("google"),
      zod.literal("phone_number"),
      zod.literal("agent_forwarding"),
      zod.literal("any_channel"),
      zod.literal("foreign"),
      zod.literal("sdk"),
    ]),
    undeliverable_count: zod.number(),
    updated_at: zod.string(),
    url: zod.string(),
    user_id: zod.number(),
    value: zod.string(),
    verified: zod.boolean(),
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
  actor: userObjectSchema,
  actor_id: zod.number(),
  created_at: zod.string(),
  id: zod.number(),
  object: zod.record(zod.unknown()),
  target: zod.record(zod.unknown()),
  title: zod.string(),
  updated_at: zod.string(),
  url: zod.string(),
  user: userObjectSchema,
  user_id: zod.number(),
  verb: zod.string(),
});

export const activitiesResponseSchema: zod.ZodSchema<ActivitiesResponse> =
  zod.object({
    activities: zod.array(activityObjectSchema),
    actors: zod.array(zod.record(zod.unknown())),
    count: zod.number(),
    next_page: zod.string().nullable(),
    previous_page: zod.string().nullable(),
    users: zod.array(zod.record(zod.unknown())),
  });

export const activityResponseSchema: zod.ZodSchema<ActivityResponse> =
  zod.object({ activity: activityObjectSchema });

export const currentUserResponseSchema: zod.ZodSchema<CurrentUserResponse> =
  zod.object({
    user: zod.intersection(
      userObjectSchema,
      zod.object({ authenticity_token: zod.string() }),
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
    assigned_tickets: zod.number(),
    ccd_tickets: zod.number(),
    organization_subscriptions: zod.number(),
    requested_tickets: zod.number(),
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

export const viaObjectSchema: zod.ZodSchema<ViaObject> = zod.object({
  channel: zod.string(),
  source: zod.object({
    from: zod.object({
      address: zod.string().nullable(),
      id: zod.number().nullable(),
      name: zod.string().nullable(),
      title: zod.string().nullable(),
    }),
    rel: zod.string().nullable(),
    to: zod.object({ address: zod.string(), name: zod.string() }),
  }),
});

export const auditObjectSchema: zod.ZodSchema<AuditObject> = zod.object({
  author_id: zod.number(),
  created_at: zod.string(),
  events: zod.array(zod.unknown()),
  id: zod.number(),
  metadata: zod.record(zod.unknown()),
  ticket_id: zod.number(),
  via: viaObjectSchema,
});

export const suspendedTicketObjectSchema: zod.ZodSchema<SuspendedTicketObject> =
  zod.object({
    attachments: zod.array(attachmentObjectSchema).nullable(),
    author: authorObjectSchema,
    brand_id: zod.number(),
    cause: zod.string(),
    cause_id: zod.number(),
    content: zod.string(),
    created_at: zod.string(),
    error_messages: zod.array(zod.record(zod.unknown())).nullable(),
    id: zod.number(),
    message_id: zod.string(),
    recipient: zod.string(),
    subject: zod.string(),
    ticket_id: zod.number(),
    updated_at: zod.string(),
    url: zod.string(),
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
      brand_id: zod.number(),
      collaborators: zod.array(zod.unknown()),
      email_cc_ids: zod.array(zod.unknown()),
      follower_ids: zod.array(zod.unknown()),
      macro_ids: zod.array(zod.unknown()),
      raw_subject: zod.string(),
      recipient: zod.string(),
      submitter_id: zod.number(),
      ticket_form_id: zod.number(),
      via: viaObjectSchema,
      via_followup_source_id: zod.number(),
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
    active: zod.boolean(),
    fresh: zod.boolean(),
    pretty: zod.string(),
    url: zod.string(),
    value: zod.number().nullable(),
    view_id: zod.number(),
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
  active: zod.boolean(),
  conditions: zod.record(zod.unknown()),
  created_at: zod.string(),
  default: zod.boolean(),
  description: zod.string(),
  execution: zod.record(zod.unknown()),
  id: zod.number(),
  position: zod.number(),
  restriction: zod.record(zod.unknown()),
  title: zod.string(),
  updated_at: zod.string(),
});

export const viewResponseSchema: zod.ZodSchema<ViewResponse> = zod.object({
  columns: zod.array(zod.record(zod.unknown())),
  groups: zod.array(zod.record(zod.unknown())),
  rows: zod.array(zod.record(zod.unknown())),
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
  description: zod.string(),
  macros: zod.array(zod.number()),
  ticket_form_id: zod.number(),
  title: zod.string(),
});

export const workspaceObjectSchema: zod.ZodSchema<WorkspaceObject> = zod.object(
  {
    activated: zod.boolean(),
    apps: zod.array(zod.record(zod.unknown())),
    conditions: conditionsObjectSchema,
    created_at: zod.string(),
    description: zod.string(),
    id: zod.number(),
    macro_ids: zod.array(zod.number()),
    macros: zod.array(zod.number()),
    position: zod.number(),
    prefer_workspace_app_order: zod.boolean(),
    selected_macros: zod.array(macroObjectSchema),
    ticket_form_id: zod.number(),
    title: zod.string(),
    updated_at: zod.string(),
    url: zod.string(),
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
}> = zod.object({ count: zod.record(zod.unknown()) });

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
}> = zod.object({ actions: zod.array(zod.record(zod.unknown())) });

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
  definitions: zod.object({ actions: zod.array(zod.record(zod.unknown())) }),
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
  zod.string();

export const postApiV2AnyChannelPushResponseSchema: zod.ZodSchema<ChannelFrameworkPushResultsResponse> =
  channelFrameworkPushResultsResponseSchema;

export const postApiV2AnyChannelValidateTokenResponseSchema: zod.ZodSchema<string> =
  zod.string();

export const postApiV2BookmarksResponseSchema: zod.ZodSchema<BookmarkResponse> =
  bookmarkResponseSchema;

export const postApiV2ChannelsVoiceAgentsByAgentIdTicketsByTicketIdDisplayResponseSchema: zod.ZodSchema<string> =
  zod.string();

export const postApiV2ChannelsVoiceAgentsByAgentIdUsersByUserIdDisplayResponseSchema: zod.ZodSchema<string> =
  zod.string();

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
  zod.string();

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
  zod.string();

export const postApiV2UsersCreateManyResponseSchema: zod.ZodSchema<JobStatusResponse> =
  jobStatusResponseSchema;

export const postApiV2UsersCreateOrUpdateResponseSchema: zod.ZodSchema<UserResponse> =
  userResponseSchema;

export const postApiV2UsersCreateOrUpdateManyResponseSchema: zod.ZodSchema<JobStatusResponse> =
  jobStatusResponseSchema;

export const postApiV2UsersRequestCreateResponseSchema: zod.ZodSchema<string> =
  zod.string();

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
  zod.string();

export const putApiV2CustomRolesByCustomRoleIdResponseSchema: zod.ZodSchema<CustomRoleResponse> =
  customRoleResponseSchema;

export const putApiV2CustomStatusDefaultResponseSchema: zod.ZodSchema<BulkUpdateDefaultCustomStatusResponse> =
  bulkUpdateDefaultCustomStatusResponseSchema;

export const putApiV2CustomStatusesByCustomStatusIdResponseSchema: zod.ZodSchema<CustomStatusResponse> =
  customStatusResponseSchema;

export const putApiV2DeletedTicketsByTicketIdRestoreResponseSchema: zod.ZodSchema<string> =
  zod.string();

export const putApiV2DeletedTicketsRestoreManyResponseSchema: zod.ZodSchema<string> =
  zod.string();

export const putApiV2DynamicContentItemsByDynamicContentItemIdResponseSchema: zod.ZodSchema<DynamicContentResponse> =
  dynamicContentResponseSchema;

export const putApiV2DynamicContentItemsByDynamicContentItemIdVariantsByDynammicContentVariantIdResponseSchema: zod.ZodSchema<DynamicContentVariantResponse> =
  dynamicContentVariantResponseSchema;

export const putApiV2DynamicContentItemsByDynamicContentItemIdVariantsUpdateManyResponseSchema: zod.ZodSchema<DynamicContentVariantsResponse> =
  dynamicContentVariantsResponseSchema;

export const putApiV2GroupSlasPoliciesByGroupSlaPolicyIdResponseSchema: zod.ZodSchema<GroupSLAPolicyResponse> =
  groupSlaPolicyResponseSchema;

export const putApiV2GroupSlasPoliciesReorderResponseSchema: zod.ZodSchema<string> =
  zod.string();

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
  zod.string();

export const putApiV2OrganizationsByOrganizationIdResponseSchema: zod.ZodSchema<OrganizationResponse> =
  organizationResponseSchema;

export const putApiV2OrganizationsUpdateManyResponseSchema: zod.ZodSchema<JobStatusResponse> =
  jobStatusResponseSchema;

export const putApiV2RecipientAddressesBySupportAddressIdResponseSchema: zod.ZodSchema<SupportAddressResponse> =
  supportAddressResponseSchema;

export const putApiV2RecipientAddressesBySupportAddressIdVerifyResponseSchema: zod.ZodSchema<string> =
  zod.string();

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
  zod.string();

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
  zod.string();

export const putApiV2TicketsByTicketIdCommentsByCommentIdAttachmentsByAttachmentIdRedactResponseSchema: zod.ZodSchema<AttachmentResponse> =
  attachmentResponseSchema;

export const putApiV2TicketsByTicketIdCommentsByTicketCommentIdMakePrivateResponseSchema: zod.ZodSchema<string> =
  zod.string();

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
  zod.string();

export const putApiV2UsersByUserIdResponseSchema: zod.ZodSchema<UserResponse> =
  userResponseSchema;

export const putApiV2UsersByUserIdGroupMembershipsByGroupMembershipIdMakeDefaultResponseSchema: zod.ZodSchema<GroupMembershipsResponse> =
  groupMembershipsResponseSchema;

export const putApiV2UsersByUserIdIdentitiesByUserIdentityIdResponseSchema: zod.ZodSchema<UserIdentityResponse> =
  userIdentityResponseSchema;

export const putApiV2UsersByUserIdIdentitiesByUserIdentityIdMakePrimaryResponseSchema: zod.ZodSchema<UserIdentitiesResponse> =
  userIdentitiesResponseSchema;

export const putApiV2UsersByUserIdIdentitiesByUserIdentityIdRequestVerificationResponseSchema: zod.ZodSchema<string> =
  zod.string();

export const putApiV2UsersByUserIdIdentitiesByUserIdentityIdVerifyResponseSchema: zod.ZodSchema<UserIdentityResponse> =
  userIdentityResponseSchema;

export const putApiV2UsersByUserIdMergeResponseSchema: zod.ZodSchema<UserResponse> =
  userResponseSchema;

export const putApiV2UsersByUserIdOrganizationMembershipsByOrganizationMembershipIdMakeDefaultResponseSchema: zod.ZodSchema<OrganizationMembershipsResponse> =
  organizationMembershipsResponseSchema;

export const putApiV2UsersByUserIdOrganizationsByOrganizationIdMakeDefaultResponseSchema: zod.ZodSchema<OrganizationMembershipResponse> =
  organizationMembershipResponseSchema;

export const putApiV2UsersByUserIdPasswordResponseSchema: zod.ZodSchema<string> =
  zod.string();

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
  zod.string();

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
  zod.string();
