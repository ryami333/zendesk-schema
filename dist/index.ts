import { z } from "zod";

export type Maybe<T> = T | null;
/**
 * @description The active features for an account. See [Active Features](#active-features)
 */

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
/**
 * @description Configuration for the agent workspace. See [Agents](#agents)
 */

export interface AccountSettingsAgentObject {
  agent_home: boolean;
  agent_workspace: boolean;
  aw_self_serve_migration_enabled: boolean;
  focus_mode: boolean;
  idle_timeout_enabled: boolean;
  unified_agent_statuses: boolean;
}
/**
 * @description API configuration options. See [API](#api)
 */

export interface AccountSettingsApiObject {
  accepted_api_agreement: boolean;
  api_password_access: string;
  api_token_access: string;
}
/**
 * @description Apps configuration options. See [Apps](#apps)
 */

export interface AccountSettingsAppsObject {
  create_private: boolean;
  create_public: boolean;
  use: boolean;
}
/**
 * @description Billing configuration options. See [Billing](#billing)
 */

export interface AccountSettingsBillingObject {
  backend: string;
}
/**
 * @description Branding settings. See [Branding](#branding)
 */

export interface AccountSettingsBrandingObject {
  favicon_url: Maybe<string>;
  header_color: string;
  header_logo_url: Maybe<string>;
  page_background_color: string;
  tab_background_color: string;
  text_color: string;
}
/**
 * @description Brand settings. See [Brands](#brands)
 */

export interface AccountSettingsBrandsObject {
  default_brand_id: number;
  require_brand_on_new_tickets: boolean;
}
/**
 * @description CDN settings
 */

export interface AccountSettingsCdnObject {
  cdn_provider: string;
  fallback_cdn_provider: string;
  hosts: {
    name: string;
    url: string;
  }[];
}
/**
 * @description Zendesk Chat settings. See [Chat](#chat)
 */

export interface AccountSettingsChatObject {
  available: boolean;
  enabled: boolean;
  integrated: boolean;
  maximum_request_count: number;
  welcome_message: string;
}
/**
 * @description Cross Sell settings
 */

export interface AccountSettingsCrossSellObject {
  show_chat_tooltip: boolean;
  xsell_source: Maybe<string>;
}
/**
 * @description GoodData settings, used for insights. Legacy configuration prior to Zendesk Explore. See [GoodData Advanced Analytics](#gooddata-advanced-analytics)
 */

export interface AccountSettingsGooddataAdvancedAnalyticsObject {
  enabled: boolean;
}
/**
 * @description Google Apps configuration. See [G Suite](#g-suite)
 */

export interface AccountSettingsGoogleAppsObject {
  has_google_apps: boolean;
  has_google_apps_admin: boolean;
}
/**
 * @description Group configuration
 */

export interface AccountSettingsGroupObject {
  check_group_name_uniqueness: boolean;
}
/**
 * @description Account limits configuration. See [Limits](#limits)
 */

export interface AccountSettingsLimitsObject {
  attachment_size: number;
}
/**
 * @description Internationalization configuration settings. See [Localization](#localization)
 */

export interface AccountSettingsLocalizationObject {
  locale_ids: number[];
}
/**
 * @description Support UI settings. See [Lotus](#lotus)
 */

export interface AccountSettingsLotusObject {
  pod_id: number;
  prefer_lotus: boolean;
  reporting: boolean;
}
/**
 * @description Account metrics settings. See [Metrics](#metrics)
 */

export interface AccountSettingsMetricsObject {
  account_size: string;
}
/**
 * @description Onboarding settings
 */

export interface AccountSettingsOnboardingObject {
  checklist_onboarding_version: number;
  onboarding_segments: Maybe<string>;
  product_sign_up: Maybe<string>;
}
/**
 * @description Configuration for routing. See [Routing](#routing)
 */

export interface AccountSettingsRoutingObject {
  autorouting_tag: string;
  enabled: boolean;
  max_email_capacity: number;
  max_messaging_capacity: number;
  reassignment_messaging_enabled: boolean;
  reassignment_messaging_timeout: number;
  reassignment_talk_timeout: number;
}
/**
 * @description Rules settings for triggers, macros, views, and automations. See [Rules](#rules)
 */

export interface AccountSettingsRuleObject {
  macro_most_used: boolean;
  macro_order: string;
  skill_based_filtered_views: Record<string, unknown>[];
  using_skill_based_routing: boolean;
}
/**
 * @description Side conversations settings
 */

export interface AccountSettingsSideConversationsObject {
  email_channel: boolean;
  msteams_channel: boolean;
  show_in_context_panel: boolean;
  slack_channel: boolean;
  tickets_channel: boolean;
}
/**
 * @description Account statistics settings. See [Statistics](#statistics)
 */

export interface AccountSettingsStatisticsObject {
  forum: boolean;
  rule_usage: boolean;
  search: boolean;
}
/**
 * @description Ticket form settings. See [Ticket Form](#ticket-form)
 */

export interface AccountSettingsTicketFormObject {
  raw_ticket_forms_instructions: string;
  ticket_forms_instructions: string;
}
/**
 * @description Ticket settings. See [Tickets](#tickets)
 */

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
/**
 * @description Ticket sharing partners settings. See [Ticket Sharing Partners](#ticket-sharing-partners)
 */

export interface AccountSettingsTicketSharingPartnersObject {
  support_addresses: string[];
}
/**
 * @description X (formerly Twitter) settings. See [X](#x-formerly-twitter)
 */

export interface AccountSettingsTwitterObject {
  shorten_url: string;
}
/**
 * @description User settings. See [Users](#users)
 */

export interface AccountSettingsUserObject {
  agent_created_welcome_emails: boolean;
  end_user_phone_number_validation: boolean;
  have_gravatars_enabled: boolean;
  language_selection: boolean;
  multiple_organizations: boolean;
  tagging: boolean;
  time_zone_selection: boolean;
}
/**
 * @description Zendesk Talk settings. See [Voice](#voice)
 */

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
  ticket_form_ids: number[];
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
/**
 * @description The status of the import for the indicated resource
 */

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
/**
 * @description An object that describes the conditions under which the automation will execute. See [Conditions reference](/documentation/ticketing/reference-guides/conditions-reference)
 */

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
/**
 * @description Configuration settings for the role. See [Configuration](#configuration)
 */

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

export interface DefinitionsResponse {
  definitions: {
    conditions_all: {
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
    }[];
    conditions_any: {
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
    }[];
  };
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
  value: (string | number | unknown[])[];
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
/**
 * @description An object that describes the conditions a ticket must match for a Group SLA policy to be applied to the ticket. See [Filter](#filter).
 */

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

export type PushNotificationDevicesInput = string[];

export interface PushNotificationDevicesRequest {
  push_notification_devices: PushNotificationDevicesInput;
}

export interface QueueObject {
  created_at: string;
  definition: {
    all: {
      field: string;
      operator: string;
      value: string;
    }[];
    any: {
      field: string;
      operator: string;
      value: string;
    }[];
  };
  description: string;
  id: string;
  name: string;
  order: number;
  primary_groups: {
    count: number;
    groups: {
      id: number;
      name: string;
    }[];
  };
  priority: number;
  secondary_groups: {
    count: number;
    groups: {
      id: number;
      name: string;
    }[];
  };
  updated_at: string;
  url: string;
}

export interface QueueResponse {
  queue: QueueObject;
}

export interface QueuesResponse {
  queues: QueueObject[];
}

export interface RenewSessionResponse {
  authenticity_token: string;
}

export interface ResourceCollectionObject {
  created_at: string;
  id: number;
  resources: {
    deleted: boolean;
    identifier: string;
    resource_id: number;
    type: string;
  }[];
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
/**
 * @description An object that describes the conditions that a ticket must match in order for an SLA policy to be applied to that ticket. See [Filter](#filter).
 */

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
/**
 * @description Describes how the object was created. See the [Via object reference](/documentation/ticketing/reference-guides/via-object-reference)
 */

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
  ids: number[];
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
  attribute_value_ids: number[];
  brand_id: number;
  collaborator_ids: number[];
  collaborators: CollaboratorObject[];
  comment: Record<string, unknown>;
  created_at: string;
  custom_fields: {
    id: number;
    value: string;
  }[];
  custom_status_id: number;
  description: string;
  due_at: Maybe<string>;
  email_cc_ids: number[];
  email_ccs: Record<string, unknown>;
  external_id: string;
  follower_ids: number[];
  followers: Record<string, unknown>;
  followup_ids: number[];
  forum_topic_id: number;
  from_messaging_channel: boolean;
  group_id: number;
  has_incidents: boolean;
  id: number;
  is_public: boolean;
  macro_id: number;
  macro_ids: number[];
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
  sharing_agreement_ids: number[];
  status: "new" | "open" | "pending" | "hold" | "solved" | "closed";
  subject: string;
  submitter_id: number;
  tags: string[];
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
/**
* @description See [Tickets](/api-reference/ticketing/tickets/tickets/) for a detailed example.

*/

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
  collaborator_ids: number[];
  comment: TicketCommentObject;
  custom_fields: CustomFieldObject[];
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
  tags: string[];
  type: "problem" | "incident" | "question" | "task";
  updated_stamp: string;
}

export interface TicketUpdateRequest {
  ticket: TicketUpdateInput;
}

export interface TicketsResponse {
  tickets: TicketObject[];
}
/**
* @description See [Tickets](/api-reference/ticketing/tickets/tickets/) for a detailed example.

*/

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
/**
 * @description An object that describes the conditions under which the trigger will execute. See [Conditions reference](/documentation/ticketing/reference-guides/conditions-reference)
 */

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
  tags: string[];
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
/**
* @description An object explaining how the ticket was created. See the [Via object reference](/documentation/ticketing/reference-guides/via-object-reference)

*/

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
  events: {
    body: string;
    field_name: string;
    id: number;
    type: string;
    value: string | number | unknown[];
  }[];
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
  collaborators: CollaboratorObject[];
  email_cc_ids: number[];
  follower_ids: number[];
  macro_ids: number[];
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

export const accountSettingsActiveFeaturesObjectSchema: z.ZodSchema<AccountSettingsActiveFeaturesObject> =
  z
    .object({
      advanced_analytics: z.boolean(),
      agent_forwarding: z.boolean(),
      allow_ccs: z.boolean(),
      allow_email_template_customization: z.boolean(),
      automatic_answers: z.boolean(),
      bcc_archiving: z.boolean(),
      benchmark_opt_out: z.boolean(),
      business_hours: z.boolean(),
      chat: z.boolean(),
      chat_about_my_ticket: z.boolean(),
      csat_reason_code: z.boolean(),
      custom_dkim_domain: z.boolean(),
      customer_context_as_default: z.boolean(),
      customer_satisfaction: z.boolean(),
      dynamic_contents: z.boolean(),
      explore: z.boolean(),
      explore_on_support_ent_plan: z.boolean(),
      explore_on_support_pro_plan: z.boolean(),
      facebook: z.boolean(),
      facebook_login: z.boolean(),
      fallback_composer: z.boolean(),
      forum_analytics: z.boolean(),
      good_data_and_explore: z.boolean(),
      google_login: z.boolean(),
      insights: z.boolean(),
      is_abusive: z.boolean(),
      light_agents: z.boolean(),
      markdown: z.boolean(),
      on_hold_status: z.boolean(),
      rich_content_in_emails: z.boolean(),
      sandbox: z.boolean(),
      satisfaction_prediction: z.boolean(),
      suspended_ticket_notification: z.boolean(),
      ticket_forms: z.boolean(),
      ticket_tagging: z.boolean(),
      topic_suggestion: z.boolean(),
      twitter: z.boolean(),
      twitter_login: z.boolean(),
      user_org_fields: z.boolean(),
      user_tagging: z.boolean(),
      voice: z.boolean(),
    })
    .describe(
      "The active features for an account. See [Active Features](#active-features)",
    );

export const accountSettingsAgentObjectSchema: z.ZodSchema<AccountSettingsAgentObject> =
  z
    .object({
      agent_home: z.boolean(),
      agent_workspace: z.boolean(),
      aw_self_serve_migration_enabled: z.boolean(),
      focus_mode: z.boolean(),
      idle_timeout_enabled: z.boolean(),
      unified_agent_statuses: z.boolean(),
    })
    .describe("Configuration for the agent workspace. See [Agents](#agents)");

export const accountSettingsApiObjectSchema: z.ZodSchema<AccountSettingsApiObject> =
  z
    .object({
      accepted_api_agreement: z.boolean(),
      api_password_access: z.string(),
      api_token_access: z.string(),
    })
    .describe("API configuration options. See [API](#api)");

export const accountSettingsAppsObjectSchema: z.ZodSchema<AccountSettingsAppsObject> =
  z
    .object({
      create_private: z.boolean(),
      create_public: z.boolean(),
      use: z.boolean(),
    })
    .describe("Apps configuration options. See [Apps](#apps)");

export const accountSettingsBillingObjectSchema: z.ZodSchema<AccountSettingsBillingObject> =
  z
    .object({ backend: z.string() })
    .describe("Billing configuration options. See [Billing](#billing)");

export const accountSettingsBrandingObjectSchema: z.ZodSchema<AccountSettingsBrandingObject> =
  z
    .object({
      favicon_url: z.string().nullable(),
      header_color: z.string(),
      header_logo_url: z.string().nullable(),
      page_background_color: z.string(),
      tab_background_color: z.string(),
      text_color: z.string(),
    })
    .describe("Branding settings. See [Branding](#branding)");

export const accountSettingsBrandsObjectSchema: z.ZodSchema<AccountSettingsBrandsObject> =
  z
    .object({
      default_brand_id: z.number(),
      require_brand_on_new_tickets: z.boolean(),
    })
    .describe("Brand settings. See [Brands](#brands)");

export const accountSettingsCdnObjectSchema: z.ZodSchema<AccountSettingsCdnObject> =
  z
    .object({
      cdn_provider: z.string(),
      fallback_cdn_provider: z.string(),
      hosts: z.array(z.object({ name: z.string(), url: z.string() })),
    })
    .describe("CDN settings");

export const accountSettingsChatObjectSchema: z.ZodSchema<AccountSettingsChatObject> =
  z
    .object({
      available: z.boolean(),
      enabled: z.boolean(),
      integrated: z.boolean(),
      maximum_request_count: z.number(),
      welcome_message: z.string(),
    })
    .describe("Zendesk Chat settings. See [Chat](#chat)");

export const accountSettingsCrossSellObjectSchema: z.ZodSchema<AccountSettingsCrossSellObject> =
  z
    .object({
      show_chat_tooltip: z.boolean(),
      xsell_source: z.string().nullable(),
    })
    .describe("Cross Sell settings");

export const accountSettingsGooddataAdvancedAnalyticsObjectSchema: z.ZodSchema<AccountSettingsGooddataAdvancedAnalyticsObject> =
  z
    .object({ enabled: z.boolean() })
    .describe(
      "GoodData settings, used for insights. Legacy configuration prior to Zendesk Explore. See [GoodData Advanced Analytics](#gooddata-advanced-analytics)",
    );

export const accountSettingsGoogleAppsObjectSchema: z.ZodSchema<AccountSettingsGoogleAppsObject> =
  z
    .object({
      has_google_apps: z.boolean(),
      has_google_apps_admin: z.boolean(),
    })
    .describe("Google Apps configuration. See [G Suite](#g-suite)");

export const accountSettingsGroupObjectSchema: z.ZodSchema<AccountSettingsGroupObject> =
  z
    .object({ check_group_name_uniqueness: z.boolean() })
    .describe("Group configuration");

export const accountSettingsLimitsObjectSchema: z.ZodSchema<AccountSettingsLimitsObject> =
  z
    .object({ attachment_size: z.number() })
    .describe("Account limits configuration. See [Limits](#limits)");

export const accountSettingsLocalizationObjectSchema: z.ZodSchema<AccountSettingsLocalizationObject> =
  z
    .object({ locale_ids: z.array(z.number()) })
    .describe(
      "Internationalization configuration settings. See [Localization](#localization)",
    );

export const accountSettingsLotusObjectSchema: z.ZodSchema<AccountSettingsLotusObject> =
  z
    .object({
      pod_id: z.number(),
      prefer_lotus: z.boolean(),
      reporting: z.boolean(),
    })
    .describe("Support UI settings. See [Lotus](#lotus)");

export const accountSettingsMetricsObjectSchema: z.ZodSchema<AccountSettingsMetricsObject> =
  z
    .object({ account_size: z.string() })
    .describe("Account metrics settings. See [Metrics](#metrics)");

export const accountSettingsOnboardingObjectSchema: z.ZodSchema<AccountSettingsOnboardingObject> =
  z
    .object({
      checklist_onboarding_version: z.number(),
      onboarding_segments: z.string().nullable(),
      product_sign_up: z.string().nullable(),
    })
    .describe("Onboarding settings");

export const accountSettingsRoutingObjectSchema: z.ZodSchema<AccountSettingsRoutingObject> =
  z
    .object({
      autorouting_tag: z.string(),
      enabled: z.boolean(),
      max_email_capacity: z.number(),
      max_messaging_capacity: z.number(),
      reassignment_messaging_enabled: z.boolean(),
      reassignment_messaging_timeout: z.number(),
      reassignment_talk_timeout: z.number(),
    })
    .describe("Configuration for routing. See [Routing](#routing)");

export const accountSettingsRuleObjectSchema: z.ZodSchema<AccountSettingsRuleObject> =
  z
    .object({
      macro_most_used: z.boolean(),
      macro_order: z.string(),
      skill_based_filtered_views: z.array(z.object({}).passthrough()),
      using_skill_based_routing: z.boolean(),
    })
    .describe(
      "Rules settings for triggers, macros, views, and automations. See [Rules](#rules)",
    );

export const accountSettingsSideConversationsObjectSchema: z.ZodSchema<AccountSettingsSideConversationsObject> =
  z
    .object({
      email_channel: z.boolean(),
      msteams_channel: z.boolean(),
      show_in_context_panel: z.boolean(),
      slack_channel: z.boolean(),
      tickets_channel: z.boolean(),
    })
    .describe("Side conversations settings");

export const accountSettingsStatisticsObjectSchema: z.ZodSchema<AccountSettingsStatisticsObject> =
  z
    .object({
      forum: z.boolean(),
      rule_usage: z.boolean(),
      search: z.boolean(),
    })
    .describe("Account statistics settings. See [Statistics](#statistics)");

export const accountSettingsTicketFormObjectSchema: z.ZodSchema<AccountSettingsTicketFormObject> =
  z
    .object({
      raw_ticket_forms_instructions: z.string(),
      ticket_forms_instructions: z.string(),
    })
    .describe("Ticket form settings. See [Ticket Form](#ticket-form)");

export const accountSettingsTicketObjectSchema: z.ZodSchema<AccountSettingsTicketObject> =
  z
    .object({
      accepted_new_collaboration_tos: z.boolean(),
      agent_collision: z.boolean(),
      agent_invitation_enabled: z.boolean(),
      agent_ticket_deletion: z.boolean(),
      allow_group_reset: z.boolean(),
      assign_default_organization: z.boolean(),
      assign_tickets_upon_solve: z.boolean(),
      auto_translation_enabled: z.boolean(),
      auto_updated_ccs_followers_rules: z.boolean(),
      collaboration: z.boolean(),
      comments_public_by_default: z.boolean(),
      email_attachments: z.boolean(),
      emoji_autocompletion: z.boolean(),
      follower_and_email_cc_collaborations: z.boolean(),
      has_color_text: z.boolean(),
      is_first_comment_private_enabled: z.boolean(),
      light_agent_email_ccs_allowed: z.boolean(),
      list_empty_views: z.boolean(),
      list_newest_comments_first: z.boolean(),
      markdown_ticket_comments: z.boolean(),
      maximum_personal_views_to_list: z.number(),
      private_attachments: z.boolean(),
      rich_text_comments: z.boolean(),
      status_hold: z.boolean(),
      tagging: z.boolean(),
      using_skill_based_routing: z.boolean(),
    })
    .describe("Ticket settings. See [Tickets](#tickets)");

export const accountSettingsTicketSharingPartnersObjectSchema: z.ZodSchema<AccountSettingsTicketSharingPartnersObject> =
  z
    .object({ support_addresses: z.array(z.string()) })
    .describe(
      "Ticket sharing partners settings. See [Ticket Sharing Partners](#ticket-sharing-partners)",
    );

export const accountSettingsTwitterObjectSchema: z.ZodSchema<AccountSettingsTwitterObject> =
  z
    .object({ shorten_url: z.string() })
    .describe("X (formerly Twitter) settings. See [X](#x-formerly-twitter)");

export const accountSettingsUserObjectSchema: z.ZodSchema<AccountSettingsUserObject> =
  z
    .object({
      agent_created_welcome_emails: z.boolean(),
      end_user_phone_number_validation: z.boolean(),
      have_gravatars_enabled: z.boolean(),
      language_selection: z.boolean(),
      multiple_organizations: z.boolean(),
      tagging: z.boolean(),
      time_zone_selection: z.boolean(),
    })
    .describe("User settings. See [Users](#users)");

export const accountSettingsVoiceObjectSchema: z.ZodSchema<AccountSettingsVoiceObject> =
  z
    .object({
      agent_confirmation_when_forwarding: z.boolean(),
      agent_wrap_up_after_calls: z.boolean(),
      enabled: z.boolean(),
      logging: z.boolean(),
      maximum_queue_size: z.number(),
      maximum_queue_wait_time: z.number(),
      only_during_business_hours: z.boolean(),
      outbound_enabled: z.boolean(),
      recordings_public: z.boolean(),
      uk_mobile_forwarding: z.boolean(),
    })
    .describe("Zendesk Talk settings. See [Voice](#voice)");

export const accountSettingsObjectSchema: z.ZodSchema<AccountSettingsObject> =
  z.object({
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

export const accountSettingsResponseSchema: z.ZodSchema<AccountSettingsResponse> =
  z.object({ settings: accountSettingsObjectSchema });

export const actionObjectSchema: z.ZodSchema<ActionObject> = z.object({
  field: z.string().describe("The name of a ticket field to modify"),
  value: z.string().describe("The new value of the field"),
});

export const actionsObjectSchema: z.ZodSchema<ActionsObject> = z.object({
  actions: z.array(actionObjectSchema),
});

export const activitiesCountResponseSchema: z.ZodSchema<ActivitiesCountResponse> =
  z.object({
    count: z.object({ refreshed_at: z.string(), value: z.number() }),
  });

export const assigneeFieldAssignableAgentObjectSchema: z.ZodSchema<AssigneeFieldAssignableAgentObject> =
  z.object({
    avatar_url: z.string().nullable().describe("URL of Agent's avatar"),
    id: z.number().describe("Agent Support ID"),
    name: z.string().describe("Name of the agent"),
  });

export const assigneeFieldAssignableGroupAgentsResponseSchema: z.ZodSchema<AssigneeFieldAssignableGroupAgentsResponse> =
  z.object({
    agents: z.array(assigneeFieldAssignableAgentObjectSchema),
    count: z.number().describe("Number of agents listed in `agents` property."),
    next_page: z.string().nullable(),
    previous_page: z.string().nullable(),
  });

export const assigneeFieldAssignableGroupObjectSchema: z.ZodSchema<AssigneeFieldAssignableGroupObject> =
  z.object({
    description: z.string().describe("Description of the group"),
    id: z.number().describe("Group ID"),
    name: z.string().describe("Name of the group"),
  });

export const assigneeFieldAssignableGroupsResponseSchema: z.ZodSchema<AssigneeFieldAssignableGroupsResponse> =
  z.object({
    count: z.number().describe("Number of groups listed in `groups` property."),
    groups: z.array(assigneeFieldAssignableGroupObjectSchema),
    next_page: z.string().nullable(),
    previous_page: z.string().nullable(),
  });

export const assigneeFieldAssignableSearchAgentObjectSchema: z.ZodSchema<AssigneeFieldAssignableSearchAgentObject> =
  z.object({
    group: z.string().describe("Name of the agent's group"),
    group_id: z.number().describe("Agent's Group ID"),
    id: z.number().describe("Agent ID"),
    name: z.string().describe("Name of the agent"),
    photo_url: z.string().nullable().describe("URL of Avatar"),
  });

export const assigneeFieldAssignableSearchGroupObjectSchema: z.ZodSchema<AssigneeFieldAssignableSearchGroupObject> =
  z.object({
    id: z.number().describe("Group ID"),
    name: z.string().describe("Name of the group"),
  });

export const assigneeFieldAssignableGroupsAndAgentsSearchResponseSchema: z.ZodSchema<AssigneeFieldAssignableGroupsAndAgentsSearchResponse> =
  z.object({
    agents: z.array(assigneeFieldAssignableSearchAgentObjectSchema),
    count: z
      .number()
      .describe("Number of agents + groups listed from search result."),
    groups: z.array(assigneeFieldAssignableSearchGroupObjectSchema),
  });

export const attachmentBaseObjectSchema: z.ZodSchema<AttachmentBaseObject> =
  z.object({
    content_type: z
      .string()
      .describe('The content type of the image. Example value: "image/png"'),
    content_url: z
      .string()
      .describe(
        "A full URL where the attachment image file can be downloaded. The file may be hosted externally so take care not to inadvertently send Zendesk authentication credentials. See [Working with url properties](/documentation/ticketing/managing-tickets/working-with-url-properties)",
      ),
    deleted: z.boolean().describe("If true, the attachment has been deleted"),
    file_name: z.string().describe("The name of the image file"),
    height: z
      .string()
      .describe(
        "The height of the image file in pixels. If height is unknown, returns null",
      ),
    id: z.number().describe("Automatically assigned when created"),
    inline: z
      .boolean()
      .describe(
        "If true, the attachment is excluded from the attachment list and the attachment's URL\ncan be referenced within the comment of a ticket. Default is false\n",
      ),
    malware_access_override: z
      .boolean()
      .describe(
        "If true, you can download an attachment flagged as malware. If false, you can't download such an attachment.",
      ),
    malware_scan_result: z
      .string()
      .describe(
        'The result of the malware scan. There is a delay between the time the attachment is uploaded and when the malware scan is completed. Usually the scan is done within a few seconds, but high load conditions can delay the scan results. Possible values: "malware_found", "malware_not_found", "failed_to_scan", "not_scanned"',
      ),
    mapped_content_url: z
      .string()
      .describe("The URL the attachment image file has been mapped to"),
    size: z.number().describe("The size of the image file in bytes"),
    url: z.string().describe("A URL to access the attachment details"),
    width: z
      .string()
      .describe(
        "The width of the image file in pixels. If width is unknown, returns null",
      ),
  });

export const attachmentThumbnailsSchema: z.ZodSchema<AttachmentThumbnails> =
  z.object({
    thumbnails: z
      .array(attachmentBaseObjectSchema)
      .describe(
        "An array of attachment objects. Note that photo thumbnails do not have thumbnails",
      ),
  });

export const attachmentObjectSchema: z.ZodSchema<AttachmentObject> = z
  .intersection(attachmentBaseObjectSchema, attachmentThumbnailsSchema)
  .describe(
    "A file represented as an [Attachment](/api-reference/ticketing/tickets/ticket-attachments/) object",
  );

export const attachmentResponseSchema: z.ZodSchema<AttachmentResponse> =
  z.object({ attachment: attachmentObjectSchema });

export const attachmentUpdateInputSchema: z.ZodSchema<AttachmentUpdateInput> =
  z.object({
    malware_access_override: z
      .boolean()
      .describe("If true, allows access to attachments with detected malware."),
  });

export const attachmentUpdateRequestSchema: z.ZodSchema<AttachmentUpdateRequest> =
  z.object({ attachment: attachmentUpdateInputSchema });

export const attachmentUploadResponseSchema: z.ZodSchema<AttachmentUploadResponse> =
  z.object({
    upload: z.object({
      attachment: attachmentObjectSchema,
      attachments: z.array(attachmentObjectSchema),
      token: z.string().describe("Token for subsequent request"),
    }),
  });

export const auditLogObjectSchema: z.ZodSchema<AuditLogObject> = z.object({
  action: z
    .string()
    .describe(
      'Type of change made. Possible values are "create", "destroy", "exported", "login", and "update"\n',
    ),
  action_label: z.string().describe("Localized string of action field"),
  actor_id: z
    .number()
    .describe("id of the user or system that initiated the change"),
  actor_name: z
    .string()
    .describe("Name of the user or system that initiated the change"),
  change_description: z
    .string()
    .describe("The description of the change that occurred"),
  created_at: z.string().describe("The time the audit got created"),
  id: z.number().describe("The id automatically assigned upon creation"),
  ip_address: z.string().describe("The IP address of the user doing the audit"),
  source_id: z.number().describe("The id of the item being audited"),
  source_label: z.string().describe("The name of the item being audited"),
  source_type: z
    .string()
    .describe(
      'Item type being audited. Typically describes the system where the change\nwas initiated. Possible values vary based on your account\'s Zendesk\nproducts and activity. Common values include "apitoken", "rule", "ticket",\n"user", and "zendesk/app_market/app". The "rule" value is used for\n[automations](https://support.zendesk.com/hc/en-us/articles/4408832701850),\n[macros](https://support.zendesk.com/hc/en-us/articles/4408844187034),\n[triggers](https://support.zendesk.com/hc/en-us/articles/4408822236058),\n[views](https://support.zendesk.com/hc/en-us/articles/4408888828570),\nand other automated business rules\n',
    ),
  url: z.string().describe("The URL to access the audit log"),
});

export const auditLogResponseSchema: z.ZodSchema<AuditLogResponse> = z.object({
  audit_log: auditLogObjectSchema,
});

export const auditLogsResponseSchema: z.ZodSchema<AuditLogsResponse> = z.object(
  { audit_logs: z.array(auditLogObjectSchema) },
);

export const authorObjectSchema: z.ZodSchema<AuthorObject> = z.object({
  email: z.string().describe("The author email"),
  id: z.number().describe("The author id"),
  name: z.string().describe("The author name"),
});

export const bookmarkInputSchema: z.ZodSchema<BookmarkInput> = z.object({
  ticket_id: z.number().describe("The id of the ticket the bookmark is for."),
});

export const bookmarkCreateRequestSchema: z.ZodSchema<BookmarkCreateRequest> =
  z.object({ bookmark: bookmarkInputSchema });

export const brandObjectSchema: z.ZodSchema<BrandObject> = z.object({
  active: z.boolean().describe("If the brand is set as active"),
  brand_url: z.string().describe("The url of the brand"),
  created_at: z.string().describe("The time the brand was created"),
  default: z
    .boolean()
    .describe("Is the brand the default brand for this account"),
  has_help_center: z.boolean().describe("If the brand has a Help Center"),
  help_center_state: z
    .union([
      z.literal("enabled"),
      z.literal("disabled"),
      z.literal("restricted"),
    ])
    .describe("The state of the Help Center"),
  host_mapping: z
    .string()
    .describe(
      "The hostmapping to this brand, if any. Only admins view this property.",
    ),
  id: z
    .number()
    .describe("The ID automatically assigned when the brand is created"),
  is_deleted: z.boolean().describe("If the brand object is deleted or not"),
  logo: attachmentObjectSchema,
  name: z.string().describe("The name of the brand"),
  signature_template: z.string().describe("The signature template for a brand"),
  subdomain: z.string().describe("The subdomain of the brand"),
  ticket_form_ids: z
    .array(z.number())
    .describe("The ids of ticket forms that are available for use by a brand"),
  updated_at: z.string().describe("The time of the last update of the brand"),
  url: z.string().describe("The API url of this brand"),
});

export const brandCreateRequestSchema: z.ZodSchema<BrandCreateRequest> =
  z.object({ brand: brandObjectSchema });

export const brandResponseSchema: z.ZodSchema<BrandResponse> = z.object({
  brand: brandObjectSchema,
});

export const brandUpdateRequestSchema: z.ZodSchema<BrandUpdateRequest> =
  z.object({ brand: brandObjectSchema });

export const bulkUpdateDefaultCustomStatusRequestSchema: z.ZodSchema<BulkUpdateDefaultCustomStatusRequest> =
  z.object({
    ids: z
      .string()
      .describe(
        "The comma-separated list of custom ticket status ids to be set as default for their status categories",
      ),
  });

export const bulkUpdateDefaultCustomStatusResponseSchema: z.ZodSchema<BulkUpdateDefaultCustomStatusResponse> =
  z.object({});

export const channelFrameworkResultStatusObjectSchema: z.ZodSchema<ChannelFrameworkResultStatusObject> =
  z
    .object({
      code: z
        .string()
        .describe(
          "A code indicating the status of the import of the resource, as described in [status codes](#status-codes)",
        ),
      description: z
        .string()
        .describe(
          "In the case of an exception, a description of the exception. Otherwise, not present.",
        ),
    })
    .describe("The status of the import for the indicated resource");

export const channelFrameworkResultObjectSchema: z.ZodSchema<ChannelFrameworkResultObject> =
  z.object({
    external_resource_id: z
      .string()
      .describe("The external ID of the resource, as passed in"),
    status: channelFrameworkResultStatusObjectSchema,
  });

export const channelFrameworkPushResultsResponseSchema: z.ZodSchema<ChannelFrameworkPushResultsResponse> =
  z.object({
    results: z
      .array(channelFrameworkResultObjectSchema)
      .describe("An array of [result objects](#result-object)"),
  });

export const collaboratorObjectSchema: z.ZodSchema<CollaboratorObject> =
  z.object({ email: z.string(), name: z.string() });

export const complianceDeletionStatusObjectSchema: z.ZodSchema<ComplianceDeletionStatusObject> =
  z.object({
    account_subdomain: z.string(),
    action: z.string(),
    application: z.string(),
    created_at: z.string(),
    executer_id: z.number().nullable(),
    user_id: z.number(),
  });

export const complianceDeletionStatusesResponseSchema: z.ZodSchema<ComplianceDeletionStatusesResponse> =
  z.object({
    compliance_deletion_statuses: z.array(complianceDeletionStatusObjectSchema),
  });

export const conditionObjectSchema: z.ZodSchema<ConditionObject> = z.object({
  field: z.string().describe("The name of a ticket field"),
  operator: z.string().describe("A comparison operator"),
  value: z
    .union([z.string(), z.array(z.unknown())])
    .describe("The value of a ticket field"),
});

export const conditionsObjectSchema: z.ZodSchema<ConditionsObject> = z
  .object({
    all: z
      .array(conditionObjectSchema)
      .describe(
        "Logical AND. Tickets must fulfill all of the conditions to be considered matching",
      ),
    any: z
      .array(conditionObjectSchema)
      .describe(
        "Logical OR. Tickets may satisfy any of the conditions to be considered matching",
      ),
  })
  .describe(
    "An object that describes the conditions under which the automation will execute. See [Conditions reference](/documentation/ticketing/reference-guides/conditions-reference)",
  );

export const automationObjectSchema: z.ZodSchema<AutomationObject> = z.object({
  actions: z
    .array(actionObjectSchema)
    .describe(
      "An object describing what the automation will do. See [Actions reference](/documentation/ticketing/reference-guides/actions-reference)",
    ),
  active: z.boolean().describe("Whether the automation is active"),
  conditions: conditionsObjectSchema,
  created_at: z.string().describe("The time the automation was created"),
  default: z
    .boolean()
    .describe("If true, the automation is a default automation"),
  id: z.number().describe("Automatically assigned when created"),
  position: z
    .number()
    .describe(
      "The position of the automation which specifies the order it will be executed",
    ),
  raw_title: z.string().describe("The raw title of the automation"),
  title: z.string().describe("The title of the automation"),
  updated_at: z
    .string()
    .describe("The time of the last update of the automation"),
});

export const automationResponseSchema: z.ZodSchema<AutomationResponse> =
  z.object({ automation: automationObjectSchema });

export const automationsResponseSchema: z.ZodSchema<AutomationsResponse> =
  z.object({
    automations: z.array(automationObjectSchema),
    count: z.number(),
    next_page: z.string().nullable(),
    previous_page: z.string().nullable(),
  });

export const countOrganizationObjectSchema: z.ZodSchema<CountOrganizationObject> =
  z.object({ refreshed_at: z.string(), value: z.number() });

export const countOrganizationResponseSchema: z.ZodSchema<CountOrganizationResponse> =
  z.object({ count: countOrganizationObjectSchema });

export const countResponseSchema: z.ZodSchema<CountResponse> = z.object({
  count: z.object({ refreshed_at: z.string(), value: z.number() }),
});

export const createResourceResultSchema: z.ZodSchema<CreateResourceResult> =
  z.object({
    id: z.number().describe("the id of the new resource"),
    index: z.number().describe("the index number of the resul"),
  });

export const customFieldOptionObjectSchema: z.ZodSchema<CustomFieldOptionObject> =
  z.object({
    id: z.number().describe("Automatically assigned upon creation"),
    name: z.string().describe("Name of the dropdown option"),
    position: z.number().describe("Position of the dropdown option"),
    raw_name: z.string().describe("Raw name of the dropdown option"),
    url: z.string().describe("URL of the dropdown option"),
    value: z.string().describe("Value of the dropdown option"),
  });

export const customFieldObjectSchema: z.ZodSchema<CustomFieldObject> = z.object(
  {
    active: z.boolean().describe("If true, this field is available for use"),
    created_at: z
      .string()
      .describe("The time of the last update of the ticket field"),
    custom_field_options: z
      .array(customFieldOptionObjectSchema)
      .describe(
        'Required and presented for a custom field of type "dropdown". Each option is represented by an object with a `name` and `value` property',
      ),
    description: z
      .string()
      .describe("User-defined description of this field's purpose"),
    id: z.number().describe("Automatically assigned upon creation"),
    key: z
      .string()
      .describe(
        "A unique key that identifies this custom field. This is used for updating the field and referencing in placeholders. Cannot be reused if deleted.",
      ),
    position: z
      .number()
      .describe("Ordering of the field relative to other fields"),
    raw_description: z
      .string()
      .describe(
        "The dynamic content placeholder, if present, or the `description` value, if not. See [Dynamic Content Items](/api-reference/ticketing/ticket-management/dynamic_content/)",
      ),
    raw_title: z
      .string()
      .describe(
        "The dynamic content placeholder, if present, or the `title` value, if not. See [Dynamic Content Items](/api-reference/ticketing/ticket-management/dynamic_content/)",
      ),
    regexp_for_validation: z
      .string()
      .nullable()
      .describe(
        "Regular expression field only. The validation pattern for a field value to be deemed valid",
      ),
    relationship_filter: z
      .object({})
      .describe(
        "A filter definition that allows your autocomplete to filter down results",
      ),
    relationship_target_type: z
      .string()
      .describe(
        'A representation of what type of object the field references. Options are "zen:user", "zen:organization", "zen:ticket", and "zen:custom_object:CUSTOM_OBJECT_KEY". For example "zen:custom_object:apartment".',
      ),
    system: z
      .boolean()
      .describe(
        "If true, only active and position values of this field can be changed",
      ),
    tag: z
      .string()
      .describe(
        'Optional for custom field of type "checkbox"; not presented otherwise.',
      ),
    title: z.string().describe("The title of the custom field"),
    type: z
      .string()
      .describe(
        'The custom field type: "checkbox", "date", "decimal", "dropdown", "integer", ["lookup"](/api-reference/ticketing/lookup_relationships/lookup_relationships/), "regexp", "text", or "textarea"',
      ),
    updated_at: z
      .string()
      .describe("The time of the last update of the ticket field"),
    url: z.string().describe("The URL for this resource"),
  },
);

export const customFieldOptionResponseSchema: z.ZodSchema<CustomFieldOptionResponse> =
  z.object({ custom_field_option: customFieldOptionObjectSchema });

export const customFieldOptionsResponseSchema: z.ZodSchema<CustomFieldOptionsResponse> =
  z.object({
    count: z.number().describe("Total count of records retrieved"),
    custom_field_options: z.array(customFieldOptionObjectSchema),
    next_page: z.string().nullable().describe("URL of the next page"),
    previous_page: z.string().nullable().describe("URL of the previous page"),
  });

export const customObjectSchema: z.ZodSchema<CustomObject> = z.object({
  created_at: z.string().describe("The time the object type was created"),
  created_by_user_id: z
    .string()
    .describe("Id of a user who created the object"),
  description: z.string().describe("User-defined description of the object"),
  key: z
    .string()
    .describe(
      "A user-defined unique identifier. Writable on create only. Cannot be reused if deleted.",
    ),
  raw_description: z
    .string()
    .describe(
      'The dynamic content placeholder, if present, or the "raw_description" value, if not. See [Dynamic Content Items](/api-reference/ticketing/ticket-management/dynamic_content/)',
    ),
  raw_title: z
    .string()
    .describe(
      'The dynamic content placeholder, if present, or the "title" value, if not. See [Dynamic Content Items](/api-reference/ticketing/ticket-management/dynamic_content/)',
    ),
  raw_title_pluralized: z
    .string()
    .describe(
      'The dynamic content placeholder, if present, or the "raw_title_pluralized" value, if not. See [Dynamic Content Items](/api-reference/ticketing/ticket-management/dynamic_content/)',
    ),
  title: z.string().describe("User-defined display name for the object"),
  title_pluralized: z
    .string()
    .describe("User-defined pluralized version of the object's title"),
  updated_at: z.string().describe("The time of the last update of the object"),
  updated_by_user_id: z
    .string()
    .describe("Id of the last user who updated the object"),
  url: z.string().describe("Direct link to the specific custom object"),
});

export const customObjectCreateInputSchema: z.ZodSchema<CustomObjectCreateInput> =
  z.object({
    key: z.string().describe("Unique identifier. Writable on create only"),
    title: z.string().describe("Display name for the object"),
    title_pluralized: z
      .string()
      .describe("Pluralized version of the object's title"),
  });

export const customObjectFieldSchema: z.ZodSchema<CustomObjectField> =
  customFieldObjectSchema;

export const customObjectFieldResponseSchema: z.ZodSchema<CustomObjectFieldResponse> =
  z.object({ custom_object_field: customObjectFieldSchema });

export const customObjectFieldsCreateRequestSchema: z.ZodSchema<CustomObjectFieldsCreateRequest> =
  z.object({ custom_object_field: customObjectFieldSchema });

export const customObjectFieldsResponseSchema: z.ZodSchema<CustomObjectFieldsResponse> =
  z.object({ custom_object_fields: z.array(customObjectFieldSchema) });

export const customObjectLimitsResponseSchema: z.ZodSchema<CustomObjectLimitsResponse> =
  z.object({
    count: z.number().describe("The current numnber of the requested resource"),
    limit: z
      .number()
      .describe("The maximum allowed number for the requested resource"),
  });

export const customObjectRecordSchema: z.ZodSchema<CustomObjectRecord> =
  z.object({
    created_at: z.string().describe("The time the object was created"),
    created_by_user_id: z
      .string()
      .describe("Id of a user who created the object"),
    custom_object_fields: z.object({}).passthrough(),
    custom_object_key: z.string().describe("A user-defined unique identifier"),
    external_id: z
      .string()
      .nullable()
      .describe(
        "An id you can use to link custom object records to external data",
      ),
    id: z.string().describe("Automatically assigned upon creation"),
    name: z.string().describe("User-defined display name for the object"),
    updated_at: z
      .string()
      .describe("The time of the last update of the object"),
    updated_by_user_id: z
      .string()
      .describe("Id of the last user who updated the object"),
    url: z.string().describe("Direct link to the specific custom object"),
  });

export const customObjectRecordResponseSchema: z.ZodSchema<CustomObjectRecordResponse> =
  z.object({ custom_object_record: customObjectRecordSchema });

export const customObjectRecordsBulkCreateRequestSchema: z.ZodSchema<CustomObjectRecordsBulkCreateRequest> =
  z.object({
    job: z.object({
      action: z.string(),
      items: z
        .array(customObjectRecordSchema)
        .describe(
          "An array of record objects for creation jobs, or an array of strings for deletion jobs.",
        ),
    }),
  });

export const customObjectRecordsCreateRequestSchema: z.ZodSchema<CustomObjectRecordsCreateRequest> =
  z.object({ custom_object_record: customObjectRecordSchema });

export const customObjectRecordsJobsResponseSchema: z.ZodSchema<CustomObjectRecordsJobsResponse> =
  z.object({
    job_status: z.object({
      id: z.string(),
      message: z.string().nullable(),
      progress: z.number().nullable(),
      results: z.array(customObjectRecordSchema).nullable(),
      status: z.string(),
      total: z.number(),
      url: z.string(),
    }),
  });

export const customObjectRecordsResponseSchema: z.ZodSchema<CustomObjectRecordsResponse> =
  z.object({
    count: z
      .number()
      .describe("The number of results returned for the current request"),
    custom_object_records: z.array(customObjectRecordSchema),
    links: z.object({
      next: z.string().nullable(),
      prev: z.string().nullable(),
    }),
    meta: z.object({
      after_cursor: z.string().nullable(),
      before_cursor: z.string().nullable(),
      has_more: z.boolean(),
    }),
  });

export const customObjectRecordsUpsertRequestSchema: z.ZodSchema<CustomObjectRecordsUpsertRequest> =
  z.object({ custom_object_record: customObjectRecordSchema });

export const customObjectResponseSchema: z.ZodSchema<CustomObjectResponse> =
  z.object({ custom_object: customObjectSchema });

export const customObjectsCreateRequestSchema: z.ZodSchema<CustomObjectsCreateRequest> =
  z.object({ custom_object: customObjectCreateInputSchema });

export const customObjectsResponseSchema: z.ZodSchema<CustomObjectsResponse> =
  z.object({ custom_objects: z.array(customObjectSchema) });

export const customRoleConfigurationObjectSchema: z.ZodSchema<CustomRoleConfigurationObject> =
  z
    .object({
      assign_tickets_to_any_group: z
        .boolean()
        .describe("Whether or not the agent can assign tickets to any group"),
      chat_access: z
        .boolean()
        .describe("Whether or not the agent has access to Chat"),
      end_user_list_access: z
        .string()
        .describe(
          'Whether or not the agent can view lists of user profiles. Allowed values: "full", "none"',
        ),
      end_user_profile_access: z
        .string()
        .describe(
          'What the agent can do with end-user profiles. Allowed values: "edit", "edit-within-org", "full", "readonly"',
        ),
      explore_access: z
        .string()
        .describe('Allowed values: "edit", "full", "none", "readonly"'),
      forum_access: z
        .string()
        .describe(
          'The kind of access the agent has to Guide. Allowed values: "edit-topics", "full", "readonly"',
        ),
      forum_access_restricted_content: z.boolean(),
      group_access: z
        .boolean()
        .describe("Whether or not the agent can add or modify groups"),
      light_agent: z.boolean(),
      macro_access: z
        .string()
        .describe(
          'What the agent can do with macros. Allowed values: "full", "manage-group", "manage-personal", "readonly"',
        ),
      manage_business_rules: z
        .boolean()
        .describe("Whether or not the agent can manage business rules"),
      manage_contextual_workspaces: z
        .boolean()
        .describe(
          "Whether or not the agent can view, add, and edit contextual workspaces",
        ),
      manage_dynamic_content: z
        .boolean()
        .describe("Whether or not the agent can access dynamic content"),
      manage_extensions_and_channels: z
        .boolean()
        .describe(
          "Whether or not the agent can manage channels and extensions",
        ),
      manage_facebook: z
        .boolean()
        .describe("Whether or not the agent can manage Facebook pages"),
      manage_organization_fields: z
        .boolean()
        .describe(
          "Whether or not the agent can create and manage organization fields",
        ),
      manage_ticket_fields: z
        .boolean()
        .describe(
          "Whether or not the agent can create and manage ticket fields",
        ),
      manage_ticket_forms: z
        .boolean()
        .describe(
          "Whether or not the agent can create and manage ticket forms",
        ),
      manage_user_fields: z
        .boolean()
        .describe("Whether or not the agent can create and manage user fields"),
      moderate_forums: z.boolean(),
      organization_editing: z
        .boolean()
        .describe("Whether or not the agent can add or modify organizations"),
      organization_notes_editing: z
        .boolean()
        .describe(
          "Whether or not the agent can add or modify organization notes",
        ),
      report_access: z
        .string()
        .describe(
          'What the agent can do with reports. Allowed values: "full", "none", "readonly"',
        ),
      side_conversation_create: z
        .boolean()
        .describe(
          "Whether or not the agent can contribute to side conversations",
        ),
      ticket_access: z
        .string()
        .describe(
          'What kind of tickets the agent can access. Allowed values: "all", "assigned-only", "within-groups", "within-groups-and-public-groups", "within-organization"',
        ),
      ticket_comment_access: z
        .string()
        .describe(
          'What type of comments the agent can make. Allowed values: "public", "none"',
        ),
      ticket_deletion: z
        .boolean()
        .describe("Whether or not the agent can delete tickets"),
      ticket_editing: z
        .boolean()
        .describe("Whether or not the agent can edit ticket properties"),
      ticket_merge: z
        .boolean()
        .describe("Whether or not the agent can merge tickets"),
      ticket_tag_editing: z
        .boolean()
        .describe("Whether or not the agent can edit ticket tags"),
      twitter_search_access: z.boolean(),
      user_view_access: z
        .string()
        .describe(
          'What the agent can do with customer lists. Allowed values: "full", "manage-group", "manage-personal", "none", "readonly"',
        ),
      view_access: z
        .string()
        .describe(
          'What the agent can do with views. Allowed values: "full", "manage-group", "manage-personal", "playonly", "readonly"',
        ),
      view_deleted_tickets: z
        .boolean()
        .describe("Whether or not the agent can view deleted tickets"),
      voice_access: z
        .boolean()
        .describe(
          "Whether or not the agent can answer and place calls to end users",
        ),
      voice_dashboard_access: z
        .boolean()
        .describe(
          "Whether or not the agent can view details about calls on the Talk dashboard",
        ),
    })
    .describe(
      "Configuration settings for the role. See [Configuration](#configuration)",
    );

export const customRoleObjectSchema: z.ZodSchema<CustomRoleObject> = z.object({
  configuration: customRoleConfigurationObjectSchema,
  created_at: z.string().describe("The time the record was created"),
  description: z.string().describe("A description of the role"),
  id: z.number().describe("Automatically assigned on creation"),
  name: z.string().describe("Name of the custom role"),
  role_type: z
    .number()
    .describe(
      "The user's role. 0 stands for a custom agent, 1 for a light agent, 2 for a chat agent, 3 for a contributor, 4 for an admin and 5 for a billing admin. See [Understanding standard agent roles in Zendesk Support](https://support.zendesk.com/hc/en-us/articles/4409155971354-Understanding-standard-agent-roles-in-Zendesk-Support) in Zendesk help",
    ),
  team_member_count: z
    .number()
    .describe("The number of team members assigned to this role"),
  updated_at: z.string().describe("The time the record was last updated"),
});

export const customRoleResponseSchema: z.ZodSchema<CustomRoleResponse> =
  z.object({ custom_role: customRoleObjectSchema });

export const customRolesResponseSchema: z.ZodSchema<CustomRolesResponse> =
  z.object({ custom_roles: z.array(customRoleObjectSchema) });

export const customStatusObjectSchema: z.ZodSchema<CustomStatusObject> =
  z.object({
    active: z
      .boolean()
      .describe(
        "If true, the custom status is set to active, If false, the custom status is set to inactive",
      ),
    agent_label: z
      .string()
      .describe(
        "The label displayed to agents. Maximum length is 48 characters",
      ),
    created_at: z
      .string()
      .describe("The date and time the custom ticket status was created"),
    default: z
      .boolean()
      .describe(
        "If true, the custom status is set to default. If false, the custom status is set to non-default",
      ),
    description: z
      .string()
      .describe(
        "The description of when the user should select this custom ticket status",
      ),
    end_user_description: z
      .string()
      .describe("The description displayed to end users"),
    end_user_label: z
      .string()
      .describe(
        "The label displayed to end users. Maximum length is 48 characters",
      ),
    id: z
      .number()
      .describe(
        "Automatically assigned when the custom ticket status is created",
      ),
    raw_agent_label: z
      .string()
      .describe(
        'The dynamic content placeholder. If the dynamic content placeholder is not available, this is the "agent_label" value. See [Dynamic Content Items](/api-reference/ticketing/ticket-management/dynamic_content/)',
      ),
    raw_description: z
      .string()
      .describe(
        'The dynamic content placeholder. If the dynamic content placeholder is not available, this is the "description" value. [Dynamic Content Items](/api-reference/ticketing/ticket-management/dynamic_content/)',
      ),
    raw_end_user_description: z
      .string()
      .describe(
        'The dynamic content placeholder. If the dynamic content placeholder is not available, this is the "end_user_description" value. See [Dynamic Content Items](/api-reference/ticketing/ticket-management/dynamic_content/)',
      ),
    raw_end_user_label: z
      .string()
      .describe(
        'The dynamic content placeholder. If the dynamic content placeholder is not available, this is the "end_user_label" value. See [Dynamic Content Items](/api-reference/ticketing/ticket-management/dynamic_content/)',
      ),
    status_category: z
      .union([
        z.literal("new"),
        z.literal("open"),
        z.literal("pending"),
        z.literal("hold"),
        z.literal("solved"),
      ])
      .describe("The status category the custom ticket status belongs to"),
    updated_at: z
      .string()
      .describe("The date and time the custom ticket status was last updated"),
  });

export const customStatusResponseSchema: z.ZodSchema<CustomStatusResponse> =
  z.object({ custom_status: customStatusObjectSchema });

export const customStatusUpdateInputSchema: z.ZodSchema<CustomStatusUpdateInput> =
  z.object({
    active: z
      .boolean()
      .describe(
        "True if the custom status is set as active; inactive if false",
      ),
    agent_label: z
      .string()
      .describe(
        'The dynamic content placeholder, if present, or the "agent_label" value, if not. See [Dynamic Content Items](/api-reference/ticketing/ticket-management/dynamic_content/)',
      ),
    description: z
      .string()
      .describe(
        'The dynamic content placeholder, if present, or the "description" value, if not. See [Dynamic Content Items](/api-reference/ticketing/ticket-management/dynamic_content/)',
      ),
    end_user_description: z
      .string()
      .describe(
        'The dynamic content placeholder, if present, or the "end_user_description" value, if not. See [Dynamic Content Items](/api-reference/ticketing/ticket-management/dynamic_content/)',
      ),
    end_user_label: z
      .string()
      .describe(
        'The dynamic content placeholder, if present, or the "end_user_label" value, if not. See [Dynamic Content Items](/api-reference/ticketing/ticket-management/dynamic_content/)',
      ),
  });

export const customStatusCreateInputSchema: z.ZodSchema<CustomStatusCreateInput> =
  z.intersection(
    customStatusUpdateInputSchema,
    z.object({
      status_category: z
        .union([
          z.literal("new"),
          z.literal("open"),
          z.literal("pending"),
          z.literal("hold"),
          z.literal("solved"),
        ])
        .describe("The status category the custom ticket status belongs to"),
    }),
  );

export const customStatusCreateRequestSchema: z.ZodSchema<CustomStatusCreateRequest> =
  z.object({ custom_status: customStatusCreateInputSchema });

export const customStatusUpdateRequestSchema: z.ZodSchema<CustomStatusUpdateRequest> =
  z.object({ custom_status: customStatusUpdateInputSchema });

export const customStatusesResponseSchema: z.ZodSchema<CustomStatusesResponse> =
  z.object({ custom_statuses: z.array(customStatusObjectSchema) });

export const definitionsResponseSchema: z.ZodSchema<DefinitionsResponse> =
  z.object({
    definitions: z.object({
      conditions_all: z.array(
        z.object({
          group: z.string(),
          nullable: z.boolean(),
          operators: z.array(
            z.object({
              terminal: z.boolean(),
              title: z.string(),
              value: z.string(),
            }),
          ),
          repeatable: z.boolean(),
          subject: z.string(),
          title: z.string(),
          type: z.string(),
          values: z.array(
            z.object({
              enabled: z.boolean(),
              title: z.string(),
              value: z.string(),
            }),
          ),
        }),
      ),
      conditions_any: z.array(
        z.object({
          group: z.string(),
          nullable: z.boolean(),
          operators: z.array(
            z.object({
              terminal: z.boolean(),
              title: z.string(),
              value: z.string(),
            }),
          ),
          repeatable: z.boolean(),
          subject: z.string(),
          title: z.string(),
          type: z.string(),
          values: z.array(
            z.object({
              enabled: z.boolean(),
              title: z.string(),
              value: z.string(),
            }),
          ),
        }),
      ),
    }),
  });

export const deletedUserObjectSchema: z.ZodSchema<DeletedUserObject> = z.object(
  {
    active: z.boolean(),
    created_at: z.string(),
    email: z.string(),
    id: z.number(),
    locale: z.string(),
    locale_id: z.number(),
    name: z.string(),
    organization_id: z.number(),
    phone: z.string().nullable(),
    photo: z.object({}).nullable(),
    role: z.string(),
    shared_phone_number: z.string().nullable(),
    time_zone: z.string(),
    updated_at: z.string(),
    url: z.string(),
  },
);

export const deletedUserResponseSchema: z.ZodSchema<DeletedUserResponse> =
  z.object({ deleted_user: deletedUserObjectSchema });

export const deletedUsersResponseSchema: z.ZodSchema<DeletedUsersResponse> =
  z.object({ deleted_users: z.array(deletedUserObjectSchema) });

export const dynamicContentVariantObjectSchema: z.ZodSchema<DynamicContentVariantObject> =
  z.object({
    active: z.boolean().describe("If the variant is active and useable"),
    content: z.string().describe("The content of the variant"),
    created_at: z.string().describe("When the variant was created"),
    default: z
      .boolean()
      .describe("If the variant is the default for the item it belongs to"),
    id: z
      .number()
      .describe("Automatically assigned when the variant is created"),
    locale_id: z.number().describe("An active locale"),
    outdated: z.boolean().describe("If the variant is outdated"),
    updated_at: z.string().describe("When the variant was last updated"),
    url: z.string().describe("The API url of the variant"),
  });

export const dynamicContentObjectSchema: z.ZodSchema<DynamicContentObject> =
  z.object({
    created_at: z.string().describe("When this record was created"),
    default_locale_id: z
      .number()
      .describe(
        "The default locale for the item. Must be one of the [locales the account has active](/api-reference/ticketing/account-configuration/locales/#list-locales).",
      ),
    id: z.number().describe("Automatically assigned when creating items"),
    name: z.string().describe("The unique name of the item"),
    outdated: z
      .boolean()
      .describe("Indicates the item has outdated variants within it"),
    placeholder: z
      .string()
      .describe(
        "Automatically generated placeholder for the item, derived from name",
      ),
    updated_at: z.string().describe("When this record was last updated"),
    url: z.string().describe("The API url of this item"),
    variants: z
      .array(dynamicContentVariantObjectSchema)
      .describe(
        "All variants within this item. See [Dynamic Content Item Variants](/api-reference/ticketing/ticket-management/dynamic_content_item_variants/)",
      ),
  });

export const dynamicContentResponseSchema: z.ZodSchema<DynamicContentResponse> =
  z.object({ item: dynamicContentObjectSchema });

export const dynamicContentVariantResponseSchema: z.ZodSchema<DynamicContentVariantResponse> =
  z.object({ variant: dynamicContentVariantObjectSchema });

export const dynamicContentVariantsResponseSchema: z.ZodSchema<DynamicContentVariantsResponse> =
  z.object({ variants: z.array(dynamicContentVariantObjectSchema) });

export const dynamicContentsResponseSchema: z.ZodSchema<DynamicContentsResponse> =
  z.object({ items: z.array(dynamicContentObjectSchema) });

export const errorSchema: z.ZodSchema<Error> = z.object({
  code: z.string(),
  detail: z.string(),
  id: z.string(),
  links: z.object({}),
  source: z.object({}),
  status: z.string(),
  title: z.string(),
});

export const batchErrorItemSchema: z.ZodSchema<BatchErrorItem> = z.intersection(
  errorSchema,
  z.object({ trigger_id: z.string() }),
);

export const errorsSchema: z.ZodSchema<Errors> = z.object({
  errors: z.array(errorSchema),
});

export const essentialsCardObjectSchema: z.ZodSchema<EssentialsCardObject> =
  z.object({
    created_at: z
      .string()
      .describe("Date and time the key details were created"),
    default: z
      .boolean()
      .describe(
        "If true, the system has used the first twenty fields for the custom object type as the key details.",
      ),
    fields: z
      .array(z.object({}).passthrough())
      .describe(
        "Fields that are displayed in the essential card details. The order is defined by the order of the fields in the array",
      ),
    id: z.string().nullable().describe("id of the essential card\n"),
    key: z
      .string()
      .describe("Object type. Example: `zen:user` refers to `User` type\n"),
    layout: z.string().describe("layout type\n"),
    max_count: z
      .number()
      .describe("Maximum number of fields allowed in the key details"),
    updated_at: z
      .string()
      .describe("Date and time the key details were last updated"),
  });

export const essentialsCardResponseSchema: z.ZodSchema<EssentialsCardResponse> =
  z.object({ object_layout: essentialsCardObjectSchema });

export const essentialsCardsResponseSchema: z.ZodSchema<EssentialsCardsResponse> =
  z.object({ object_layouts: z.array(essentialsCardObjectSchema) });

export const followerObjectSchema: z.ZodSchema<FollowerObject> = z.object({
  action: z.union([z.literal("put"), z.literal("delete")]),
  user_email: z.string(),
  user_id: z.string(),
});

export const emailCcObjectSchema: z.ZodSchema<EmailCCObject> = z.intersection(
  followerObjectSchema,
  z.object({
    action: z.union([z.literal("put"), z.literal("delete")]),
    user_email: z.string(),
    user_id: z.string(),
    user_name: z.string(),
  }),
);

export const groupMembershipObjectSchema: z.ZodSchema<GroupMembershipObject> =
  z.object({
    created_at: z.string().describe("The time the group was created"),
    default: z
      .boolean()
      .describe(
        "If true, tickets assigned directly to the agent will assume this membership's group",
      ),
    group_id: z.number().describe("The id of a group"),
    id: z.number().describe("Automatically assigned upon creation"),
    updated_at: z.string().describe("The time of the last update of the group"),
    url: z.string().describe("The API url of this record"),
    user_id: z.number().describe("The id of an agent"),
  });

export const groupMembershipResponseSchema: z.ZodSchema<GroupMembershipResponse> =
  z.object({ group_membership: groupMembershipObjectSchema });

export const groupMembershipsResponseSchema: z.ZodSchema<GroupMembershipsResponse> =
  z.object({ group_memberships: z.array(groupMembershipObjectSchema) });

export const groupObjectSchema: z.ZodSchema<GroupObject> = z.object({
  created_at: z.string().describe("The time the group was created"),
  default: z
    .boolean()
    .describe("If the group is the default one for the account"),
  deleted: z.boolean().describe("Deleted groups get marked as such"),
  description: z.string().describe("The description of the group"),
  id: z.number().describe("Automatically assigned when creating groups"),
  is_public: z
    .boolean()
    .describe(
      "If true, the group is public.\nIf false, the group is private.\nYou can't change a private group to a public group\n",
    ),
  name: z.string().describe("The name of the group"),
  updated_at: z.string().describe("The time of the last update of the group"),
  url: z.string().describe("The API url of the group"),
});

export const groupResponseSchema: z.ZodSchema<GroupResponse> = z.object({
  group: groupObjectSchema,
});

export const groupSlaPolicyFilterConditionObjectSchema: z.ZodSchema<GroupSLAPolicyFilterConditionObject> =
  z.object({
    field: z.string().describe("The name of a ticket field"),
    operator: z.string().describe("A comparison operator"),
    value: z
      .array(z.union([z.string(), z.number(), z.array(z.unknown())]))
      .describe("The value of a ticket field"),
  });

export const groupSlaPolicyFilterDefinitionResponseSchema: z.ZodSchema<GroupSLAPolicyFilterDefinitionResponse> =
  z.object({
    definitions: z.object({
      all: z.array(
        z.object({
          group: z.string(),
          operators: z.array(
            z.object({ title: z.string(), value: z.string() }),
          ),
          title: z.string(),
          value: z.string(),
          values: z.object({
            list: z.array(
              z.object({ title: z.string(), value: z.number().nullable() }),
            ),
            type: z.string(),
          }),
        }),
      ),
    }),
  });

export const groupSlaPolicyFilterObjectSchema: z.ZodSchema<GroupSLAPolicyFilterObject> =
  z
    .object({ all: z.array(groupSlaPolicyFilterConditionObjectSchema) })
    .describe(
      "An object that describes the conditions a ticket must match for a Group SLA policy to be applied to the ticket. See [Filter](#filter).",
    );

export const groupSlaPolicyMetricObjectSchema: z.ZodSchema<GroupSLAPolicyMetricObject> =
  z.object({
    business_hours: z
      .boolean()
      .describe(
        "Whether the metric targets are being measured in business hours or calendar hours",
      ),
    metric: z
      .string()
      .describe("The definition of the time that is being measured"),
    priority: z.string().describe("Priority that a ticket must match"),
    target: z
      .number()
      .describe(
        "The time within which the end-state for a metric should be met",
      ),
  });

export const groupSlaPolicyObjectSchema: z.ZodSchema<GroupSLAPolicyObject> =
  z.object({
    created_at: z
      .string()
      .describe("The time the Group SLA policy was created"),
    description: z.string().describe("The description of the Group SLA policy"),
    filter: groupSlaPolicyFilterObjectSchema,
    id: z.string().describe("Automatically assigned when created"),
    policy_metrics: z
      .array(groupSlaPolicyMetricObjectSchema)
      .describe("Array of [policy metric](#policy-metric) objects"),
    position: z
      .number()
      .describe(
        "Position of the Group SLA policy. This position determines the order in which policies are matched to tickets. If not specified, the Group SLA policy is added at the last position",
      ),
    title: z.string().describe("The title of the Group SLA policy"),
    updated_at: z
      .string()
      .describe("The time of the last update of the Group SLA policy"),
    url: z.string().describe("URL of the Group SLA policy record"),
  });

export const groupSlaPoliciesResponseSchema: z.ZodSchema<GroupSLAPoliciesResponse> =
  z.object({
    count: z.number(),
    group_sla_policies: z.array(groupSlaPolicyObjectSchema),
    next_page: z.string().nullable(),
    previous_page: z.string().nullable(),
  });

export const groupSlaPolicyResponseSchema: z.ZodSchema<GroupSLAPolicyResponse> =
  z.object({ group_sla_policy: groupSlaPolicyObjectSchema });

export const groupsCountObjectSchema: z.ZodSchema<GroupsCountObject> = z.object(
  {
    count: z.object({
      refreshed_at: z
        .string()
        .describe("Timestamp that indicates when the count was last updated"),
      value: z.number().describe("Approximate count of groups"),
    }),
  },
);

export const groupsResponseSchema: z.ZodSchema<GroupsResponse> = z.object({
  groups: z.array(groupObjectSchema),
});

export const hostMappingObjectSchema: z.ZodSchema<HostMappingObject> = z.object(
  {
    cname: z.string().describe("The canonical name record for a host mapping"),
    expected_cnames: z
      .array(z.string())
      .describe(
        "Array of expected CNAME records for host mapping(s) of a given brand",
      ),
    is_valid: z
      .boolean()
      .describe("Whether a host mapping is valid or not for a given brand"),
    reason: z.string().describe("Reason why a host mapping is valid or not"),
  },
);

export const incrementalSkillBasedRoutingAttributeSchema: z.ZodSchema<IncrementalSkillBasedRoutingAttribute> =
  z.object({
    id: z
      .string()
      .describe("Automatically assigned when an attribute is created"),
    name: z.string().describe("The name of the attribute"),
    time: z
      .string()
      .describe("The time the attribute was created, updated, or deleted"),
    type: z.string().describe('One of "create", "update", or "delete"'),
  });

export const incrementalSkillBasedRoutingAttributeValueSchema: z.ZodSchema<IncrementalSkillBasedRoutingAttributeValue> =
  z.object({
    attribute_id: z.string().describe("Id of the associated attribute"),
    id: z
      .string()
      .describe("Automatically assigned when an attribute value is created"),
    name: z.string().describe("The name of the attribute value"),
    time: z
      .string()
      .describe(
        "The time the attribute value was created, updated, or deleted",
      ),
    type: z.string().describe('One of "create", "update", or "delete"'),
  });

export const incrementalSkillBasedRoutingInstanceValueSchema: z.ZodSchema<IncrementalSkillBasedRoutingInstanceValue> =
  z.object({
    attribute_value_id: z
      .string()
      .describe("Id of the associated attribute value"),
    id: z
      .string()
      .describe("Automatically assigned when an instance value is created"),
    instance_id: z.string().describe("Id of the associated agent or ticket"),
    time: z
      .string()
      .describe("The time the instance value was created or deleted"),
    type: z
      .string()
      .describe(
        'One of "associate_agent", "unassociate_agent", "associate_ticket", or "unassociate_ticket"',
      ),
  });

export const incrementalSkillBasedRoutingSchema: z.ZodSchema<IncrementalSkillBasedRouting> =
  z.object({
    attribute_values: z
      .array(incrementalSkillBasedRoutingAttributeValueSchema)
      .describe("Routing attribute values"),
    attributes: z
      .array(incrementalSkillBasedRoutingAttributeSchema)
      .describe("Routing attributes"),
    count: z
      .number()
      .describe("The number of results returned for the current request"),
    end_time: z
      .number()
      .describe(
        "The most recent resource creation time present in this result set in Unix epoch time",
      ),
    instance_values: z
      .array(incrementalSkillBasedRoutingInstanceValueSchema)
      .describe("Routing instance values"),
    next_page: z
      .string()
      .describe("The URL that should be called to get the next set of results"),
  });

export const keyDetailObjectSchema: z.ZodSchema<KeyDetailObject> = z.object({
  created_at: z.string().describe("Date and time the key details were created"),
  default: z
    .boolean()
    .describe(
      "If true, the system has used the first eight fields for the custom object type as the key details.",
    ),
  fields: z
    .array(z.object({}).passthrough())
    .describe(
      "Fields that are displayed in the key details. The order is defined by the order of the fields in the array",
    ),
  key: z
    .string()
    .describe(
      "Custom object type. Example: `zen:custom_object:car` refers to a custom object type with the \n`car` key\n",
    ),
  max_count: z
    .number()
    .describe("Maximum number of fields allowed in the key details"),
  updated_at: z
    .string()
    .describe("Date and time the key details were last updated"),
});

export const keyDetailsResponseSchema: z.ZodSchema<KeyDetailsResponse> =
  z.object({ key_detail: keyDetailObjectSchema });

export const listTicketCollaboratorsResponseSchema: z.ZodSchema<ListTicketCollaboratorsResponse> =
  z.object({}).passthrough();

export const listTicketEmailCCsResponseSchema: z.ZodSchema<ListTicketEmailCCsResponse> =
  z.object({}).passthrough();

export const listTicketFollowersResponseSchema: z.ZodSchema<ListTicketFollowersResponse> =
  z.object({}).passthrough();

export const listTicketIncidentsResponseSchema: z.ZodSchema<ListTicketIncidentsResponse> =
  z.object({}).passthrough();

export const listTicketProblemsResponseSchema: z.ZodSchema<ListTicketProblemsResponse> =
  z.object({}).passthrough();

export const localeObjectSchema: z.ZodSchema<LocaleObject> = z.object({
  created_at: z
    .string()
    .describe("The ISO 8601 formatted date-time the locale was created"),
  id: z.number().describe("The unique ID of the locale"),
  locale: z.string().describe("The name of the locale"),
  name: z.string().describe("The name of the language"),
  updated_at: z
    .string()
    .describe(
      "The ISO 8601 formatted date-time when the locale was last updated",
    ),
  url: z.string().describe("The URL of the locale record"),
});

export const localeResponseSchema: z.ZodSchema<LocaleResponse> = z.object({
  locale: localeObjectSchema,
});

export const localesResponseSchema: z.ZodSchema<LocalesResponse> = z.object({
  locales: z.array(localeObjectSchema),
});

export const macroApplyTicketResponseSchema: z.ZodSchema<MacroApplyTicketResponse> =
  z.object({
    result: z.object({
      ticket: z.object({
        assignee_id: z.number(),
        comment: z.object({
          body: z.string(),
          public: z.boolean(),
          scoped_body: z.array(z.array(z.string())),
        }),
        fields: z.object({ id: z.number(), value: z.string() }),
        group_id: z.number(),
        id: z.number(),
        url: z.string(),
      }),
    }),
  });

export const macroAttachmentObjectSchema: z.ZodSchema<MacroAttachmentObject> =
  z.object({
    content_type: z
      .string()
      .describe('The content type of the image. Example value: "image/png"'),
    content_url: z
      .string()
      .describe("A full URL where the attachment image file can be downloaded"),
    created_at: z
      .string()
      .describe("The time when this attachment was created"),
    filename: z.string().describe("The name of the image file"),
    id: z.number().describe("Automatically assigned when created"),
    size: z.number().describe("The size of the image file in bytes"),
  });

export const macroAttachmentResponseSchema: z.ZodSchema<MacroAttachmentResponse> =
  z.object({ macro_attachment: macroAttachmentObjectSchema });

export const macroAttachmentsResponseSchema: z.ZodSchema<MacroAttachmentsResponse> =
  z.object({ macro_attachments: z.array(macroAttachmentObjectSchema) });

export const macroCategoriesResponseSchema: z.ZodSchema<MacroCategoriesResponse> =
  z.object({ categories: z.array(z.string()) });

export const macroCommonObjectSchema: z.ZodSchema<MacroCommonObject> = z.object(
  {
    actions: z
      .array(actionObjectSchema)
      .describe(
        "Each action describes what the macro will do. See [Actions reference](/documentation/ticketing/reference-guides/actions-reference)",
      ),
    active: z
      .boolean()
      .describe("Useful for determining if the macro should be displayed"),
    created_at: z.string().describe("The time the macro was created"),
    default: z.boolean().describe("If true, the macro is a default macro"),
    description: z.string().nullable().describe("The description of the macro"),
    id: z
      .number()
      .describe("The ID automatically assigned when a macro is created"),
    position: z.number().describe("The position of the macro"),
    restriction: z
      .object({})
      .passthrough()
      .nullable()
      .describe(
        "Access to this macro. A null value allows unrestricted access for all users in the account",
      ),
    title: z.string().describe("The title of the macro"),
    updated_at: z.string().describe("The time of the last update of the macro"),
    url: z.string().describe("A URL to access the macro's details"),
  },
);

export const macroInputSchema: z.ZodSchema<MacroInput> = z.object({
  actions: z
    .array(actionObjectSchema)
    .describe("Each action describes what the macro will do"),
  active: z
    .boolean()
    .describe("Useful for determining if the macro should be displayed"),
  description: z.string().nullable().describe("The description of the macro"),
  restriction: z
    .object({
      id: z.number().describe("The numeric ID of the group or user"),
      ids: z.array(z.number()).describe("The numeric IDs of the groups"),
      type: z.string().describe("Allowed values are Group or User"),
    })
    .passthrough()
    .describe(
      "Who may access this macro. Will be null when everyone in the account can access it",
    ),
  title: z.string().describe("The title of the macro"),
});

export const macroObjectSchema: z.ZodSchema<MacroObject> = z.intersection(
  macroCommonObjectSchema,
  z.object({
    app_installation: z
      .string()
      .nullable()
      .describe("The app installation that requires each macro, if present"),
    categories: z.string().nullable().describe("The macro categories"),
    permissions: z.string().nullable().describe("Permissions for each macro"),
    usage_1h: z
      .number()
      .describe(
        "The number of times each macro has been used in the past hour",
      ),
    usage_7d: z
      .number()
      .describe(
        "The number of times each macro has been used in the past week",
      ),
    usage_24h: z
      .number()
      .describe("The number of times each macro has been used in the past day"),
    usage_30d: z
      .number()
      .describe(
        "The number of times each macro has been used in the past thirty days",
      ),
  }),
);

export const macroResponseSchema: z.ZodSchema<MacroResponse> = z.object({
  macro: macroObjectSchema,
});

export const macroUpdateManyInputSchema: z.ZodSchema<MacroUpdateManyInput> =
  z.object({
    macros: z.array(
      z.object({
        active: z
          .boolean()
          .describe("The active status of the macro (true or false)"),
        id: z.number().describe("The ID of the macro to update"),
        position: z.number().describe("The new position of the macro"),
      }),
    ),
  });

export const offsetPaginationObjectSchema: z.ZodSchema<OffsetPaginationObject> =
  z.object({
    count: z.number().describe("the total record count"),
    next_page: z.string().nullable().describe("the URL of the next page"),
    previous_page: z
      .string()
      .nullable()
      .describe("the URL of the previous page"),
  });

export const brandsResponseSchema: z.ZodSchema<BrandsResponse> = z.intersection(
  offsetPaginationObjectSchema,
  z.object({ brands: z.array(brandObjectSchema).describe("Array of brands") }),
);

export const listDeletedTicketsResponseSchema: z.ZodSchema<ListDeletedTicketsResponse> =
  z.intersection(
    z.object({
      deleted_tickets: z.array(
        z.object({
          actor: z.object({ id: z.number(), name: z.string() }),
          deleted_at: z.string(),
          id: z.number(),
          previous_state: z.string(),
          subject: z.string(),
        }),
      ),
    }),
    offsetPaginationObjectSchema,
  );

export const macrosResponseSchema: z.ZodSchema<MacrosResponse> = z.intersection(
  z.object({ macros: z.array(macroObjectSchema) }),
  offsetPaginationObjectSchema,
);

export const organizationFieldObjectSchema: z.ZodSchema<OrganizationFieldObject> =
  customFieldObjectSchema;

export const organizationFieldResponseSchema: z.ZodSchema<OrganizationFieldResponse> =
  z.object({ organization_field: organizationFieldObjectSchema });

export const organizationFieldsResponseSchema: z.ZodSchema<OrganizationFieldsResponse> =
  z.object({
    count: z.number().describe("Total count of records retrieved"),
    next_page: z.string().nullable().describe("URL of the next page"),
    organization_fields: z.array(organizationFieldObjectSchema),
    previous_page: z.string().nullable().describe("URL of the previous page"),
  });

export const organizationMembershipObjectSchema: z.ZodSchema<OrganizationMembershipObject> =
  z.object({
    created_at: z.string().describe("When this record was created"),
    default: z
      .boolean()
      .nullable()
      .describe(
        "Denotes whether this is the default organization membership for the user. If false, returns `null`",
      ),
    id: z
      .number()
      .describe("Automatically assigned when the membership is created"),
    organization_id: z
      .number()
      .describe(
        "The ID of the organization associated with this user, in this membership",
      ),
    organization_name: z
      .string()
      .describe(
        "The name of the organization associated with this user, in this membership",
      ),
    updated_at: z.string().describe("When this record last got updated"),
    url: z.string().describe("The API url of this membership"),
    user_id: z
      .number()
      .describe("The ID of the user for whom this memberships belongs"),
    view_tickets: z
      .boolean()
      .describe(
        "Denotes whether the user can or cannot have access to all organization's tickets.",
      ),
  });

export const organizationMembershipResponseSchema: z.ZodSchema<OrganizationMembershipResponse> =
  z.object({ organization_membership: organizationMembershipObjectSchema });

export const organizationMembershipsResponseSchema: z.ZodSchema<OrganizationMembershipsResponse> =
  z.object({
    organization_memberships: z.array(organizationMembershipObjectSchema),
  });

export const organizationMetadataObjectSchema: z.ZodSchema<OrganizationMetadataObject> =
  z.object({
    tickets_count: z
      .number()
      .describe("The number of tickets for the organization"),
    users_count: z
      .number()
      .describe("The number of users for the organization"),
  });

export const organizationObjectSchema: z.ZodSchema<OrganizationObject> =
  z.object({
    created_at: z.string().describe("The time the organization was created"),
    details: z
      .string()
      .nullable()
      .describe("Any details obout the organization, such as the address"),
    domain_names: z
      .array(z.string())
      .describe("An array of domain names associated with this organization"),
    external_id: z
      .string()
      .nullable()
      .describe(
        'A unique external id to associate organizations to an external record. The id is case-insensitive. For example, "company1" and "Company1" are considered the same',
      ),
    group_id: z
      .number()
      .nullable()
      .describe(
        "New tickets from users in this organization are automatically put in this group",
      ),
    id: z
      .number()
      .describe("Automatically assigned when the organization is created"),
    name: z.string().describe("A unique name for the organization"),
    notes: z
      .string()
      .nullable()
      .describe("Any notes you have about the organization"),
    organization_fields: z
      .object({})
      .passthrough()
      .nullable()
      .describe(
        "Custom fields for this organization. See [Custom organization fields](/api-reference/ticketing/organizations/organizations/#custom-organization-fields)",
      ),
    shared_comments: z
      .boolean()
      .describe(
        "End users in this organization are able to see each other's comments on tickets",
      ),
    shared_tickets: z
      .boolean()
      .describe(
        "End users in this organization are able to see each other's tickets",
      ),
    tags: z.array(z.string()).describe("The tags of the organization"),
    updated_at: z
      .string()
      .describe("The time of the last update of the organization"),
    url: z.string().describe("The API url of this organization"),
  });

export const exportIncrementalOrganizationsResponseSchema: z.ZodSchema<ExportIncrementalOrganizationsResponse> =
  z.object({
    count: z.number(),
    end_of_stream: z.boolean(),
    end_time: z.number(),
    next_page: z.string().nullable(),
    organizations: z.array(organizationObjectSchema),
  });

export const organizationResponseSchema: z.ZodSchema<OrganizationResponse> =
  z.object({ organization: organizationObjectSchema });

export const organizationSubscriptionInputSchema: z.ZodSchema<OrganizationSubscriptionInput> =
  z.object({
    organization_id: z.number().describe("The ID of the organization"),
    user_id: z.number().describe("The ID of the user"),
  });

export const organizationSubscriptionCreateRequestSchema: z.ZodSchema<OrganizationSubscriptionCreateRequest> =
  z.object({ organization_subscription: organizationSubscriptionInputSchema });

export const organizationSubscriptionObjectSchema: z.ZodSchema<OrganizationSubscriptionObject> =
  z.object({
    created_at: z
      .string()
      .describe("The date the organization subscription was created"),
    id: z.number().describe("The ID of the organization subscription"),
    organization_id: z.number().describe("The ID of the organization"),
    user_id: z.number().describe("The ID of the user"),
  });

export const organizationSubscriptionResponseSchema: z.ZodSchema<OrganizationSubscriptionResponse> =
  z.object({ organization_subscription: organizationSubscriptionObjectSchema });

export const organizationSubscriptionsResponseSchema: z.ZodSchema<OrganizationSubscriptionsResponse> =
  z.intersection(
    offsetPaginationObjectSchema,
    z.object({
      organization_subscriptions: z
        .array(organizationSubscriptionObjectSchema)
        .describe("An array of organization subscriptions"),
    }),
  );

export const organizationsRelatedResponseSchema: z.ZodSchema<OrganizationsRelatedResponse> =
  z.object({ organization_related: organizationMetadataObjectSchema });

export const organizationsResponseSchema: z.ZodSchema<OrganizationsResponse> =
  z.object({
    count: z.number(),
    next_page: z.string().nullable(),
    organizations: z.array(organizationObjectSchema),
    previous_page: z.string().nullable(),
  });

export const paginationSchema: z.ZodSchema<Pagination> = z.object({
  links: z.object({ next: z.string(), prev: z.string() }),
  meta: z.object({
    after_cursor: z.string(),
    before_cursor: z.string(),
    has_more: z.boolean(),
  }),
});

export const pushNotificationDevicesInputSchema: z.ZodSchema<PushNotificationDevicesInput> =
  z.array(z.string().describe("Mobile device token"));

export const pushNotificationDevicesRequestSchema: z.ZodSchema<PushNotificationDevicesRequest> =
  z.object({ push_notification_devices: pushNotificationDevicesInputSchema });

export const queueObjectSchema: z.ZodSchema<QueueObject> = z.object({
  created_at: z.string().describe("The time the queue was created"),
  definition: z
    .object({
      all: z.array(
        z.object({
          field: z.string(),
          operator: z.string(),
          value: z.string(),
        }),
      ),
      any: z.array(
        z.object({
          field: z.string(),
          operator: z.string(),
          value: z.string(),
        }),
      ),
    })
    .describe("Conditions when queue could be applied"),
  description: z.string().describe("The description of the queue"),
  id: z.string().describe("Automatically assigned when creating queue"),
  name: z.string().describe("The name of the queue"),
  order: z.number().describe("The queue-applied order"),
  primary_groups: z
    .object({
      count: z.number(),
      groups: z.array(z.object({ id: z.number(), name: z.string() })),
    })
    .describe("Primary group ids linked to the queue"),
  priority: z.number().describe("The queue-applied priority"),
  secondary_groups: z
    .object({
      count: z.number(),
      groups: z.array(z.object({ id: z.number(), name: z.string() })),
    })
    .describe("Secondary group ids linked to the queue"),
  updated_at: z.string().describe("The time of the queue's last update"),
  url: z.string().describe("The API URL of the queue"),
});

export const queueResponseSchema: z.ZodSchema<QueueResponse> = z.object({
  queue: queueObjectSchema,
});

export const queuesResponseSchema: z.ZodSchema<QueuesResponse> = z.object({
  queues: z.array(queueObjectSchema),
});

export const renewSessionResponseSchema: z.ZodSchema<RenewSessionResponse> =
  z.object({
    authenticity_token: z
      .string()
      .describe("A token of authenticity for the request"),
  });

export const resourceCollectionObjectSchema: z.ZodSchema<ResourceCollectionObject> =
  z.object({
    created_at: z.string().describe("When the resource collection was created"),
    id: z
      .number()
      .describe(
        "id for the resource collection. Automatically assigned upon creation",
      ),
    resources: z
      .array(
        z.object({
          deleted: z.boolean(),
          identifier: z.string(),
          resource_id: z.number(),
          type: z.string(),
        }),
      )
      .describe(
        "Array of resource metadata objects. See [Resource objects](#resource-objects)",
      ),
    updated_at: z
      .string()
      .describe("Last time the resource collection was updated"),
  });

export const resourceCollectionResponseSchema: z.ZodSchema<ResourceCollectionResponse> =
  z.object({ resource_collection: resourceCollectionObjectSchema });

export const resourceCollectionsResponseSchema: z.ZodSchema<ResourceCollectionsResponse> =
  z.object({
    count: z.number(),
    next_page: z.string().nullable(),
    previous_page: z.string().nullable(),
    resource_collections: z.array(resourceCollectionObjectSchema),
  });

export const slaPolicyFilterConditionObjectSchema: z.ZodSchema<SLAPolicyFilterConditionObject> =
  z.object({
    field: z.string().describe("The name of a ticket field"),
    operator: z.string().describe("A comparison operator"),
    value: z
      .union([z.string(), z.array(z.unknown())])
      .describe("The value of a ticket field"),
  });

export const slaPolicyFilterDefinitionResponseSchema: z.ZodSchema<SLAPolicyFilterDefinitionResponse> =
  z.object({
    definitions: z.object({
      all: z.array(
        z.object({
          group: z.string(),
          operators: z.array(
            z.object({ title: z.string(), value: z.string() }),
          ),
          target: z.string().nullable(),
          title: z.string(),
          value: z.string(),
          values: z.object({
            list: z.array(
              z.object({ title: z.string(), value: z.string().nullable() }),
            ),
            type: z.string(),
          }),
        }),
      ),
      any: z.array(
        z.object({
          group: z.string(),
          operators: z.array(
            z.object({ title: z.string(), value: z.string() }),
          ),
          target: z.string().nullable(),
          title: z.string(),
          value: z.string(),
          values: z.object({
            list: z.array(
              z.object({ title: z.string(), value: z.string().nullable() }),
            ),
            type: z.string(),
          }),
        }),
      ),
    }),
  });

export const slaPolicyFilterObjectSchema: z.ZodSchema<SLAPolicyFilterObject> = z
  .object({
    all: z.array(slaPolicyFilterConditionObjectSchema),
    any: z.array(slaPolicyFilterConditionObjectSchema),
  })
  .describe(
    "An object that describes the conditions that a ticket must match in order for an SLA policy to be applied to that ticket. See [Filter](#filter).",
  );

export const slaPolicyMetricObjectSchema: z.ZodSchema<SLAPolicyMetricObject> =
  z.object({
    business_hours: z
      .boolean()
      .describe(
        "Whether the metric targets are being measured in business hours or calendar hours",
      ),
    metric: z
      .string()
      .describe("The definition of the time that is being measured"),
    priority: z.string().describe("Priority that a ticket must match"),
    target: z
      .number()
      .describe(
        "The time within which the end-state for a metric should be met",
      ),
  });

export const slaPolicyObjectSchema: z.ZodSchema<SLAPolicyObject> = z.object({
  created_at: z.string().describe("The time the SLA policy was created"),
  description: z.string().describe("The description of the SLA policy"),
  filter: slaPolicyFilterObjectSchema,
  id: z.number().describe("Automatically assigned when created"),
  policy_metrics: z
    .array(slaPolicyMetricObjectSchema)
    .describe("Array of [Policy Metric](#policy-metric) objects"),
  position: z
    .number()
    .describe(
      "Position of the SLA policy that determines the order they will be matched. If not specified, the SLA policy is added as the last position",
    ),
  title: z.string().describe("The title of the SLA policy"),
  updated_at: z
    .string()
    .describe("The time of the last update of the SLA policy"),
  url: z.string().describe("URL of the SLA Policy reacord"),
});

export const slaPoliciesResponseSchema: z.ZodSchema<SLAPoliciesResponse> =
  z.object({
    count: z.number(),
    next_page: z.string().nullable(),
    previous_page: z.string().nullable(),
    sla_policies: z.array(slaPolicyObjectSchema),
  });

export const slaPolicyResponseSchema: z.ZodSchema<SLAPolicyResponse> = z.object(
  { sla_policy: slaPolicyObjectSchema },
);

export const satisfactionRatingObjectSchema: z.ZodSchema<SatisfactionRatingObject> =
  z.object({
    assignee_id: z
      .number()
      .describe("The id of agent assigned to at the time of rating"),
    comment: z
      .string()
      .describe("The comment received with this rating, if available"),
    created_at: z
      .string()
      .describe("The time the satisfaction rating got created"),
    group_id: z
      .number()
      .describe("The id of group assigned to at the time of rating"),
    id: z.number().describe("Automatically assigned upon creation"),
    reason: z
      .string()
      .describe(
        "The reason for a bad rating given by the requester in a follow-up question. Satisfaction reasons must be [enabled](https://support.zendesk.com/hc/en-us/articles/223152967)",
      ),
    reason_code: z
      .number()
      .describe(
        'The default reasons the user can select from a list menu for giving a negative rating. See [Reason codes](/api-reference/ticketing/ticket-management/satisfaction_reasons/#reason-codes) in the Satisfaction Reasons API. Can only be set on ratings with a `score` of "bad". Responses don\'t include this property',
      ),
    reason_id: z
      .number()
      .describe(
        'id for the reason the user gave a negative rating. Can only be set on ratings with a `score` of "bad". To get a descriptive value for the id, use the [Show Reason for Satisfaction Rating](/api-reference/ticketing/ticket-management/satisfaction_reasons/#show-reason-for-satisfaction-rating) endpoint',
      ),
    requester_id: z
      .number()
      .describe("The id of ticket requester submitting the rating"),
    score: z
      .string()
      .describe('The rating "offered", "unoffered", "good" or "bad"'),
    ticket_id: z.number().describe("The id of ticket being rated"),
    updated_at: z
      .string()
      .describe("The time the satisfaction rating got updated"),
    url: z.string().describe("The API url of this rating"),
  });

export const satisfactionRatingResponseSchema: z.ZodSchema<SatisfactionRatingResponse> =
  z.object({ satisfaction_rating: z.array(satisfactionRatingObjectSchema) });

export const satisfactionRatingsCountResponseSchema: z.ZodSchema<SatisfactionRatingsCountResponse> =
  z.object({
    count: z.object({ refreshed_at: z.string(), value: z.number() }),
  });

export const satisfactionRatingsResponseSchema: z.ZodSchema<SatisfactionRatingsResponse> =
  z.object({ satisfaction_ratings: z.array(satisfactionRatingObjectSchema) });

export const satisfactionReasonObjectSchema: z.ZodSchema<SatisfactionReasonObject> =
  z.object({
    created_at: z.string().describe("The time the reason was created"),
    deleted_at: z.string().describe("The time the reason was deleted"),
    id: z.number().describe("Automatically assigned upon creation"),
    raw_value: z
      .string()
      .describe(
        'The dynamic content placeholder, if present, or the current "value", if not. See [Dynamic Content Items](/api-reference/ticketing/ticket-management/dynamic_content/)',
      ),
    reason_code: z
      .number()
      .describe(
        "An account-level code for referencing the reason. Custom reasons are assigned an auto-incrementing integer (non-system reason codes begin at 1000). See [Reason codes](#reason-codes)",
      ),
    updated_at: z.string().describe("The time the reason was updated"),
    url: z.string().describe("API URL for the resource"),
    value: z
      .string()
      .describe("Translated value of the reason in the account locale"),
  });

export const satisfactionReasonResponseSchema: z.ZodSchema<SatisfactionReasonResponse> =
  z.object({ reason: z.array(satisfactionReasonObjectSchema) });

export const satisfactionReasonsResponseSchema: z.ZodSchema<SatisfactionReasonsResponse> =
  z.object({ reasons: z.array(satisfactionReasonObjectSchema) });

export const searchCountResponseSchema: z.ZodSchema<SearchCountResponse> =
  z.object({ count: z.number() });

export const searchResultObjectSchema: z.ZodSchema<SearchResultObject> =
  z.object({
    created_at: z.string().describe("When the resource was created"),
    default: z
      .boolean()
      .describe("Flag to indicate whether this is the default resource"),
    deleted: z
      .boolean()
      .describe("Flag to indicate whether or not resource has been deleted"),
    description: z.string().describe("The description of the resource"),
    id: z.number().describe("The ID of the resource"),
    name: z.string().describe("The name of the resource"),
    result_type: z.string().describe("The type of the resource"),
    updated_at: z.string().describe("When the resource was last updated"),
    url: z.string().describe("The url of the resource"),
  });

export const searchExportResponseSchema: z.ZodSchema<SearchExportResponse> =
  z.object({
    facets: z
      .string()
      .nullable()
      .describe("The facets corresponding to the search query"),
    links: z
      .object({
        next: z
          .string()
          .nullable()
          .describe("The url to the next entry via the cursor."),
        prev: z
          .string()
          .nullable()
          .describe("The url to the previous entry via the cursor."),
      })
      .describe(
        "The links to the previous and next entries via the cursor ids in the metadata.",
      ),
    meta: z
      .object({
        after_cursor: z
          .string()
          .nullable()
          .describe("The cursor id for the next object."),
        before_cursor: z
          .string()
          .nullable()
          .describe("The cursor id for the previous object."),
        has_more: z
          .boolean()
          .describe(
            "Whether there are more items yet to be returned by the cursor.",
          ),
      })
      .describe("Metadata for the export query response."),
    results: z
      .array(searchResultObjectSchema)
      .describe(
        "May consist of tickets, users, groups, or organizations, as specified by the `result_type` property in each result object",
      ),
  });

export const searchResponseSchema: z.ZodSchema<SearchResponse> = z.object({
  count: z
    .number()
    .describe(
      "The number of resources returned by the query corresponding to this page of results in the paginated response",
    ),
  facets: z
    .string()
    .nullable()
    .describe("The facets corresponding to the search query"),
  next_page: z.string().nullable().describe("URL to the next page of results"),
  previous_page: z
    .string()
    .nullable()
    .describe("URL to the previous page of results"),
  results: z
    .array(searchResultObjectSchema)
    .describe(
      "May consist of tickets, users, groups, or organizations, as specified by the `result_type` property in each result object",
    ),
});

export const sessionObjectSchema: z.ZodSchema<SessionObject> = z.object({
  authenticated_at: z
    .string()
    .nullable()
    .describe("When the session was created"),
  id: z.number().describe("Automatically assigned when the session is created"),
  last_seen_at: z
    .string()
    .nullable()
    .describe(
      "The last approximate time this session was seen. This does not update on every request.",
    ),
  url: z.string().nullable().describe("The API URL of this session"),
  user_id: z.number().nullable().describe("The id of the user"),
});

export const sessionResponseSchema: z.ZodSchema<SessionResponse> = z.object({
  session: z.array(sessionObjectSchema),
});

export const sessionsResponseSchema: z.ZodSchema<SessionsResponse> = z.object({
  sessions: z.array(sessionObjectSchema),
});

export const sharingAgreementObjectSchema: z.ZodSchema<SharingAgreementObject> =
  z.object({
    created_at: z.string().describe("The time the record was created"),
    id: z.number().describe("Automatically assigned upon creation"),
    name: z.string().describe("Name of this sharing agreement"),
    partner_name: z
      .string()
      .nullable()
      .describe('Can be one of the following: "jira", null'),
    remote_subdomain: z
      .string()
      .describe(
        "Subdomain of the remote account or null if not associated with an account",
      ),
    status: z
      .string()
      .describe(
        'Can be one of the following: "accepted", "declined", "pending", "inactive", "failed", "ssl_error", "configuration_error"',
      ),
    type: z
      .string()
      .describe('Can be one of the following: "inbound", "outbound"'),
    url: z.string().describe("URL of the sharing agreement record"),
  });

export const sharingAgreementResponseSchema: z.ZodSchema<SharingAgreementResponse> =
  z.object({ sharing_agreement: sharingAgreementObjectSchema });

export const sharingAgreementsResponseSchema: z.ZodSchema<SharingAgreementsResponse> =
  z.object({ sharing_agreements: z.array(sharingAgreementObjectSchema) });

export const skillBasedRoutingAttributeDefinitionsSchema: z.ZodSchema<SkillBasedRoutingAttributeDefinitions> =
  z.object({
    definitions: z.object({
      conditions_all: z.array(
        z.object({ subject: z.string(), title: z.string() }),
      ),
      conditions_any: z.array(
        z.object({ subject: z.string(), title: z.string() }),
      ),
    }),
  });

export const skillBasedRoutingAttributeObjectSchema: z.ZodSchema<SkillBasedRoutingAttributeObject> =
  z.object({
    created_at: z.string().describe("When this record was created"),
    id: z
      .string()
      .describe("Automatically assigned when an attribute is created"),
    name: z.string().describe("The name of the attribute"),
    updated_at: z.string().describe("When this record was last updated"),
    url: z.string().describe("URL of the attribute"),
  });

export const skillBasedRoutingAttributeResponseSchema: z.ZodSchema<SkillBasedRoutingAttributeResponse> =
  z.object({ attribute: skillBasedRoutingAttributeObjectSchema });

export const skillBasedRoutingAttributeValueObjectSchema: z.ZodSchema<SkillBasedRoutingAttributeValueObject> =
  z.object({
    attribute_id: z.string().describe("Id of the associated attribute"),
    created_at: z.string().describe("When this record was created"),
    id: z
      .string()
      .describe("Automatically assigned when an attribute value is created"),
    name: z.string().describe("The name of the attribute value"),
    updated_at: z.string().describe("When this record was last updated"),
    url: z.string().describe("URL of the attribute value"),
  });

export const skillBasedRoutingAttributeValueResponseSchema: z.ZodSchema<SkillBasedRoutingAttributeValueResponse> =
  z.object({ attribute_value: skillBasedRoutingAttributeValueObjectSchema });

export const skillBasedRoutingAttributeValuesResponseSchema: z.ZodSchema<SkillBasedRoutingAttributeValuesResponse> =
  z.object({
    attribute_values: z.array(skillBasedRoutingAttributeValueObjectSchema),
  });

export const skillBasedRoutingAttributesResponseSchema: z.ZodSchema<SkillBasedRoutingAttributesResponse> =
  z.object({
    attributes: z.array(skillBasedRoutingAttributeObjectSchema),
    count: z.number(),
    next_page: z.string().nullable(),
    previous_page: z.string().nullable(),
  });

export const skillBasedRoutingTicketFulfilledResponseSchema: z.ZodSchema<SkillBasedRoutingTicketFulfilledResponse> =
  z.object({ fulfilled_ticket_ids: z.array(z.number()) });

export const supportAddressObjectSchema: z.ZodSchema<SupportAddressObject> =
  z.object({
    brand_id: z
      .number()
      .describe(
        "The ID of the [brand](/api-reference/ticketing/account-configuration/brands/)",
      ),
    cname_status: z
      .union([z.literal("unknown"), z.literal("verified"), z.literal("failed")])
      .describe(
        'Whether all of the required CNAME records are set. Possible values: "unknown", "verified", "failed"',
      ),
    created_at: z.string().describe("When the address was created"),
    default: z
      .boolean()
      .describe("Whether the address is the account's default support address"),
    dns_results: z
      .union([z.literal("verified"), z.literal("failed")])
      .describe(
        'Verification statuses for the domain and CNAME records. Possible types: "verified", "failed"',
      ),
    domain_verification_code: z
      .string()
      .describe(
        "Verification string to be added as a TXT record to the domain. Possible types: string or null.",
      ),
    domain_verification_status: z
      .union([z.literal("unknown"), z.literal("verified"), z.literal("failed")])
      .describe(
        'Whether the domain verification record is valid. Possible values: "unknown", "verified", "failed"',
      ),
    email: z
      .string()
      .describe(
        "The email address. You can't change the email address of an existing support address.",
      ),
    forwarding_status: z
      .union([
        z.literal("unknown"),
        z.literal("waiting"),
        z.literal("verified"),
        z.literal("failed"),
      ])
      .describe(
        'Status of email forwarding. Possible values: "unknown", "waiting", "verified", or "failed"',
      ),
    id: z.number().describe("Automatically assigned when created"),
    name: z.string().describe("The name for the address"),
    spf_status: z
      .union([z.literal("unknown"), z.literal("verified"), z.literal("failed")])
      .describe(
        'Whether the SPF record is set up correctly. Possible values: "unknown", "verified", "failed"',
      ),
    updated_at: z.string().describe("When the address was updated"),
  });

export const supportAddressResponseSchema: z.ZodSchema<SupportAddressResponse> =
  z.object({ recipient_address: supportAddressObjectSchema });

export const supportAddressesResponseSchema: z.ZodSchema<SupportAddressesResponse> =
  z.object({ recipient_addresses: z.array(supportAddressObjectSchema) });

export const suspendedTicketsAttachmentsResponseSchema: z.ZodSchema<SuspendedTicketsAttachmentsResponse> =
  z.object({
    upload: z.object({
      attachments: z.array(attachmentObjectSchema),
      token: z.string().describe("Token for subsequent request"),
    }),
  });

export const suspendedTicketsExportResponseSchema: z.ZodSchema<SuspendedTicketsExportResponse> =
  z.object({ export: z.object({ status: z.string(), view_id: z.string() }) });

export const systemFieldOptionObjectSchema: z.ZodSchema<SystemFieldOptionObject> =
  z.object({
    name: z.string().describe("Name of the system field option"),
    value: z.string().describe("Value of the system field option"),
  });

export const tagCountObjectSchema: z.ZodSchema<TagCountObject> = z.object({
  refreshed_at: z
    .string()
    .describe("The time that the count value was last refreshed"),
  value: z.number().describe("The count of tags created in the last 24 hours"),
});

export const tagCountResponseSchema: z.ZodSchema<TagCountResponse> = z.object({
  count: tagCountObjectSchema,
});

export const tagListTagObjectSchema: z.ZodSchema<TagListTagObject> = z.object({
  count: z.number().describe("The number of tags"),
  name: z.string().describe("A name for the tag"),
});

export const tagUrlObjectSchema: z.ZodSchema<TagUrlObject> = z.object({
  url: z.string().describe("The url associated to the api request"),
});

export const tagsByObjectIdResponseSchema: z.ZodSchema<TagsByObjectIdResponse> =
  z.object({ tags: z.array(z.string()).describe("An array of strings") });

export const tagsResponseSchema: z.ZodSchema<TagsResponse> = z.object({
  count: z.number().describe("The number of pages"),
  next_page: z.string().nullable().describe("The url of the previous page"),
  previous_page: z.string().nullable().describe("The url of the next page"),
  tags: z.array(tagListTagObjectSchema),
});

export const targetBasecampSchema: z.ZodSchema<TargetBasecamp> = z.object({
  message_id: z
    .string()
    .describe('Can be filled if it is a "message" resource'),
  password: z
    .string()
    .describe(
      "The 37Signals password for the Basecamp account (only writable)",
    ),
  project_id: z
    .string()
    .describe(
      "The ID of the project in Basecamp where updates should be pushed",
    ),
  resource: z.string().describe('"todo" or "message"'),
  target_url: z
    .string()
    .describe("The URL of your Basecamp account, including protocol and path"),
  todo_list_id: z.string().describe('Can be filled if it is a "todo" resource'),
  token: z
    .string()
    .describe(
      "Get the API token from My info > Show your tokens > Token for feed readers or the Basecamp API in your Basecamp account",
    ),
  username: z
    .string()
    .describe(
      "The 37Signals username of the account you use to log in to Basecamp",
    ),
});

export const targetCampfireSchema: z.ZodSchema<TargetCampfire> = z.object({
  preserve_format: z.boolean(),
  room: z.string(),
  ssl: z.boolean(),
  subdomain: z.string(),
  token: z.string(),
});

export const targetClickatellSchema: z.ZodSchema<TargetClickatell> = z.object({
  api_id: z.string(),
  attribute: z.string().describe("Read-only"),
  from: z.string(),
  method: z.string().describe("Read-only"),
  password: z.string().describe("only writable"),
  target_url: z.string().describe("Read-only"),
  to: z.string(),
  us_small_business_account: z.string(),
  username: z.string(),
});

export const targetCommonFieldsSchema: z.ZodSchema<TargetCommonFields> =
  z.object({
    active: z.boolean().describe("Whether or not the target is activated"),
    created_at: z.string().describe("The time the target was created"),
    id: z.number().describe("Automatically assigned when created"),
    title: z.string().describe("A name for the target"),
    type: z
      .string()
      .describe(
        'A pre-defined target, such as "basecamp_target". See the additional attributes for the type that follow',
      ),
  });

export const targetEmailSchema: z.ZodSchema<TargetEmail> = z.object({
  email: z.string(),
  subject: z.string(),
});

export const targetFailureObjectSchema: z.ZodSchema<TargetFailureObject> =
  z.object({
    consecutive_failure_count: z
      .number()
      .describe("Number of times the target failed consecutively"),
    created_at: z.string().describe("Time of the failure"),
    id: z.number().describe("The ID of the target failure"),
    raw_request: z.string().describe("The raw message of the target request"),
    raw_response: z.string().describe("The raw response of the failure"),
    status_code: z.number().describe("HTTP status code of the target failure"),
    target_name: z.string().describe("Name of the target failure"),
    url: z.string().describe("The API url of the failure record"),
  });

export const targetFailureResponseSchema: z.ZodSchema<TargetFailureResponse> =
  z.object({ target_failure: targetFailureObjectSchema });

export const targetFailuresResponseSchema: z.ZodSchema<TargetFailuresResponse> =
  z.object({ target_failures: z.array(targetFailureObjectSchema) });

export const targetFlowdockSchema: z.ZodSchema<TargetFlowdock> = z.object({
  api_token: z.string(),
});

export const targetGetSatisfactionSchema: z.ZodSchema<TargetGetSatisfaction> =
  z.object({
    account_name: z.string(),
    email: z.string(),
    password: z.string().describe("only writable"),
    target_url: z.string(),
  });

export const targetHttpSchema: z.ZodSchema<TargetHTTP> = z.object({
  content_type: z
    .string()
    .describe(
      '"application/json", "application/xml", or "application/x-www-form-urlencoded"',
    ),
  method: z.string().describe('"get", "patch", "put", "post", or "delete"'),
  password: z.string().describe("only writable"),
  target_url: z.string(),
  username: z.string(),
});

export const targetJiraSchema: z.ZodSchema<TargetJira> = z.object({
  password: z.string().describe("only writable"),
  target_url: z.string(),
  username: z.string(),
});

export const targetPivotalSchema: z.ZodSchema<TargetPivotal> = z.object({
  owner_by: z.string(),
  project_id: z.string(),
  requested_by: z.string(),
  story_labels: z.string(),
  story_title: z.string(),
  story_type: z.string(),
  token: z.string(),
});

export const targetTwitterSchema: z.ZodSchema<TargetTwitter> = z.object({
  secret: z.string().describe("only writable"),
  token: z.string(),
});

export const targetUrlSchema: z.ZodSchema<TargetURL> = z.object({
  attribute: z.string(),
  method: z.string().describe('"get"'),
  password: z.string().describe("only writable"),
  target_url: z.string(),
  username: z.string(),
});

export const targetYammerSchema: z.ZodSchema<TargetYammer> = z.object({
  group_id: z.string(),
  token: z.string(),
});

export const targetObjectSchema: z.ZodSchema<TargetObject> = z.intersection(
  targetCommonFieldsSchema,
  z.union([
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

export const targetResponseSchema: z.ZodSchema<TargetResponse> = z.object({
  target: targetObjectSchema,
});

export const targetsResponseSchema: z.ZodSchema<TargetsResponse> = z.object({
  targets: z.array(targetObjectSchema),
});

export const ticketAuditViaObjectSchema: z.ZodSchema<TicketAuditViaObject> = z
  .object({
    channel: z
      .string()
      .describe(
        'This tells you how the ticket or event was created. Examples: "web", "mobile", "rule", "system"',
      ),
    source: z
      .object({})
      .passthrough()
      .describe(
        "For some channels a source object gives more information about how or why the ticket or event was created",
      ),
  })
  .describe(
    "Describes how the object was created. See the [Via object reference](/documentation/ticketing/reference-guides/via-object-reference)",
  );

export const requestObjectSchema: z.ZodSchema<RequestObject> = z.object({
  assignee_id: z
    .number()
    .describe("The id of the assignee if the field is visible to end users"),
  can_be_solved_by_me: z
    .boolean()
    .describe("If true, end user can mark request as solved."),
  collaborator_ids: z
    .array(z.number())
    .describe("The ids of users currently CC'ed on the ticket"),
  created_at: z.string().describe("When this record was created"),
  custom_fields: z
    .array(z.object({ id: z.number(), value: z.string() }))
    .describe(
      "Custom fields for the request. See [Setting custom field values](/api-reference/ticketing/tickets/tickets/#setting-custom-field-values) in the Tickets doc",
    ),
  custom_status_id: z
    .number()
    .describe("The custom ticket status id of the ticket"),
  description: z
    .string()
    .describe(
      "Read-only first comment on the request. When [creating a request](#create-request), use `comment` to set the description",
    ),
  due_at: z
    .string()
    .describe(
      'When the task is due (only applies if the request is of type "task")',
    ),
  email_cc_ids: z
    .array(z.number())
    .describe(
      "The ids of users who are currently email CCs on the ticket. See [CCs and followers resources](https://support.zendesk.com/hc/en-us/articles/360020585233) in the Support Help Center",
    ),
  followup_source_id: z
    .number()
    .describe(
      "The id of the original ticket if this request is a follow-up ticket. See [Create Request](#create-request)",
    ),
  group_id: z
    .number()
    .describe(
      "The id of the assigned group if the field is visible to end users",
    ),
  id: z.number().describe("Automatically assigned when creating requests"),
  is_public: z
    .boolean()
    .describe("Is true if any comments are public, false otherwise"),
  organization_id: z.number().describe("The organization of the requester"),
  priority: z
    .string()
    .describe('The priority of the request, "low", "normal", "high", "urgent"'),
  recipient: z
    .string()
    .describe("The original recipient e-mail address of the request"),
  requester_id: z.number().describe("The id of the requester"),
  solved: z
    .boolean()
    .describe(
      'Whether or not request is solved (an end user can set this if "can_be_solved_by_me", above, is true for that user)',
    ),
  status: z
    .string()
    .describe(
      'The state of the request, "new", "open", "pending", "hold", "solved", "closed"',
    ),
  subject: z
    .string()
    .describe(
      "The value of the subject field for this request if the subject field is visible to end users; a truncated version of the description otherwise",
    ),
  ticket_form_id: z
    .number()
    .describe(
      "The numeric id of the ticket form associated with this request if the form is visible to end users - only applicable for enterprise accounts",
    ),
  type: z
    .string()
    .describe(
      'The type of the request, "question", "incident", "problem", "task"',
    ),
  updated_at: z.string().describe("When this record last got updated"),
  url: z.string().describe("The API url of this request"),
  via: ticketAuditViaObjectSchema,
});

export const requestResponseSchema: z.ZodSchema<RequestResponse> = z.object({
  request: requestObjectSchema,
});

export const requestsResponseSchema: z.ZodSchema<RequestsResponse> = z.object({
  requests: z.array(requestObjectSchema),
});

export const ticketAuditObjectSchema: z.ZodSchema<TicketAuditObject> = z.object(
  {
    author_id: z.number().describe("The user who created the audit"),
    created_at: z.string().describe("The time the audit was created"),
    events: z
      .array(z.object({}).passthrough())
      .describe(
        "An array of the events that happened in this audit. See the [Ticket Audit events reference](/documentation/ticketing/reference-guides/ticket-audit-events-reference)",
      ),
    id: z.number().describe("Automatically assigned when creating audits"),
    metadata: z
      .object({})
      .passthrough()
      .describe("Metadata for the audit, custom and system data"),
    ticket_id: z.number().describe("The ID of the associated ticket"),
    via: ticketAuditViaObjectSchema,
  },
);

export const ticketAuditResponseSchema: z.ZodSchema<TicketAuditResponse> =
  z.object({ audit: ticketAuditObjectSchema });

export const ticketAuditsCountResponseSchema: z.ZodSchema<TicketAuditsCountResponse> =
  z.object({
    count: z.object({ refreshed_at: z.string(), value: z.number() }),
  });

export const ticketAuditsResponseSchema: z.ZodSchema<TicketAuditsResponse> =
  z.object({
    after_cursor: z.string(),
    after_url: z.string(),
    audits: z.array(ticketAuditObjectSchema),
    before_cursor: z.string(),
    before_url: z.string(),
  });

export const ticketAuditsResponseNoneCursorSchema: z.ZodSchema<TicketAuditsResponseNoneCursor> =
  z.object({
    audits: z.array(ticketAuditObjectSchema),
    count: z.number(),
    next_page: z.string().nullable(),
    previous_page: z.string().nullable(),
  });

export const ticketChatCommentRedactionResponseSchema: z.ZodSchema<TicketChatCommentRedactionResponse> =
  z.object({
    chat_event: z
      .object({
        id: z.number().describe("Id assigned to the chat event object"),
        type: z.string().describe("Type of chat event"),
        value: z
          .object({
            chat_id: z.string().describe("Id of the chat session"),
            history: z
              .array(z.object({}).passthrough())
              .describe("Chat events within the chat session"),
            visitor_id: z.string().describe("Id assigned to the visitor"),
          })
          .describe("The value of the chat event object"),
      })
      .describe("Chat event object"),
  });

export const ticketCommentObjectSchema: z.ZodSchema<TicketCommentObject> =
  z.object({
    attachments: z
      .array(attachmentObjectSchema)
      .describe(
        "Attachments, if any. See [Attachment](/api-reference/ticketing/tickets/ticket-attachments/)",
      ),
    audit_id: z
      .number()
      .describe(
        "The id of the ticket audit record. See [Show Audit](/api-reference/ticketing/tickets/ticket_audits/#show-audit)",
      ),
    author_id: z
      .number()
      .describe("The id of the comment author. See [Author id](#author-id)"),
    body: z.string().describe("The comment string. See [Bodies](#bodies)"),
    created_at: z.string().describe("The time the comment was created"),
    html_body: z
      .string()
      .describe("The comment formatted as HTML. See [Bodies](#bodies)"),
    id: z
      .number()
      .describe("Automatically assigned when the comment is created"),
    metadata: z
      .object({})
      .passthrough()
      .describe(
        "System information (web client, IP address, etc.) and comment flags, if any. See [Comment flags](#comment-flags)",
      ),
    plain_body: z
      .string()
      .describe("The comment presented as plain text. See [Bodies](#bodies)"),
    public: z
      .boolean()
      .describe(
        "true if a public comment; false if an internal note. The initial value set on ticket creation persists for any additional comment unless you change it",
      ),
    type: z
      .string()
      .describe(
        "`Comment` or `VoiceComment`. The JSON object for adding voice comments to tickets is different. See [Adding voice comments to tickets](/documentation/ticketing/managing-tickets/adding-voice-comments-to-tickets)",
      ),
    uploads: z
      .array(z.string())
      .describe(
        "List of tokens received from [uploading files](/api-reference/ticketing/tickets/ticket-attachments/#upload-files) for comment attachments. The files are attached by creating or updating tickets with the tokens. See [Attaching files](/api-reference/ticketing/tickets/tickets/#attaching-files) in Tickets",
      ),
    via: ticketAuditViaObjectSchema,
  });

export const ticketCommentResponseSchema: z.ZodSchema<TicketCommentResponse> =
  z.object({ comment: ticketCommentObjectSchema });

export const ticketCommentsCountResponseSchema: z.ZodSchema<TicketCommentsCountResponse> =
  z.object({
    count: z.object({ refreshed_at: z.string(), value: z.number() }),
  });

export const ticketCommentsResponseSchema: z.ZodSchema<TicketCommentsResponse> =
  z.object({ comments: z.array(ticketCommentObjectSchema) });

export const ticketCreateVoicemailTicketVoiceCommentInputSchema: z.ZodSchema<TicketCreateVoicemailTicketVoiceCommentInput> =
  z.object({
    answered_by_id: z.number().describe("The agent who answered the call"),
    call_duration: z.number().describe("Duration in seconds of the call"),
    from: z.string().describe("Incoming phone number"),
    location: z.string().describe("Location of the caller (optional)"),
    recording_url: z.string().describe("Incoming phone number"),
    started_at: z
      .string()
      .describe(
        "[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) timestamp of the call starting time",
      ),
    to: z.string().describe("Dialed phone number"),
    transcription_text: z
      .string()
      .describe("Transcription of the call (optional)"),
  });

export const ticketCreateVoicemailTicketInputSchema: z.ZodSchema<TicketCreateVoicemailTicketInput> =
  z.object({
    comment: ticketCommentObjectSchema,
    priority: z
      .union([
        z.literal("urgent"),
        z.literal("high"),
        z.literal("normal"),
        z.literal("low"),
      ])
      .describe("The urgency with which the ticket should be addressed."),
    via_id: z
      .union([z.literal(44), z.literal(45), z.literal(46)])
      .describe("Required for Create Ticket operation"),
    voice_comment: ticketCreateVoicemailTicketVoiceCommentInputSchema.describe(
      "Required if creating voicemail ticket",
    ),
  });

export const ticketCreateVoicemailTicketRequestSchema: z.ZodSchema<TicketCreateVoicemailTicketRequest> =
  z.object({
    display_to_agent: z
      .number()
      .describe(
        "Optional value such as the ID of the agent that will see the newly created ticket.",
      ),
    ticket: ticketCreateVoicemailTicketInputSchema.describe(
      "Ticket object that lists the values to set when the ticket is created",
    ),
  });

export const ticketFieldCountResponseSchema: z.ZodSchema<TicketFieldCountResponse> =
  z.object({
    count: z.object({ refreshed_at: z.string(), value: z.number() }),
  });

export const ticketFieldCustomStatusObjectSchema: z.ZodSchema<TicketFieldCustomStatusObject> =
  z.object({
    active: z
      .boolean()
      .describe(
        "If true, if the custom status is set to active. If false, the custom status is set to inactive",
      ),
    agent_label: z.string().describe("The label displayed to agents"),
    created_at: z
      .string()
      .describe(
        "The date and time at which the custom ticket status was created",
      ),
    default: z
      .boolean()
      .describe(
        "If true, the custom status is set to default. If false, the custom status is set to non-default",
      ),
    description: z
      .string()
      .describe(
        "The description of when the user should select this custom ticket status",
      ),
    end_user_description: z
      .string()
      .describe("The description displayed to end users"),
    end_user_label: z.string().describe("The label displayed to end users"),
    id: z
      .number()
      .describe(
        "Automatically assigned when the custom ticket status is created",
      ),
    status_category: z
      .union([
        z.literal("new"),
        z.literal("open"),
        z.literal("pending"),
        z.literal("hold"),
        z.literal("solved"),
      ])
      .describe("The status category the custom ticket status belongs to"),
    updated_at: z
      .string()
      .describe(
        "The date and time at which the custom ticket status was last updated",
      ),
  });

export const ticketFieldObjectSchema: z.ZodSchema<TicketFieldObject> = z.object(
  {
    active: z.boolean().describe("Whether this field is available"),
    agent_description: z
      .string()
      .describe("A description of the ticket field that only agents can see"),
    collapsed_for_agents: z
      .boolean()
      .describe(
        "If true, the field is shown to agents by default. If false, the field is hidden alongside infrequently used fields. Classic interface only",
      ),
    created_at: z
      .string()
      .describe("The time the custom ticket field was created"),
    creator_app_name: z
      .string()
      .describe(
        "Name of the app that created the ticket field, or a null value if no app created the ticket field",
      ),
    creator_user_id: z
      .number()
      .describe(
        'The id of the user that created the ticket field, or a value of "-1" if an app created the ticket field',
      ),
    custom_field_options: z
      .array(customFieldOptionObjectSchema)
      .describe(
        'Required and presented for a custom ticket field of type "multiselect" or "tagger"',
      ),
    custom_statuses: z
      .array(ticketFieldCustomStatusObjectSchema)
      .describe(
        'List of customized ticket statuses. Only presented for a system ticket field of type "custom_status"',
      ),
    description: z
      .string()
      .describe("Describes the purpose of the ticket field to users"),
    editable_in_portal: z
      .boolean()
      .describe("Whether this field is editable by end users in Help Center"),
    id: z.number().describe("Automatically assigned when created"),
    position: z
      .number()
      .describe(
        "The relative position of the ticket field on a ticket. Note that for accounts with ticket forms, positions are controlled by the different forms",
      ),
    raw_description: z
      .string()
      .describe(
        "The dynamic content placeholder if present, or the `description` value if not. See [Dynamic Content](/api-reference/ticketing/ticket-management/dynamic_content/)",
      ),
    raw_title: z
      .string()
      .describe(
        "The dynamic content placeholder if present, or the `title` value if not. See [Dynamic Content](/api-reference/ticketing/ticket-management/dynamic_content/)",
      ),
    raw_title_in_portal: z
      .string()
      .describe(
        'The dynamic content placeholder if present, or the "title_in_portal" value if not. See [Dynamic Content](/api-reference/ticketing/ticket-management/dynamic_content/)',
      ),
    regexp_for_validation: z
      .string()
      .nullable()
      .describe(
        'For "regexp" fields only. The validation pattern for a field value to be deemed valid',
      ),
    relationship_filter: z
      .object({})
      .describe(
        "A filter definition that allows your autocomplete to filter down results",
      ),
    relationship_target_type: z
      .string()
      .describe(
        'A representation of what type of object the field references. Options are "zen:user", "zen:organization", "zen:ticket", or "zen:custom_object:CUSTOM_OBJECT_KEY". For example "zen:custom_object:apartment".',
      ),
    removable: z
      .boolean()
      .describe(
        "If false, this field is a system field that must be present on all tickets",
      ),
    required: z
      .boolean()
      .describe(
        "If true, agents must enter a value in the field to change the ticket status to solved",
      ),
    required_in_portal: z
      .boolean()
      .describe(
        "If true, end users must enter a value in the field to create the request",
      ),
    sub_type_id: z
      .number()
      .describe(
        'For system ticket fields of type "priority" and "status". Defaults to 0. A "priority" sub type of 1 removes the "Low" and "Urgent" options. A "status" sub type of 1 adds the "On-Hold" option',
      ),
    system_field_options: z
      .array(systemFieldOptionObjectSchema)
      .describe(
        'Presented for a system ticket field of type "tickettype", "priority" or "status"',
      ),
    tag: z
      .string()
      .nullable()
      .describe(
        'For "checkbox" fields only. A tag added to tickets when the checkbox field is selected',
      ),
    title: z.string().describe("The title of the ticket field"),
    title_in_portal: z
      .string()
      .describe("The title of the ticket field for end users in Help Center"),
    type: z
      .string()
      .describe(
        "System or custom field type. Editable for custom field types and only on creation. See [Create Ticket Field](#create-ticket-field)",
      ),
    updated_at: z
      .string()
      .describe("The time the custom ticket field was last updated"),
    url: z.string().describe("The URL for this resource"),
    visible_in_portal: z
      .boolean()
      .describe("Whether this field is visible to end users in Help Center"),
  },
);

export const ticketFieldResponseSchema: z.ZodSchema<TicketFieldResponse> =
  z.object({ ticket_field: ticketFieldObjectSchema });

export const ticketFieldsResponseSchema: z.ZodSchema<TicketFieldsResponse> =
  z.object({ ticket_fields: z.array(ticketFieldObjectSchema) });

export const ticketFormObjectSchema: z.ZodSchema<TicketFormObject> = z.object({
  active: z.boolean().describe("If the form is set as active"),
  agent_conditions: z
    .array(z.object({}).passthrough())
    .describe("Array of condition sets for agent workspaces"),
  created_at: z.string().describe("The time the ticket form was created"),
  default: z
    .boolean()
    .describe("Is the form the default form for this account"),
  display_name: z
    .string()
    .describe("The name of the form that is displayed to an end user"),
  end_user_conditions: z
    .array(z.object({}).passthrough())
    .describe("Array of condition sets for end user products"),
  end_user_visible: z.boolean().describe("Is the form visible to the end user"),
  id: z.number().describe("Automatically assigned when creating ticket form"),
  in_all_brands: z
    .boolean()
    .describe("Is the form available for use in all brands on this account"),
  name: z.string().describe("The name of the form"),
  position: z
    .number()
    .describe(
      "The position of this form among other forms in the account, i.e. dropdown",
    ),
  raw_display_name: z
    .string()
    .describe(
      'The dynamic content placeholder, if present, or the "display_name" value, if not. See [Dynamic Content Items](/api-reference/ticketing/ticket-management/dynamic_content/)',
    ),
  raw_name: z
    .string()
    .describe(
      'The dynamic content placeholder, if present, or the "name" value, if not. See [Dynamic Content Items](/api-reference/ticketing/ticket-management/dynamic_content/)',
    ),
  restricted_brand_ids: z
    .array(z.number())
    .describe("ids of all brands that this ticket form is restricted to"),
  ticket_field_ids: z
    .array(z.number())
    .describe(
      "ids of all ticket fields which are in this ticket form. The products use the order of the ids to show the field values in the tickets",
    ),
  updated_at: z
    .string()
    .describe("The time of the last update of the ticket form"),
  url: z.string().describe("URL of the ticket form"),
});

export const ticketFormResponseSchema: z.ZodSchema<TicketFormResponse> =
  z.object({ ticket_form: ticketFormObjectSchema });

export const ticketFormsResponseSchema: z.ZodSchema<TicketFormsResponse> =
  z.object({ ticket_forms: z.array(ticketFormObjectSchema) });

export const ticketImportInputSchema: z.ZodSchema<TicketImportInput> = z.object(
  {
    assignee_id: z
      .number()
      .describe("The agent currently assigned to the ticket"),
    comments: z
      .array(
        z.intersection(
          z.object({ value: z.string().describe("The comment string value") }),
          ticketCommentObjectSchema,
        ),
      )
      .describe(
        "The conversation between requesters, collaborators, and agents",
      ),
    description: z
      .string()
      .describe(
        "Read-only first comment on the ticket. When [creating a ticket](#create-ticket), use `comment` to set the description. See [Description and first comment](#description-and-first-comment)",
      ),
    requester_id: z.number().describe("The user who requested this ticket"),
    subject: z
      .string()
      .describe("The value of the subject field for this ticket"),
    tags: z
      .array(z.string())
      .describe("The array of tags applied to this ticket"),
  },
);

export const ticketBulkImportRequestSchema: z.ZodSchema<TicketBulkImportRequest> =
  z.object({ tickets: z.array(ticketImportInputSchema) });

export const ticketImportRequestSchema: z.ZodSchema<TicketImportRequest> =
  z.object({ ticket: ticketImportInputSchema });

export const ticketMergeInputSchema: z.ZodSchema<TicketMergeInput> = z.object({
  ids: z
    .array(z.number())
    .describe("Ids of tickets to merge into the target ticket"),
  source_comment: z
    .string()
    .describe("Private comment to add to the source ticket"),
  source_comment_is_public: z
    .boolean()
    .describe("Whether comment in source tickets are public or private"),
  target_comment: z
    .string()
    .describe("Private comment to add to the target ticket"),
  target_comment_is_public: z
    .boolean()
    .describe("Whether comment in target ticket is public or private"),
});

export const ticketMetricEventBaseObjectSchema: z.ZodSchema<TicketMetricEventBaseObject> =
  z.object({
    id: z
      .number()
      .describe("Automatically assigned when the record is created"),
    instance_id: z
      .number()
      .describe(
        "The instance of the metric associated with the event. See [instance_id](#instance_id)",
      ),
    metric: z
      .union([
        z.literal("agent_work_time"),
        z.literal("pausable_update_time"),
        z.literal("periodic_update_time"),
        z.literal("reply_time"),
        z.literal("requester_wait_time"),
        z.literal("resolution_time"),
      ])
      .describe("The metric being tracked"),
    ticket_id: z.number().describe("Id of the associated ticket"),
    time: z.string().describe("The time the event occurred"),
    type: z
      .union([
        z.literal("activate"),
        z.literal("pause"),
        z.literal("fulfill"),
        z.literal("apply_sla"),
        z.literal("breach"),
        z.literal("update_status"),
        z.literal("measure"),
      ])
      .describe(
        "The type of the metric event. See [Ticket metric event types reference](/documentation/ticketing/reference-guides/ticket-metric-event-types-reference)",
      ),
  });

export const exportIncrementalTicketEventsResponseSchema: z.ZodSchema<ExportIncrementalTicketEventsResponse> =
  z.object({
    count: z.number(),
    end_of_stream: z.boolean(),
    end_time: z.number(),
    next_page: z.string().nullable(),
    ticket_events: z.array(ticketMetricEventBaseObjectSchema),
  });

export const ticketMetricEventBreachObjectSchema: z.ZodSchema<TicketMetricEventBreachObject> =
  z.intersection(
    ticketMetricEventBaseObjectSchema,
    z.object({
      deleted: z
        .boolean()
        .describe(
          "Available if `type` is `breach`. In general, you can ignore any breach event when `deleted` is true. See [deleted](#deleted)",
        ),
    }),
  );

export const ticketMetricEventGroupSlaObjectSchema: z.ZodSchema<TicketMetricEventGroupSLAObject> =
  z.intersection(
    ticketMetricEventBaseObjectSchema,
    z.object({
      group_sla: z
        .object({})
        .describe(
          'Available if `type` is "apply_group_sla". The Group SLA policy and target being enforced on the ticket and metric in question, if any. See [group_sla](#group_sla)',
        ),
    }),
  );

export const ticketMetricEventSlaObjectSchema: z.ZodSchema<TicketMetricEventSLAObject> =
  z.intersection(
    ticketMetricEventBaseObjectSchema,
    z.object({
      sla: z
        .object({})
        .describe(
          "Available if `type` is `apply_sla`. The SLA policy and target being enforced on the ticket and metric in question, if any. See [sla](#sla)",
        ),
    }),
  );

export const ticketMetricEventUpdateStatusObjectSchema: z.ZodSchema<TicketMetricEventUpdateStatusObject> =
  z.intersection(
    ticketMetricEventBaseObjectSchema,
    z.object({
      status: z
        .object({})
        .describe(
          "Available if `type` is `update_status`. Minutes since the metric has been open. See [status](#status)",
        ),
    }),
  );

export const ticketMetricEventsResponseSchema: z.ZodSchema<TicketMetricEventsResponse> =
  z.intersection(
    z.object({
      ticket_metric_events: z.array(ticketMetricEventBaseObjectSchema),
    }),
    z.object({
      count: z.number(),
      end_time: z.number(),
      next_page: z.string(),
    }),
  );

export const ticketMetricTimeObjectSchema: z.ZodSchema<TicketMetricTimeObject> =
  z.object({
    business: z.number().describe("Time in business hours"),
    calendar: z.number().describe("Time in calendar hours"),
  });

export const ticketMetricObjectSchema: z.ZodSchema<TicketMetricObject> =
  z.object({
    agent_wait_time_in_minutes: ticketMetricTimeObjectSchema.describe(
      "Number of minutes the agent spent waiting during calendar and business hours",
    ),
    assigned_at: z.string().describe("When the ticket was assigned"),
    assignee_stations: z
      .number()
      .describe("Number of assignees the ticket had"),
    assignee_updated_at: z
      .string()
      .describe("When the assignee last updated the ticket"),
    created_at: z.string().describe("When the record was created"),
    custom_status_updated_at: z
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
    group_stations: z
      .number()
      .describe("Number of groups the ticket passed through"),
    id: z
      .number()
      .describe("Automatically assigned when the client is created"),
    initially_assigned_at: z
      .string()
      .describe("When the ticket was initially assigned"),
    latest_comment_added_at: z
      .string()
      .describe("When the latest comment was added"),
    on_hold_time_in_minutes: ticketMetricTimeObjectSchema.describe(
      "Number of minutes on hold",
    ),
    reopens: z
      .number()
      .describe("Total number of times the ticket was reopened"),
    replies: z
      .number()
      .describe("The number of public replies added to a ticket by an agent"),
    reply_time_in_minutes: ticketMetricTimeObjectSchema.describe(
      "Number of minutes to the first reply during calendar and business hours",
    ),
    reply_time_in_seconds: ticketMetricTimeObjectSchema.describe(
      "Number of seconds to the first reply during calendar hours, only available for Messaging tickets",
    ),
    requester_updated_at: z
      .string()
      .describe("When the requester last updated the ticket"),
    requester_wait_time_in_minutes: ticketMetricTimeObjectSchema.describe(
      "Number of minutes the requester spent waiting during calendar and business hours",
    ),
    solved_at: z.string().describe("When the ticket was solved"),
    status_updated_at: z
      .string()
      .describe("When the status of the ticket was last updated"),
    ticket_id: z.number().describe("Id of the associated ticket"),
    updated_at: z.string().describe("When the record was last updated"),
    url: z.string().describe("The API url of the ticket metric"),
  });

export const ticketMetricsByTicketMetricIdResponseSchema: z.ZodSchema<TicketMetricsByTicketMetricIdResponse> =
  z.object({ ticket_metric: z.array(ticketMetricObjectSchema) });

export const ticketMetricsResponseSchema: z.ZodSchema<TicketMetricsResponse> =
  z.object({ ticket_metrics: z.array(ticketMetricObjectSchema) });

export const ticketObjectSchema: z.ZodSchema<TicketObject> = z.object({
  allow_attachments: z
    .boolean()
    .describe(
      "Permission for agents to add add attachments to a comment. Defaults to true",
    ),
  allow_channelback: z
    .boolean()
    .describe(
      "Is false if channelback is disabled, true otherwise. Only applicable for channels framework ticket",
    ),
  assignee_email: z
    .string()
    .describe(
      "Write only. The email address of the agent to assign the ticket to",
    ),
  assignee_id: z
    .number()
    .describe("The agent currently assigned to the ticket"),
  attribute_value_ids: z
    .array(z.number())
    .describe(
      "Write only. An array of the IDs of attribute values to be associated with the ticket",
    ),
  brand_id: z
    .number()
    .describe(
      "Enterprise only. The id of the brand this ticket is associated with",
    ),
  collaborator_ids: z
    .array(z.number())
    .describe("The ids of users currently CC'ed on the ticket"),
  collaborators: z
    .array(collaboratorObjectSchema)
    .describe(
      "POST requests only. Users to add as cc's when creating a ticket. See [Setting Collaborators](/documentation/ticketing/managing-tickets/creating-and-updating-tickets#setting-collaborators)",
    ),
  comment: z
    .object({})
    .describe(
      "Write only. An object that adds a comment to the ticket. See [Ticket comments](/api-reference/ticketing/tickets/ticket_comments/). To include an attachment with the comment, see [Attaching files](/documentation/ticketing/managing-tickets/creating-and-updating-tickets/#attaching-files)",
    ),
  created_at: z.string().describe("When this record was created"),
  custom_fields: z
    .array(
      z.object({
        id: z.number().describe("The id of the custom field"),
        value: z.string().describe("The value of the custom field"),
      }),
    )
    .describe(
      "Custom fields for the ticket. See [Setting custom field values](/documentation/ticketing/managing-tickets/creating-and-updating-tickets#setting-custom-field-values)",
    ),
  custom_status_id: z
    .number()
    .describe(
      "The custom ticket status id of the ticket. See [custom ticket statuses](#custom-ticket-statuses)",
    ),
  description: z
    .string()
    .describe(
      "Read-only first comment on the ticket. When [creating a ticket](#create-ticket), use `comment` to set the description. See [Description and first comment](#description-and-first-comment)\n",
    ),
  due_at: z
    .string()
    .nullable()
    .describe(
      'If this is a ticket of type "task" it has a due date.  Due date format uses [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) format.',
    ),
  email_cc_ids: z
    .array(z.number())
    .describe(
      "The ids of agents or end users currently CC'ed on the ticket. See [CCs and followers resources](https://support.zendesk.com/hc/en-us/articles/360020585233) in the Support Help Center",
    ),
  email_ccs: z
    .object({})
    .describe(
      "Write only. An array of objects that represent agent or end users email CCs to add or delete from the ticket. See [Setting email CCs](/documentation/ticketing/managing-tickets/creating-and-updating-tickets/#setting-email-ccs)",
    ),
  external_id: z
    .string()
    .describe(
      "An id you can use to link Zendesk Support tickets to local records",
    ),
  follower_ids: z
    .array(z.number())
    .describe(
      "The ids of agents currently following the ticket. See [CCs and followers resources](https://support.zendesk.com/hc/en-us/articles/360020585233)",
    ),
  followers: z
    .object({})
    .describe(
      "Write only. An array of objects that represent agent followers to add or delete from the ticket. See [Setting followers](/documentation/ticketing/managing-tickets/creating-and-updating-tickets/#setting-followers)",
    ),
  followup_ids: z
    .array(z.number())
    .describe(
      "The ids of the followups created from this ticket. Ids are only visible once the ticket is closed",
    ),
  forum_topic_id: z
    .number()
    .describe(
      "The topic in the Zendesk Web portal this ticket originated from, if any. The Web portal is deprecated",
    ),
  from_messaging_channel: z
    .boolean()
    .describe(
      "If true, the ticket's [via type](/documentation/ticketing/reference-guides/via-object-reference/) is a messaging channel.",
    ),
  group_id: z.number().describe("The group this ticket is assigned to"),
  has_incidents: z
    .boolean()
    .describe(
      "Is true if a ticket is a problem type and has one or more incidents linked to it. Otherwise, the value is false.",
    ),
  id: z.number().describe("Automatically assigned when the ticket is created"),
  is_public: z
    .boolean()
    .describe("Is true if any comments are public, false otherwise"),
  macro_id: z
    .number()
    .describe("Write only. A macro ID to be recorded in the ticket audit"),
  macro_ids: z
    .array(z.number())
    .describe(
      "POST requests only. List of macro IDs to be recorded in the ticket audit",
    ),
  metadata: z
    .object({})
    .describe(
      "Write only. Metadata for the audit. In the `audit` object, the data is specified in the `custom` property of the `metadata` object. See [Setting Metadata](/documentation/ticketing/managing-tickets/creating-and-updating-tickets/#setting-metadata)",
    ),
  organization_id: z
    .number()
    .describe(
      "The organization of the requester. You can only specify the ID of an organization associated with the requester. See [Organization Memberships](/api-reference/ticketing/organizations/organization_memberships/)",
    ),
  priority: z
    .union([
      z.literal("urgent"),
      z.literal("high"),
      z.literal("normal"),
      z.literal("low"),
    ])
    .describe("The urgency with which the ticket should be addressed."),
  problem_id: z
    .number()
    .describe(
      'For tickets of type "incident", the ID of the problem the incident is linked to',
    ),
  raw_subject: z
    .string()
    .describe(
      'The dynamic content placeholder, if present, or the "subject" value, if not. See [Dynamic Content Items](/api-reference/ticketing/ticket-management/dynamic_content/)\n',
    ),
  recipient: z
    .string()
    .describe(
      "The original recipient e-mail address of the ticket. Notification emails for the ticket are sent from this address",
    ),
  requester: z
    .object({})
    .describe(
      "Write only. See [Creating a ticket with a new requester](/documentation/ticketing/managing-tickets/creating-and-updating-tickets/#creating-a-ticket-with-a-new-requester)",
    ),
  requester_id: z.number().describe("The user who requested this ticket"),
  safe_update: z
    .boolean()
    .describe(
      "Write only. Optional boolean. When true and an `update_stamp` date is included, protects against ticket update collisions and returns a message to let you know if one occurs. See [Protecting against ticket update collisions](/documentation/ticketing/managing-tickets/creating-and-updating-tickets/#protecting-against-ticket-update-collisions). A value of false has the same effect as true. Omit the property to force the updates to not be safe",
    ),
  satisfaction_rating: z
    .object({})
    .passthrough()
    .describe(
      'The satisfaction rating of the ticket, if it exists, or the state of satisfaction, "offered" or "unoffered". The value is null for plan types that don\'t support CSAT',
    ),
  sharing_agreement_ids: z
    .array(z.number())
    .describe("The ids of the sharing agreements used for this ticket"),
  status: z
    .union([
      z.literal("new"),
      z.literal("open"),
      z.literal("pending"),
      z.literal("hold"),
      z.literal("solved"),
      z.literal("closed"),
    ])
    .describe(
      "The state of the ticket.\n\nIf your account has activated custom ticket statuses, this is the ticket's\nstatus category. See [custom ticket statuses](#custom-ticket-statuses).\n",
    ),
  subject: z
    .string()
    .describe("The value of the subject field for this ticket"),
  submitter_id: z
    .number()
    .describe(
      "The user who submitted the ticket. The submitter always becomes the author of the first comment on the ticket",
    ),
  tags: z
    .array(z.string())
    .describe("The array of tags applied to this ticket"),
  ticket_form_id: z
    .number()
    .describe(
      "Enterprise only. The id of the ticket form to render for the ticket",
    ),
  type: z
    .union([
      z.literal("problem"),
      z.literal("incident"),
      z.literal("question"),
      z.literal("task"),
    ])
    .describe("The type of this ticket."),
  updated_at: z.string().describe("When this record last got updated"),
  updated_stamp: z
    .string()
    .describe(
      "Write only. Datetime of last update received from API. See the `safe_update` property",
    ),
  url: z.string().describe("The API url of this ticket"),
  via: z
    .object({
      channel: z
        .string()
        .describe(
          'This tells you how the ticket or event was created. Examples: "web", "mobile", "rule", "system"\n',
        ),
      source: z
        .object({})
        .passthrough()
        .describe(
          "For some channels a source object gives more information about how or why the ticket or event was created\n",
        ),
    })
    .describe(
      "For more information, see the [Via object reference](/documentation/ticketing/reference-guides/via-object-reference)",
    ),
  via_followup_source_id: z
    .number()
    .describe(
      "POST requests only. The id of a closed ticket when creating a follow-up ticket. See [Creating a follow-up ticket](/documentation/ticketing/managing-tickets/creating-and-updating-tickets#creating-a-follow-up-ticket)",
    ),
  via_id: z
    .number()
    .describe(
      "Write only. For more information, see the [Via object reference](/documentation/ticketing/reference-guides/via-object-reference/)",
    ),
  voice_comment: z
    .object({})
    .describe(
      "Write only. See [Creating voicemail ticket](/api-reference/voice/talk-partner-edition-api/reference/#creating-voicemail-tickets)",
    ),
});

export const bookmarkObjectSchema: z.ZodSchema<BookmarkObject> = z.object({
  created_at: z.string().describe("The time the bookmark was created"),
  id: z
    .number()
    .describe("Automatically assigned when the bookmark is created"),
  ticket: ticketObjectSchema,
  url: z.string().describe("The API url of this bookmark"),
});

export const bookmarkResponseSchema: z.ZodSchema<BookmarkResponse> = z.object({
  bookmark: bookmarkObjectSchema,
});

export const bookmarksResponseSchema: z.ZodSchema<BookmarksResponse> =
  z.intersection(
    offsetPaginationObjectSchema,
    z.object({ bookmarks: z.array(bookmarkObjectSchema) }),
  );

export const cursorBasedExportIncrementalTicketsResponseSchema: z.ZodSchema<CursorBasedExportIncrementalTicketsResponse> =
  z
    .object({
      after_cursor: z.string().nullable(),
      after_url: z.string().nullable(),
      before_cursor: z.string().nullable(),
      before_url: z.string().nullable(),
      end_of_stream: z.boolean(),
      tickets: z.array(ticketObjectSchema),
    })
    .describe(
      "See [Tickets](/api-reference/ticketing/tickets/tickets/) for a detailed example.\n",
    );

export const ticketRelatedInformationSchema: z.ZodSchema<TicketRelatedInformation> =
  z.object({
    followup_source_ids: z.array(z.string().describe("Sources to follow up")),
    from_archive: z
      .boolean()
      .describe("Is true if the current ticket is archived"),
    incidents: z.number().describe("A count of related incident occurrences"),
    topic_id: z
      .string()
      .nullable()
      .describe("Related topic in the Web portal (deprecated feature)"),
    twitter: z
      .object({})
      .passthrough()
      .describe("X (formerly Twitter) information associated with the ticket"),
  });

export const ticketResponseSchema: z.ZodSchema<TicketResponse> = z.object({
  ticket: ticketObjectSchema,
});

export const ticketSkipObjectSchema: z.ZodSchema<TicketSkipObject> = z.object({
  created_at: z.string().describe("Time the skip was created"),
  id: z.number().describe("Automatically assigned upon creation"),
  reason: z.string().describe("Reason for skipping the ticket"),
  ticket: ticketObjectSchema.describe(
    "The skipped ticket. See the [Ticket object reference](/api-reference/ticketing/tickets/tickets/#json-format)",
  ),
  ticket_id: z.number().describe("ID of the skipped ticket"),
  updated_at: z.string().describe("Time the skip was last updated"),
  user_id: z.number().describe("ID of the skipping agent"),
});

export const ticketSkipCreationSchema: z.ZodSchema<TicketSkipCreation> =
  z.object({ skip: ticketSkipObjectSchema });

export const ticketSkipsResponseSchema: z.ZodSchema<TicketSkipsResponse> =
  z.object({ skips: z.array(ticketSkipObjectSchema) });

export const ticketUpdateInputSchema: z.ZodSchema<TicketUpdateInput> = z.object(
  {
    additional_collaborators: z
      .array(collaboratorObjectSchema)
      .describe(
        "An array of numeric IDs, emails, or objects containing name and email properties. See [Setting Collaborators](/api-reference/ticketing/tickets/tickets/#setting-collaborators). An email notification is sent to them when the ticket is updated",
      ),
    assignee_email: z
      .string()
      .describe("The email address of the agent to assign the ticket to"),
    assignee_id: z
      .number()
      .describe("The agent currently assigned to the ticket"),
    attribute_value_ids: z
      .array(z.number())
      .describe(
        "An array of the IDs of attribute values to be associated with the ticket",
      ),
    collaborator_ids: z
      .array(z.number())
      .describe("The ids of users currently CC'ed on the ticket"),
    comment: ticketCommentObjectSchema,
    custom_fields: z
      .array(customFieldObjectSchema)
      .describe(
        "Custom fields for the ticket. See [Setting custom field values](/documentation/ticketing/managing-tickets/creating-and-updating-tickets#setting-custom-field-values)",
      ),
    custom_status_id: z
      .number()
      .describe(
        "The custom ticket status id of the ticket. See [custom ticket statuses](#custom-ticket-statuses)",
      ),
    due_at: z
      .string()
      .nullable()
      .describe(
        'If this is a ticket of type "task" it has a due date.  Due date format uses [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) format.',
      ),
    email_ccs: z
      .array(emailCcObjectSchema)
      .describe(
        "An array of objects that represent agent or end users email CCs to add or delete from the ticket. See [Setting email CCs](/documentation/ticketing/managing-tickets/creating-and-updating-tickets#setting-email-ccs)",
      ),
    external_id: z
      .string()
      .describe(
        "An id you can use to link Zendesk Support tickets to local records",
      ),
    followers: z
      .array(followerObjectSchema)
      .describe(
        "An array of objects that represent agent followers to add or delete from the ticket. See [Setting followers](/documentation/ticketing/managing-tickets/creating-and-updating-tickets#setting-followers)",
      ),
    group_id: z.number().describe("The group this ticket is assigned to"),
    organization_id: z
      .number()
      .describe(
        "The organization of the requester. You can only specify the ID of an organization associated with the requester. See [Organization Memberships](/api-reference/ticketing/organizations/organization_memberships/)",
      ),
    priority: z
      .union([
        z.literal("urgent"),
        z.literal("high"),
        z.literal("normal"),
        z.literal("low"),
      ])
      .describe("The urgency with which the ticket should be addressed."),
    problem_id: z
      .number()
      .describe(
        'For tickets of type "incident", the ID of the problem the incident is linked to',
      ),
    requester_id: z.number().describe("The user who requested this ticket"),
    safe_update: z
      .boolean()
      .describe(
        "Optional boolean. Prevents updates with outdated ticket data (`updated_stamp` property required when true)",
      ),
    sharing_agreement_ids: z
      .array(z.number())
      .describe(
        "An array of the numeric IDs of sharing agreements. Note that this replaces any existing agreements",
      ),
    status: z
      .union([
        z.literal("new"),
        z.literal("open"),
        z.literal("pending"),
        z.literal("hold"),
        z.literal("solved"),
        z.literal("closed"),
      ])
      .describe(
        "The state of the ticket.\n\nIf your account has activated custom ticket statuses, this is the ticket's\nstatus category. See [custom ticket statuses](#custom-ticket-statuses).\n",
      ),
    subject: z
      .string()
      .describe("The value of the subject field for this ticket"),
    tags: z
      .array(z.string())
      .describe("The array of tags applied to this ticket"),
    type: z
      .union([
        z.literal("problem"),
        z.literal("incident"),
        z.literal("question"),
        z.literal("task"),
      ])
      .describe("The type of this ticket."),
    updated_stamp: z
      .string()
      .describe(
        "Datetime of last update received from API. See the safe_update property",
      ),
  },
);

export const ticketUpdateRequestSchema: z.ZodSchema<TicketUpdateRequest> =
  z.object({ ticket: ticketUpdateInputSchema });

export const ticketsResponseSchema: z.ZodSchema<TicketsResponse> = z.object({
  tickets: z.array(ticketObjectSchema),
});

export const timeBasedExportIncrementalTicketsResponseSchema: z.ZodSchema<TimeBasedExportIncrementalTicketsResponse> =
  z
    .object({
      count: z.number(),
      end_of_stream: z.boolean(),
      end_time: z.number(),
      next_page: z.string().nullable(),
      tickets: z.array(ticketObjectSchema),
    })
    .describe(
      "See [Tickets](/api-reference/ticketing/tickets/tickets/) for a detailed example.\n",
    );

export const trialAccountObjectSchema: z.ZodSchema<TrialAccountObject> =
  z.object({
    name: z.string().describe("The name of the account"),
    subdomain: z.string().describe("The subdomain of the account"),
    url: z.string().describe("The URL of the account"),
  });

export const trialAccountResponseSchema: z.ZodSchema<TrialAccountResponse> =
  z.object({ account: trialAccountObjectSchema });

export const triggerActionDefinitionObjectSchema: z.ZodSchema<TriggerActionDefinitionObject> =
  z.object({
    group: z.string(),
    nullable: z.boolean(),
    repeatable: z.boolean(),
    subject: z.string(),
    title: z.string(),
    type: z.string(),
    values: z.array(
      z.object({ enabled: z.boolean(), title: z.string(), value: z.string() }),
    ),
  });

export const triggerActionObjectSchema: z.ZodSchema<TriggerActionObject> =
  z.object({
    field: z.string(),
    value: z.union([z.string(), z.array(z.unknown()), z.number()]),
  });

export const triggerBatchRequestSchema: z.ZodSchema<TriggerBatchRequest> =
  z.object({
    active: z.boolean(),
    category_id: z.string(),
    id: z.string(),
    position: z.number(),
  });

export const triggerBulkUpdateItemSchema: z.ZodSchema<TriggerBulkUpdateItem> =
  z.object({
    active: z
      .boolean()
      .describe("The active status of the trigger (true or false)"),
    category_id: z
      .string()
      .describe("The ID of the new category the trigger is to be moved to"),
    id: z.number().describe("The ID of the trigger to update"),
    position: z.number().describe("The new position of the trigger"),
  });

export const triggerBulkUpdateRequestSchema: z.ZodSchema<TriggerBulkUpdateRequest> =
  z.object({ triggers: z.array(triggerBulkUpdateItemSchema) });

export const triggerCategorySchema: z.ZodSchema<TriggerCategory> = z.object({
  created_at: z.string(),
  id: z.string(),
  name: z.string(),
  position: z.number(),
  updated_at: z.string(),
});

export const triggerCategoryBatchRequestSchema: z.ZodSchema<TriggerCategoryBatchRequest> =
  z.object({ id: z.string(), position: z.number() });

export const batchJobRequestSchema: z.ZodSchema<BatchJobRequest> = z.object({
  job: z.object({
    action: z.literal("patch"),
    items: z.object({
      trigger_categories: z.array(triggerCategoryBatchRequestSchema),
      triggers: z.array(triggerBatchRequestSchema),
    }),
  }),
});

export const triggerCategoryIdSchema: z.ZodSchema<TriggerCategoryId> =
  z.string();

export const triggerCategoryRequestSchema: z.ZodSchema<TriggerCategoryRequest> =
  z.object({ name: z.string(), position: z.number() });

export const triggerCategoryRequestRequiredSchema: z.ZodSchema<TriggerCategoryRequestRequired> =
  z.object({});

export const triggerCategoryResponseSchema: z.ZodSchema<TriggerCategoryResponse> =
  z.object({ trigger_category: triggerCategorySchema });

export const triggerCategoryRuleCountsSchema: z.ZodSchema<TriggerCategoryRuleCounts> =
  z.object({ active_count: z.number(), inactive_count: z.number() });

export const triggerCategoriesResponseSchema: z.ZodSchema<TriggerCategoriesResponse> =
  z.object({ trigger_categories: z.array(triggerCategorySchema) });

export const triggerChangeObjectSchema: z.ZodSchema<TriggerChangeObject> =
  z.object({
    change: z
      .string()
      .describe("One of `-`, `+`, `=` representing the type of change"),
    content: z
      .union([z.boolean(), z.string(), z.number(), z.array(z.unknown())])
      .describe("The value of the item it represents"),
  });

export const triggerActionDiffObjectSchema: z.ZodSchema<TriggerActionDiffObject> =
  z.object({
    field: z
      .array(triggerChangeObjectSchema)
      .describe("An array of [change](#change) objects."),
    value: z
      .array(triggerChangeObjectSchema)
      .describe("An array of [change](#change) objects."),
  });

export const triggerConditionDefinitionObjectAllSchema: z.ZodSchema<TriggerConditionDefinitionObjectAll> =
  z.object({
    group: z.string(),
    nullable: z.boolean(),
    operators: z.array(
      z.object({ terminal: z.boolean(), title: z.string(), value: z.string() }),
    ),
    repeatable: z.boolean(),
    subject: z.string(),
    title: z.string(),
    type: z.string(),
    values: z.array(
      z.object({ enabled: z.boolean(), title: z.string(), value: z.string() }),
    ),
  });

export const triggerConditionDefinitionObjectAnySchema: z.ZodSchema<TriggerConditionDefinitionObjectAny> =
  z.object({
    group: z.string(),
    nullable: z.boolean(),
    operators: z.array(
      z.object({ terminal: z.boolean(), title: z.string(), value: z.string() }),
    ),
    repeatable: z.boolean(),
    subject: z.string(),
    title: z.string(),
    type: z.string(),
  });

export const relationshipFilterDefinitionSchema: z.ZodSchema<RelationshipFilterDefinition> =
  z.object({
    conditions_all: z.array(triggerConditionDefinitionObjectAllSchema),
    conditions_any: z.array(triggerConditionDefinitionObjectAnySchema),
  });

export const relationshipFilterDefinitionResponseSchema: z.ZodSchema<RelationshipFilterDefinitionResponse> =
  z.object({ definitions: relationshipFilterDefinitionSchema });

export const triggerConditionDiffObjectSchema: z.ZodSchema<TriggerConditionDiffObject> =
  z.object({
    field: z
      .array(triggerChangeObjectSchema)
      .describe("An array of [change](#change) objects"),
    operator: z
      .array(triggerChangeObjectSchema)
      .describe("An array of [change](#change) objects"),
    value: z
      .array(triggerChangeObjectSchema)
      .describe("An array of [change](#change) objects"),
  });

export const triggerConditionObjectSchema: z.ZodSchema<TriggerConditionObject> =
  z.object({
    field: z.string(),
    operator: z.string(),
    value: z.union([z.string(), z.array(z.unknown())]),
  });

export const triggerConditionsDiffObjectSchema: z.ZodSchema<TriggerConditionsDiffObject> =
  z.object({
    all: z.array(triggerConditionDiffObjectSchema).nullable(),
    any: z.array(triggerConditionDiffObjectSchema).nullable(),
  });

export const triggerConditionsObjectSchema: z.ZodSchema<TriggerConditionsObject> =
  z
    .object({
      all: z.array(triggerConditionObjectSchema).nullable(),
      any: z.array(triggerConditionObjectSchema).nullable(),
    })
    .describe(
      "An object that describes the conditions under which the trigger will execute. See [Conditions reference](/documentation/ticketing/reference-guides/conditions-reference)",
    );

export const triggerDefinitionObjectSchema: z.ZodSchema<TriggerDefinitionObject> =
  z.object({
    actions: z.array(triggerActionDefinitionObjectSchema),
    conditions_all: z.array(triggerConditionDefinitionObjectAllSchema),
    conditions_any: z.array(triggerConditionDefinitionObjectAnySchema),
  });

export const triggerDefinitionResponseSchema: z.ZodSchema<TriggerDefinitionResponse> =
  z.object({ definitions: triggerDefinitionObjectSchema });

export const triggerObjectSchema: z.ZodSchema<TriggerObject> = z.object({
  actions: z
    .array(triggerActionObjectSchema)
    .describe(
      "An array of actions describing what the trigger will do. See [Actions reference](/documentation/ticketing/reference-guides/actions-reference)",
    ),
  active: z.boolean().describe("Whether the trigger is active"),
  category_id: z
    .string()
    .describe("The ID of the category the trigger belongs to"),
  conditions: triggerConditionsObjectSchema,
  created_at: z.string().describe("The time the trigger was created"),
  default: z.boolean().describe("If true, the trigger is a default trigger"),
  description: z.string().describe("The description of the trigger"),
  id: z.number().describe("Automatically assigned when created"),
  position: z
    .number()
    .describe(
      "Position of the trigger, determines the order they will execute in",
    ),
  raw_title: z.string().describe("The raw format of the title of the trigger"),
  title: z.string().describe("The title of the trigger"),
  updated_at: z.string().describe("The time of the last update of the trigger"),
  url: z.string().describe("The url of the trigger"),
});

export const batchJobResponseSchema: z.ZodSchema<BatchJobResponse> = z.object({
  errors: z.array(batchErrorItemSchema),
  results: z.object({
    trigger_categories: z.array(triggerCategorySchema),
    triggers: z.array(triggerObjectSchema),
  }),
  status: z.union([z.literal("complete"), z.literal("failed")]),
});

export const triggerResponseSchema: z.ZodSchema<TriggerResponse> = z.object({
  trigger: triggerObjectSchema,
});

export const triggerRevisionResponseSchema: z.ZodSchema<TriggerRevisionResponse> =
  z.object({
    trigger_revision: z.object({
      author_id: z.number(),
      created_at: z.string(),
      id: z.number(),
      snapshot: z.object({
        actions: z.array(triggerActionObjectSchema),
        active: z.boolean(),
        conditions: triggerConditionsObjectSchema,
        description: z.string().nullable(),
        title: z.string(),
      }),
      url: z.string(),
    }),
  });

export const triggerSnapshotObjectSchema: z.ZodSchema<TriggerSnapshotObject> =
  z.object({
    actions: z
      .array(triggerActionObjectSchema)
      .describe(
        "An array of [Actions](#actions) describing what the trigger will do",
      ),
    active: z.boolean().describe("Whether the trigger is active"),
    conditions: triggerConditionsObjectSchema,
    description: z
      .string()
      .nullable()
      .describe("The description of the trigger"),
    title: z.string().describe("The title of the trigger"),
  });

export const triggerRevisionsResponseSchema: z.ZodSchema<TriggerRevisionsResponse> =
  z.object({
    after_cursor: z.string(),
    after_url: z.string(),
    before_cursor: z.string(),
    before_url: z.string(),
    count: z.number(),
    trigger_revisions: z.array(
      z.object({
        author_id: z.number(),
        created_at: z.string(),
        diff: z.object({
          actions: z
            .array(triggerActionDiffObjectSchema)
            .describe(
              "An array that contain [action diff objects](#Action Diffs)",
            ),
          active: z
            .array(triggerChangeObjectSchema)
            .describe("An array of [change](#change) objects"),
          conditions: triggerConditionDiffObjectSchema,
          description: z
            .array(triggerChangeObjectSchema)
            .describe("An array of [change](#change) objects"),
          source_id: z.number().describe("ID of the source revision"),
          target_id: z.number().describe("ID of the target revision"),
          title: z
            .array(triggerChangeObjectSchema)
            .describe("An array of [change](#change) objects"),
        }),
        id: z.number(),
        snapshot: triggerSnapshotObjectSchema,
        url: z.string(),
      }),
    ),
  });

export const triggerWithCategoryRequestSchema: z.ZodSchema<TriggerWithCategoryRequest> =
  z.object({
    trigger: z.intersection(
      triggerObjectSchema,
      z.union([triggerCategorySchema, triggerCategoryIdSchema]),
    ),
  });

export const triggersResponseSchema: z.ZodSchema<TriggersResponse> = z.object({
  count: z.number(),
  next_page: z.string().nullable(),
  previous_page: z.string().nullable(),
  triggers: z.array(triggerObjectSchema),
});

export const twitterChannelObjectSchema: z.ZodSchema<TwitterChannelObject> =
  z.object({
    allow_reply: z.boolean().describe("If replies are allowed for this handle"),
    avatar_url: z.string().describe("The profile image url of the handle"),
    brand_id: z.number().describe("What brand the handle is associated with"),
    can_reply: z.boolean().describe("If replies are allowed for this handle"),
    created_at: z.string().describe("The time the handle was created"),
    id: z.number().describe("Automatically assigned upon creation"),
    name: z.string().describe("The profile name of the handle"),
    screen_name: z.string().describe("The Twitter handle"),
    twitter_user_id: z.number().describe("The country's code"),
    updated_at: z
      .string()
      .describe("The time of the last update of the handle"),
  });

export const twitterChannelResponseSchema: z.ZodSchema<TwitterChannelResponse> =
  z.object({ monitored_twitter_handle: twitterChannelObjectSchema });

export const twitterChannelTwicketStatusResponseSchema: z.ZodSchema<TwitterChannelTwicketStatusResponse> =
  z.object({
    statuses: z.array(
      z.object({
        favorited: z.boolean(),
        id: z.number(),
        retweeted: z.boolean(),
        user_followed: z.boolean(),
      }),
    ),
  });

export const twitterChannelsResponseSchema: z.ZodSchema<TwitterChannelsResponse> =
  z.object({ monitored_twitter_handles: z.array(twitterChannelObjectSchema) });

export const updateResourceResultSchema: z.ZodSchema<UpdateResourceResult> =
  z.object({
    action: z
      .string()
      .describe('the action the job attempted (`"action": "update"`)\n'),
    id: z
      .number()
      .describe("the id of the resource the job attempted to update"),
    status: z.string().describe('the status (`"status": "Updated"`)\n'),
    success: z
      .boolean()
      .describe(
        'whether the action was successful or not (`"success": true`)\n',
      ),
  });

export const jobStatusResultObjectSchema: z.ZodSchema<JobStatusResultObject> =
  z.union([createResourceResultSchema, updateResourceResultSchema]);

export const jobStatusObjectSchema: z.ZodSchema<JobStatusObject> = z.object({
  id: z.string().describe("Automatically assigned when the job is queued"),
  job_type: z.string().describe("The type of the job"),
  message: z
    .string()
    .nullable()
    .describe("Message from the job worker, if any"),
  progress: z
    .number()
    .nullable()
    .describe("Number of tasks that have already been completed"),
  results: z
    .union([
      z.array(jobStatusResultObjectSchema).nullable(),
      z.object({
        success: z
          .boolean()
          .describe("Whether the action was successful or not"),
      }),
    ])
    .describe(
      "Result data from processed tasks. See [Results](#results) below",
    ),
  status: z
    .string()
    .describe(
      'The current status. One of the following: "queued", "working", "failed", "completed"',
    ),
  total: z
    .number()
    .nullable()
    .describe("The total number of tasks this job is batching through"),
  url: z.string().describe("The URL to poll for status updates"),
});

export const jobStatusResponseSchema: z.ZodSchema<JobStatusResponse> = z.object(
  { job_status: jobStatusObjectSchema },
);

export const jobStatusesResponseSchema: z.ZodSchema<JobStatusesResponse> =
  z.object({ job_statuses: z.array(jobStatusObjectSchema) });

export const urlObjectSchema: z.ZodSchema<UrlObject> = z.object({
  url: z.string(),
});

export const userCreateInputSchema: z.ZodSchema<UserCreateInput> = z.object({
  custom_role_id: z.number(),
  email: z.string(),
  external_id: z.string(),
  identities: z.array(z.object({ type: z.string(), value: z.string() })),
  name: z.string(),
  organization: z.object({ name: z.string() }),
  organization_id: z.number(),
  role: z.string(),
});

export const userFieldObjectSchema: z.ZodSchema<UserFieldObject> =
  customFieldObjectSchema;

export const userFieldResponseSchema: z.ZodSchema<UserFieldResponse> = z.object(
  { user_field: userFieldObjectSchema },
);

export const userFieldsResponseSchema: z.ZodSchema<UserFieldsResponse> =
  z.object({
    count: z.number().describe("Total count of records retrieved"),
    next_page: z.string().nullable().describe("URL of the next page"),
    previous_page: z.string().nullable().describe("URL of the previous page"),
    user_fields: z.array(userFieldObjectSchema),
  });

export const userForAdminSchema: z.ZodSchema<UserForAdmin> = z.object({
  active: z.boolean().describe("false if the user has been deleted"),
  alias: z.string().describe("An alias displayed to end users"),
  chat_only: z
    .boolean()
    .describe("Whether or not the user is a chat-only agent"),
  created_at: z.string().describe("The time the user was created"),
  custom_role_id: z
    .number()
    .nullable()
    .describe(
      "A custom role if the user is an agent on the Enterprise plan or above",
    ),
  default_group_id: z.number().describe("The id of the user's default group"),
  details: z
    .string()
    .describe(
      "Any details you want to store about the user, such as an address",
    ),
  email: z
    .string()
    .describe(
      "The user's primary email address. *Writeable on create only. On update, a secondary email is added. See [Email Address](#email-address)",
    ),
  external_id: z
    .string()
    .nullable()
    .describe(
      'A unique identifier from another system. The API treats the id as case insensitive. Example: "ian1" and "IAN1" are the same value.',
    ),
  iana_time_zone: z.string().describe("The time zone for the user"),
  id: z.number().describe("Automatically assigned when the user is created"),
  last_login_at: z
    .string()
    .describe(
      "Last time the user signed in to Zendesk Support or made an API request\nusing an API token or basic authentication\n",
    ),
  locale: z
    .string()
    .describe(
      'The user\'s locale. A BCP-47 compliant tag for the locale. If both "locale" and "locale_id" are present on create or update, "locale_id" is ignored and only "locale" is used.',
    ),
  locale_id: z.number().describe("The user's language identifier"),
  moderator: z
    .boolean()
    .describe("Designates whether the user has forum moderation capabilities"),
  name: z.string().describe("The user's name"),
  notes: z.string().describe("Any notes you want to store about the user"),
  only_private_comments: z
    .boolean()
    .describe("true if the user can only create private comments"),
  organization_id: z
    .number()
    .nullable()
    .describe(
      "The id of the user's organization. If the user has more than one [organization memberships](/api-reference/ticketing/organizations/organization_memberships/), the id of the user's default organization. If updating, see [Organization ID](#organization-id)",
    ),
  phone: z
    .string()
    .nullable()
    .describe(
      "The user's primary phone number. See [Phone Number](#phone-number) below",
    ),
  photo: z
    .object({})
    .passthrough()
    .nullable()
    .describe(
      "The user's profile picture represented as an [Attachment](/api-reference/ticketing/tickets/ticket-attachments/) object",
    ),
  remote_photo_url: z
    .string()
    .describe("A URL pointing to the user's profile picture."),
  report_csv: z
    .boolean()
    .describe(
      "This parameter is inert and has no effect. It may be deprecated in the\nfuture.\n\nPreviously, this parameter determined whether a user could access a CSV\nreport in a legacy Guide dashboard. This dashboard has been removed. See\n[Announcing Guide legacy reporting upgrade to\nExplore](https://support.zendesk.com/hc/en-us/articles/4762263171610-Announcing-Guide-legacy-reporting-upgrade-to-Explore-)\n",
    ),
  restricted_agent: z
    .boolean()
    .describe(
      "If the agent has any restrictions; false for admins and unrestricted agents, true for other agents",
    ),
  role: z
    .string()
    .describe(
      'The user\'s role. Possible values are "end-user", "agent", or "admin"',
    ),
  role_type: z
    .number()
    .nullable()
    .describe(
      "The user's role id. 0 for a custom agent, 1 for a light agent, 2 for a chat agent, 3 for a chat agent added to the Support account as a contributor ([Chat Phase 4](https://support.zendesk.com/hc/en-us/articles/360022365373#topic_djh_1zk_4fb)), 4 for an admin, and 5 for a billing admin",
    ),
  shared: z
    .boolean()
    .describe(
      "If the user is shared from a different Zendesk Support instance. Ticket sharing accounts only",
    ),
  shared_agent: z
    .boolean()
    .describe(
      "If the user is a shared agent from a different Zendesk Support instance. Ticket sharing accounts only",
    ),
  shared_phone_number: z
    .boolean()
    .nullable()
    .describe(
      "Whether the `phone` number is shared or not. See [Phone Number](#phone-number) below",
    ),
  signature: z
    .string()
    .describe(
      "The user's signature. Only agents and admins can have signatures",
    ),
  suspended: z
    .boolean()
    .describe(
      "If the agent is suspended. Tickets from suspended users are also suspended, and these users cannot sign in to the end user portal",
    ),
  tags: z
    .array(z.string())
    .describe(
      "The user's tags. Only present if your account has user tagging enabled",
    ),
  ticket_restriction: z
    .string()
    .nullable()
    .describe(
      'Specifies which tickets the user has access to. Possible values are: "organization", "groups", "assigned", "requested", null. "groups" and "assigned" are valid only for agents. If you pass an invalid value to an end user (for example, "groups"), they will be assigned to "requested", regardless of their previous access',
    ),
  time_zone: z
    .string()
    .describe("The user's time zone. See [Time Zone](#time-zone)"),
  two_factor_auth_enabled: z
    .boolean()
    .nullable()
    .describe("If two factor authentication is enabled"),
  updated_at: z.string().describe("The time the user was last updated"),
  url: z.string().describe("The user's API url"),
  user_fields: z
    .object({})
    .passthrough()
    .describe(
      "Values of custom fields in the user's profile. See [User Fields](#user-fields)",
    ),
  verified: z
    .boolean()
    .describe(
      "Any of the user's identities is verified. See [User Identities](/api-reference/ticketing/users/user_identities)",
    ),
});

export const userForEndUserSchema: z.ZodSchema<UserForEndUser> = z.object({
  created_at: z.string().describe("The time the user was created"),
  email: z
    .string()
    .describe(
      "The primary email address of this user. If the primary email address is not [verified](https://support.zendesk.com/hc/en-us/articles/4408886752410), the secondary email address is used",
    ),
  iana_time_zone: z.string().describe("The time zone for the user"),
  id: z.number().describe("Automatically assigned when creating users"),
  locale: z.string().describe("The locale for this user"),
  locale_id: z.number().describe("The language identifier for this user"),
  name: z.string().describe("The name of the user"),
  organization_id: z
    .number()
    .describe(
      "The id of the user's organization. If the user has more than one [organization memberships](/api-reference/ticketing/organizations/organization_memberships/), the id of the user's default organization. If updating, see [Organization ID](/api-reference/ticketing/users/users/#organization-id)",
    ),
  phone: z
    .string()
    .describe(
      "The primary phone number of this user. See [Phone Number](/api-reference/ticketing/users/users/#phone-number) in the Users API",
    ),
  photo: z
    .object({})
    .passthrough()
    .describe(
      "The user's profile picture represented as an [Attachment](/api-reference/ticketing/tickets/ticket-attachments/) object",
    ),
  role: z
    .string()
    .describe(
      'The role of the user. Possible values: `"end-user"`, `"agent"`, `"admin"`',
    ),
  shared_phone_number: z
    .boolean()
    .describe(
      "Whether the `phone` number is shared or not. See [Phone Number](/api-reference/ticketing/users/users/#phone-number) in the Users API",
    ),
  time_zone: z.string().describe("The time-zone of this user"),
  updated_at: z.string().describe("The time of the last update of the user"),
  url: z.string().describe("The API url of this user"),
  verified: z
    .boolean()
    .describe(
      "Any of the user's identities is verified. See [User Identities](/api-reference/ticketing/users/user_identities)",
    ),
});

export const userIdentityObjectSchema: z.ZodSchema<UserIdentityObject> =
  z.object({
    created_at: z.string().describe("The time the identity was created"),
    deliverable_state: z
      .string()
      .describe(
        "Email identity type only. Indicates if Zendesk sends notifications to the email address. See [Deliverable state](#deliverable-state)",
      ),
    id: z.number().describe("Automatically assigned on creation"),
    primary: z
      .boolean()
      .describe(
        "If the identity is the primary identity. *Writable only when creating, not when updating. Use the [Make Identity Primary](#make-identity-primary) endpoint instead",
      ),
    type: z
      .union([
        z.literal("email"),
        z.literal("twitter"),
        z.literal("facebook"),
        z.literal("google"),
        z.literal("phone_number"),
        z.literal("agent_forwarding"),
        z.literal("any_channel"),
        z.literal("foreign"),
        z.literal("sdk"),
      ])
      .describe("The type of this identity"),
    undeliverable_count: z
      .number()
      .describe(
        "The number of times a soft-bounce response was received at that address",
      ),
    updated_at: z.string().describe("The time the identity was updated"),
    url: z.string().describe("The API url of this identity"),
    user_id: z.number().describe("The id of the user"),
    value: z
      .string()
      .describe("The identifier for this identity, such as an email address"),
    verified: z.boolean().describe("If the identity has been verified"),
  });

export const userIdentitiesResponseSchema: z.ZodSchema<UserIdentitiesResponse> =
  z.object({ identities: z.array(userIdentityObjectSchema) });

export const userIdentityResponseSchema: z.ZodSchema<UserIdentityResponse> =
  z.object({ identity: userIdentityObjectSchema });

export const userMergeByIdInputSchema: z.ZodSchema<UserMergeByIdInput> =
  z.object({ id: z.number() });

export const userMergePropertiesInputSchema: z.ZodSchema<UserMergePropertiesInput> =
  z.object({
    email: z.string(),
    name: z.string(),
    organization_id: z.number(),
    password: z.string(),
  });

export const userInputSchema: z.ZodSchema<UserInput> = z.union([
  userCreateInputSchema,
  userMergePropertiesInputSchema,
  userMergeByIdInputSchema,
]);

export const userObjectSchema: z.ZodSchema<UserObject> = z.union([
  userForAdminSchema,
  userForEndUserSchema,
]);

export const activityObjectSchema: z.ZodSchema<ActivityObject> = z.object({
  actor: userObjectSchema.describe(
    "The full user record of the user responsible for the ticket activity. See [Users](/api-reference/ticketing/users/users/)",
  ),
  actor_id: z
    .number()
    .describe(
      'The id of the user responsible for the ticket activity. An `actor_id` of "-1" is a Zendesk system user, such as an automations action.',
    ),
  created_at: z.string().describe("When the record was created"),
  id: z.number().describe("Automatically assigned on creation"),
  object: z
    .object({})
    .passthrough()
    .describe(
      "The content of the activity. Can be a ticket, comment, or change.",
    ),
  target: z
    .object({})
    .passthrough()
    .describe("The target of the activity, a ticket."),
  title: z.string().describe("Description of the activity"),
  updated_at: z.string().describe("When the record was last updated"),
  url: z.string().describe("The API url of the activity"),
  user: userObjectSchema.describe(
    "The full user record of the agent making the request. See [Users](/api-reference/ticketing/users/users/)",
  ),
  user_id: z.number().describe("The id of the agent making the request"),
  verb: z
    .string()
    .describe(
      'The type of activity. Can be "tickets.assignment", "tickets.comment", or "tickets.priority_increase"',
    ),
});

export const activitiesResponseSchema: z.ZodSchema<ActivitiesResponse> =
  z.object({
    activities: z.array(activityObjectSchema),
    actors: z.array(z.object({}).passthrough()),
    count: z.number(),
    next_page: z.string().nullable(),
    previous_page: z.string().nullable(),
    users: z.array(z.object({}).passthrough()),
  });

export const activityResponseSchema: z.ZodSchema<ActivityResponse> = z.object({
  activity: activityObjectSchema,
});

export const currentUserResponseSchema: z.ZodSchema<CurrentUserResponse> =
  z.object({
    user: z.intersection(
      userObjectSchema,
      z.object({
        authenticity_token: z
          .string()
          .describe("CSRF token required by some Zendesk APIs."),
      }),
    ),
  });

export const cursorBasedExportIncrementalUsersResponseSchema: z.ZodSchema<CursorBasedExportIncrementalUsersResponse> =
  z.object({
    after_cursor: z.string().nullable(),
    after_url: z.string().nullable(),
    before_cursor: z.string().nullable(),
    before_url: z.string().nullable(),
    end_of_stream: z.boolean(),
    users: z.array(userObjectSchema),
  });

export const timeBasedExportIncrementalUsersResponseSchema: z.ZodSchema<TimeBasedExportIncrementalUsersResponse> =
  z.object({
    count: z.number(),
    end_of_stream: z.boolean(),
    end_time: z.number(),
    next_page: z.string().nullable(),
    users: z.array(userObjectSchema),
  });

export const userPasswordRequirementsResponseSchema: z.ZodSchema<UserPasswordRequirementsResponse> =
  z.object({ requirements: z.array(z.string()) });

export const userRelatedObjectSchema: z.ZodSchema<UserRelatedObject> = z.object(
  {
    assigned_tickets: z.number().describe("Count of assigned tickets"),
    ccd_tickets: z.number().describe("Count of collaborated tickets"),
    organization_subscriptions: z
      .number()
      .describe("Count of organization subscriptions"),
    requested_tickets: z.number().describe("Count of requested tickets"),
  },
);

export const userRelatedResponseSchema: z.ZodSchema<UserRelatedResponse> =
  z.object({ user_related: userRelatedObjectSchema });

export const userRequestSchema: z.ZodSchema<UserRequest> = z.object({
  user: userInputSchema,
});

export const userResponseSchema: z.ZodSchema<UserResponse> = z.object({
  user: userObjectSchema,
});

export const usersRequestSchema: z.ZodSchema<UsersRequest> = z.object({
  users: z.array(userInputSchema),
});

export const usersResponseSchema: z.ZodSchema<UsersResponse> = z.object({
  users: z.array(userObjectSchema),
});

export const reverseLookupResponseSchema: z.ZodSchema<ReverseLookupResponse> =
  usersResponseSchema;

export const viaObjectSchema: z.ZodSchema<ViaObject> = z
  .object({
    channel: z
      .string()
      .describe(
        'This tells you how the ticket or event was created. Examples: "web", "mobile", "rule", "system"\n',
      ),
    source: z
      .object({
        from: z.object({
          address: z.string().nullable(),
          id: z.number().nullable(),
          name: z.string().nullable(),
          title: z.string().nullable(),
        }),
        rel: z.string().nullable(),
        to: z.object({ address: z.string(), name: z.string() }),
      })
      .passthrough()
      .describe(
        "For some channels a source object gives more information about how or why the ticket or event was created\n",
      ),
  })
  .describe(
    "An object explaining how the ticket was created. See the [Via object reference](/documentation/ticketing/reference-guides/via-object-reference)\n",
  );

export const auditObjectSchema: z.ZodSchema<AuditObject> = z.object({
  author_id: z.number(),
  created_at: z.string(),
  events: z.array(
    z.object({
      body: z.string(),
      field_name: z.string(),
      id: z.number(),
      type: z.string(),
      value: z.union([z.string(), z.number(), z.array(z.unknown())]),
    }),
  ),
  id: z.number(),
  metadata: z.object({}),
  ticket_id: z.number(),
  via: viaObjectSchema,
});

export const suspendedTicketObjectSchema: z.ZodSchema<SuspendedTicketObject> =
  z.object({
    attachments: z
      .array(attachmentObjectSchema)
      .nullable()
      .describe(
        "The attachments, if any associated to this suspended ticket. See [Attachments](/api-reference/ticketing/tickets/ticket-attachments/)",
      ),
    author: authorObjectSchema.describe(
      "The author id (if available), name and email",
    ),
    brand_id: z
      .number()
      .describe(
        "The id of the brand this ticket is associated with. Only applicable for Enterprise accounts",
      ),
    cause: z.string().describe("Why the ticket was suspended"),
    cause_id: z.number().describe("The ID of the cause"),
    content: z.string().describe("The content that was flagged"),
    created_at: z
      .string()
      .describe(
        "The ticket ID this suspended email is associated with, if available",
      ),
    error_messages: z
      .array(z.object({}))
      .nullable()
      .describe(
        "The error messages if any associated to this suspended ticket",
      ),
    id: z.number().describe("Automatically assigned"),
    message_id: z.string().describe("The ID of the email, if available"),
    recipient: z
      .string()
      .describe("The original recipient e-mail address of the ticket"),
    subject: z
      .string()
      .describe("The value of the subject field for this ticket"),
    ticket_id: z
      .number()
      .describe(
        "The ticket ID this suspended email is associated with, if available",
      ),
    updated_at: z.string().describe("When the ticket was assigned"),
    url: z.string().describe("The API url of this ticket"),
    via: viaObjectSchema,
  });

export const recoverSuspendedTicketResponseSchema: z.ZodSchema<RecoverSuspendedTicketResponse> =
  z.object({ ticket: z.array(suspendedTicketObjectSchema) });

export const recoverSuspendedTicketUnprocessableContentResponseSchema: z.ZodSchema<RecoverSuspendedTicketUnprocessableContentResponse> =
  z.object({ ticket: z.array(suspendedTicketObjectSchema) });

export const recoverSuspendedTicketsResponseSchema: z.ZodSchema<RecoverSuspendedTicketsResponse> =
  z.object({ tickets: z.array(suspendedTicketObjectSchema) });

export const suspendedTicketResponseSchema: z.ZodSchema<SuspendedTicketResponse> =
  z.object({ suspended_ticket: z.array(suspendedTicketObjectSchema) });

export const suspendedTicketsResponseSchema: z.ZodSchema<SuspendedTicketsResponse> =
  z.object({ suspended_tickets: z.array(suspendedTicketObjectSchema) });

export const ticketCreateInputSchema: z.ZodSchema<TicketCreateInput> =
  z.intersection(
    ticketUpdateInputSchema,
    z.object({
      brand_id: z
        .number()
        .describe(
          "Enterprise only. The id of the brand this ticket is associated with",
        ),
      collaborators: z
        .array(collaboratorObjectSchema)
        .describe(
          "POST requests only. Users to add as cc's when creating a ticket. See [Setting Collaborators](/documentation/ticketing/managing-tickets/creating-and-updating-tickets#setting-collaborators)",
        ),
      email_cc_ids: z
        .array(z.number())
        .describe(
          "The ids of agents or end users currently CC'ed on the ticket. See [CCs and followers resources](https://support.zendesk.com/hc/en-us/articles/360020585233) in the Support Help Center",
        ),
      follower_ids: z
        .array(z.number())
        .describe(
          "The ids of agents currently following the ticket. See [CCs and followers resources](https://support.zendesk.com/hc/en-us/articles/360020585233)",
        ),
      macro_ids: z
        .array(z.number())
        .describe(
          "POST requests only. List of macro IDs to be recorded in the ticket audit",
        ),
      raw_subject: z
        .string()
        .describe(
          'The dynamic content placeholder, if present, or the "subject" value, if not. See [Dynamic Content Items](/api-reference/ticketing/ticket-management/dynamic_content/)\n',
        ),
      recipient: z
        .string()
        .describe("The original recipient e-mail address of the ticket"),
      submitter_id: z
        .number()
        .describe(
          "The user who submitted the ticket. The submitter always becomes the author of the first comment on the ticket",
        ),
      ticket_form_id: z
        .number()
        .describe(
          "Enterprise only. The id of the ticket form to render for the ticket",
        ),
      via: viaObjectSchema,
      via_followup_source_id: z
        .number()
        .describe(
          "POST requests only. The id of a closed ticket when creating a follow-up ticket. See [Creating a follow-up ticket](/documentation/ticketing/managing-tickets/creating-and-updating-tickets#creating-a-follow-up-ticket)",
        ),
    }),
  );

export const ticketCreateRequestSchema: z.ZodSchema<TicketCreateRequest> =
  z.object({ ticket: ticketCreateInputSchema });

export const ticketUpdateResponseSchema: z.ZodSchema<TicketUpdateResponse> =
  z.object({ audit: auditObjectSchema, ticket: ticketObjectSchema });

export const ticketsCreateRequestSchema: z.ZodSchema<TicketsCreateRequest> =
  z.object({ tickets: z.array(ticketCreateInputSchema) });

export const viewCountObjectSchema: z.ZodSchema<ViewCountObject> = z.object({
  active: z
    .boolean()
    .describe(
      "Only active views if true, inactive views if false, all views if null.",
    ),
  fresh: z
    .boolean()
    .describe(
      "false if the cached data is stale and the system is still loading and caching new data",
    ),
  pretty: z
    .string()
    .describe("A pretty-printed text approximation of the view count"),
  url: z.string().describe("The API url of the count"),
  value: z
    .number()
    .nullable()
    .describe(
      "The cached number of tickets in the view. Can also be null if the system is loading and caching new data. Not to be confused with 0 tickets",
    ),
  view_id: z.number().describe("The id of the view"),
});

export const viewCountResponseSchema: z.ZodSchema<ViewCountResponse> = z.object(
  { view_count: viewCountObjectSchema },
);

export const viewCountsResponseSchema: z.ZodSchema<ViewCountsResponse> =
  z.object({ view_counts: z.array(viewCountObjectSchema) });

export const viewExportResponseSchema: z.ZodSchema<ViewExportResponse> =
  z.object({ export: z.object({ status: z.string(), view_id: z.number() }) });

export const viewObjectSchema: z.ZodSchema<ViewObject> = z.object({
  active: z.boolean().describe("Whether the view is active"),
  conditions: z
    .object({})
    .passthrough()
    .describe(
      "Describes how the view is constructed. See [Conditions reference](/documentation/ticketing/reference-guides/conditions-reference)",
    ),
  created_at: z.string().describe("The time the view was created"),
  default: z.boolean().describe("If true, the view is a default view"),
  description: z.string().describe("The description of the view"),
  execution: z
    .object({})
    .passthrough()
    .describe(
      "Describes how the view should be executed. See [Execution](#execution)",
    ),
  id: z.number().describe("Automatically assigned when created"),
  position: z.number().describe("The position of the view"),
  restriction: z
    .object({})
    .passthrough()
    .describe(
      "Who may access this account. Is null when everyone in the account can access it",
    ),
  title: z.string().describe("The title of the view"),
  updated_at: z.string().describe("The time the view was last updated"),
});

export const viewResponseSchema: z.ZodSchema<ViewResponse> = z.object({
  columns: z.array(z.object({}).passthrough()),
  groups: z.array(z.object({}).passthrough()),
  rows: z.array(z.object({}).passthrough()),
  view: viewObjectSchema,
});

export const viewsCountResponseSchema: z.ZodSchema<ViewsCountResponse> =
  z.object({
    count: z.object({ refreshed_at: z.string(), value: z.number() }),
  });

export const viewsResponseSchema: z.ZodSchema<ViewsResponse> = z.object({
  count: z.number(),
  next_page: z.string().nullable(),
  previous_page: z.string().nullable(),
  views: z.array(viewObjectSchema),
});

export const workspaceInputSchema: z.ZodSchema<WorkspaceInput> = z.object({
  conditions: conditionsObjectSchema,
  description: z
    .string()
    .describe("User-defined description of this workspace's purpose"),
  macros: z.array(z.number()),
  ticket_form_id: z.number(),
  title: z.string().describe("The title of the workspace"),
});

export const workspaceObjectSchema: z.ZodSchema<WorkspaceObject> = z.object({
  activated: z
    .boolean()
    .describe("If true, this workspace is available for use"),
  apps: z
    .array(z.object({}).passthrough())
    .describe("The apps associated to this workspace"),
  conditions: conditionsObjectSchema,
  created_at: z.string().describe("The time the workspace was created"),
  description: z
    .string()
    .describe("User-defined description of this workspace's purpose"),
  id: z.number().describe("Automatically assigned upon creation"),
  macro_ids: z
    .array(z.number())
    .describe("The ids of the macros associated to this workspace"),
  macros: z
    .array(z.number())
    .describe("The ids of the macros associated to this workspace"),
  position: z
    .number()
    .describe("Ordering of the workspace relative to other workspaces"),
  prefer_workspace_app_order: z
    .boolean()
    .describe(
      "If true, the order of apps within the workspace will be preserved",
    ),
  selected_macros: z
    .array(macroObjectSchema)
    .describe(
      "An array of the macro objects that will be used in this workspace. See [Macros](/api-reference/ticketing/business-rules/macros/)",
    ),
  ticket_form_id: z
    .number()
    .describe("The id of the ticket web form associated to this workspace"),
  title: z.string().describe("The title of the workspace"),
  updated_at: z
    .string()
    .describe("The time of the last update of the workspace"),
  url: z.string().describe("The URL for this resource"),
});

export const workspaceResponseSchema: z.ZodSchema<WorkspaceResponse> =
  z.intersection(
    z.object({ workspaces: z.array(workspaceObjectSchema) }),
    offsetPaginationObjectSchema,
  );

export const getApiV2ByTargetTypeByTargetIdRelationshipFieldsByFieldIdBySourceTypeResponseSchema: z.ZodSchema<ReverseLookupResponse> =
  reverseLookupResponseSchema;

export const getApiV2AccountSettingsResponseSchema: z.ZodSchema<AccountSettingsResponse> =
  accountSettingsResponseSchema;

export const getApiV2AccountsAvailableResponseSchema: z.ZodSchema<{
  success: boolean;
}> = z.object({ success: z.boolean() });

export const getApiV2ActivitiesResponseSchema: z.ZodSchema<ActivitiesResponse> =
  activitiesResponseSchema;

export const getApiV2ActivitiesByActivityIdResponseSchema: z.ZodSchema<ActivityResponse> =
  activityResponseSchema;

export const getApiV2ActivitiesCountResponseSchema: z.ZodSchema<ActivitiesCountResponse> =
  activitiesCountResponseSchema;

export const getApiV2AttachmentsByAttachmentIdResponseSchema: z.ZodSchema<AttachmentResponse> =
  attachmentResponseSchema;

export const getApiV2AuditLogsResponseSchema: z.ZodSchema<AuditLogsResponse> =
  auditLogsResponseSchema;

export const getApiV2AuditLogsByAuditLogIdResponseSchema: z.ZodSchema<AuditLogResponse> =
  auditLogResponseSchema;

export const getApiV2AutocompleteTagsResponseSchema: z.ZodSchema<TagsByObjectIdResponse> =
  tagsByObjectIdResponseSchema;

export const getApiV2AutomationsResponseSchema: z.ZodSchema<AutomationsResponse> =
  automationsResponseSchema;

export const getApiV2AutomationsByAutomationIdResponseSchema: z.ZodSchema<AutomationResponse> =
  automationResponseSchema;

export const getApiV2AutomationsActiveResponseSchema: z.ZodSchema<AutomationsResponse> =
  automationsResponseSchema;

export const getApiV2AutomationsSearchResponseSchema: z.ZodSchema<AutomationsResponse> =
  automationsResponseSchema;

export const getApiV2BookmarksResponseSchema: z.ZodSchema<BookmarksResponse> =
  bookmarksResponseSchema;

export const getApiV2BrandsResponseSchema: z.ZodSchema<BrandsResponse> =
  brandsResponseSchema;

export const getApiV2BrandsByBrandIdResponseSchema: z.ZodSchema<BrandResponse> =
  brandResponseSchema;

export const getApiV2BrandsByBrandIdCheckHostMappingResponseSchema: z.ZodSchema<HostMappingObject> =
  hostMappingObjectSchema;

export const getApiV2BrandsCheckHostMappingResponseSchema: z.ZodSchema<HostMappingObject> =
  hostMappingObjectSchema;

export const getApiV2ChannelsTwitterMonitoredTwitterHandlesResponseSchema: z.ZodSchema<TwitterChannelsResponse> =
  twitterChannelsResponseSchema;

export const getApiV2ChannelsTwitterMonitoredTwitterHandlesByMonitoredTwitterHandleIdResponseSchema: z.ZodSchema<TwitterChannelResponse> =
  twitterChannelResponseSchema;

export const getApiV2ChannelsTwitterTicketsByCommentIdStatusesResponseSchema: z.ZodSchema<TwitterChannelTwicketStatusResponse> =
  twitterChannelTwicketStatusResponseSchema;

export const getApiV2CustomObjectsResponseSchema: z.ZodSchema<CustomObjectsResponse> =
  customObjectsResponseSchema;

export const getApiV2CustomObjectsByCustomObjectKeyResponseSchema: z.ZodSchema<CustomObjectResponse> =
  customObjectResponseSchema;

export const getApiV2CustomObjectsByCustomObjectKeyFieldsResponseSchema: z.ZodSchema<CustomObjectFieldsResponse> =
  customObjectFieldsResponseSchema;

export const getApiV2CustomObjectsByCustomObjectKeyFieldsByCustomObjectFieldKeyOrIdResponseSchema: z.ZodSchema<CustomObjectFieldResponse> =
  customObjectFieldResponseSchema;

export const getApiV2CustomObjectsByCustomObjectKeyLimitsFieldLimitResponseSchema: z.ZodSchema<CustomObjectLimitsResponse> =
  customObjectLimitsResponseSchema;

export const getApiV2CustomObjectsByCustomObjectKeyRecordsResponseSchema: z.ZodSchema<CustomObjectRecordsResponse> =
  customObjectRecordsResponseSchema;

export const getApiV2CustomObjectsByCustomObjectKeyRecordsByCustomObjectRecordIdResponseSchema: z.ZodSchema<CustomObjectRecordResponse> =
  customObjectRecordResponseSchema;

export const getApiV2CustomObjectsByCustomObjectKeyRecordsAutocompleteResponseSchema: z.ZodSchema<CustomObjectRecordsResponse> =
  customObjectRecordsResponseSchema;

export const getApiV2CustomObjectsByCustomObjectKeyRecordsCountResponseSchema: z.ZodSchema<{
  count: Record<string, unknown>;
}> = z.object({ count: z.object({}).passthrough() });

export const getApiV2CustomObjectsByCustomObjectKeyRecordsSearchResponseSchema: z.ZodSchema<CustomObjectRecordsResponse> =
  customObjectRecordsResponseSchema;

export const getApiV2CustomObjectsLimitsObjectLimitResponseSchema: z.ZodSchema<CustomObjectLimitsResponse> =
  customObjectLimitsResponseSchema;

export const getApiV2CustomObjectsLimitsRecordLimitResponseSchema: z.ZodSchema<CustomObjectLimitsResponse> =
  customObjectLimitsResponseSchema;

export const getApiV2CustomRolesResponseSchema: z.ZodSchema<CustomRolesResponse> =
  customRolesResponseSchema;

export const getApiV2CustomRolesByCustomRoleIdResponseSchema: z.ZodSchema<CustomRoleResponse> =
  customRoleResponseSchema;

export const getApiV2CustomStatusesResponseSchema: z.ZodSchema<CustomStatusesResponse> =
  customStatusesResponseSchema;

export const getApiV2CustomStatusesByCustomStatusIdResponseSchema: z.ZodSchema<CustomStatusResponse> =
  customStatusResponseSchema;

export const getApiV2DeletedTicketsResponseSchema: z.ZodSchema<ListDeletedTicketsResponse> =
  listDeletedTicketsResponseSchema;

export const getApiV2DeletedUsersResponseSchema: z.ZodSchema<DeletedUsersResponse> =
  deletedUsersResponseSchema;

export const getApiV2DeletedUsersByDeletedUserIdResponseSchema: z.ZodSchema<DeletedUserResponse> =
  deletedUserResponseSchema;

export const getApiV2DeletedUsersCountResponseSchema: z.ZodSchema<CountResponse> =
  countResponseSchema;

export const getApiV2DynamicContentItemsResponseSchema: z.ZodSchema<DynamicContentsResponse> =
  dynamicContentsResponseSchema;

export const getApiV2DynamicContentItemsByDynamicContentItemIdResponseSchema: z.ZodSchema<DynamicContentResponse> =
  dynamicContentResponseSchema;

export const getApiV2DynamicContentItemsByDynamicContentItemIdVariantsResponseSchema: z.ZodSchema<DynamicContentVariantsResponse> =
  dynamicContentVariantsResponseSchema;

export const getApiV2DynamicContentItemsByDynamicContentItemIdVariantsByDynammicContentVariantIdResponseSchema: z.ZodSchema<DynamicContentVariantResponse> =
  dynamicContentVariantResponseSchema;

export const getApiV2DynamicContentItemsShowManyResponseSchema: z.ZodSchema<DynamicContentsResponse> =
  dynamicContentsResponseSchema;

export const getApiV2GroupMembershipsResponseSchema: z.ZodSchema<GroupMembershipsResponse> =
  groupMembershipsResponseSchema;

export const getApiV2GroupMembershipsByGroupMembershipIdResponseSchema: z.ZodSchema<GroupMembershipResponse> =
  groupMembershipResponseSchema;

export const getApiV2GroupMembershipsAssignableResponseSchema: z.ZodSchema<GroupMembershipsResponse> =
  groupMembershipsResponseSchema;

export const getApiV2GroupSlasPoliciesResponseSchema: z.ZodSchema<GroupSLAPoliciesResponse> =
  groupSlaPoliciesResponseSchema;

export const getApiV2GroupSlasPoliciesByGroupSlaPolicyIdResponseSchema: z.ZodSchema<GroupSLAPolicyResponse> =
  groupSlaPolicyResponseSchema;

export const getApiV2GroupSlasPoliciesDefinitionsResponseSchema: z.ZodSchema<GroupSLAPolicyFilterDefinitionResponse> =
  groupSlaPolicyFilterDefinitionResponseSchema;

export const getApiV2GroupsResponseSchema: z.ZodSchema<GroupsResponse> =
  groupsResponseSchema;

export const getApiV2GroupsByGroupIdResponseSchema: z.ZodSchema<GroupResponse> =
  groupResponseSchema;

export const getApiV2GroupsByGroupIdMembershipsResponseSchema: z.ZodSchema<GroupMembershipsResponse> =
  groupMembershipsResponseSchema;

export const getApiV2GroupsAssignableResponseSchema: z.ZodSchema<GroupsResponse> =
  groupsResponseSchema;

export const getApiV2GroupsCountResponseSchema: z.ZodSchema<GroupsCountObject> =
  groupsCountObjectSchema;

export const getApiV2IncrementalByIncrementalResourceSampleResponseSchema: z.ZodSchema<TimeBasedExportIncrementalTicketsResponse> =
  timeBasedExportIncrementalTicketsResponseSchema;

export const getApiV2IncrementalOrganizationsResponseSchema: z.ZodSchema<ExportIncrementalOrganizationsResponse> =
  exportIncrementalOrganizationsResponseSchema;

export const getApiV2IncrementalRoutingAttributeValuesResponseSchema: z.ZodSchema<IncrementalSkillBasedRouting> =
  incrementalSkillBasedRoutingSchema;

export const getApiV2IncrementalRoutingAttributesResponseSchema: z.ZodSchema<IncrementalSkillBasedRouting> =
  incrementalSkillBasedRoutingSchema;

export const getApiV2IncrementalRoutingInstanceValuesResponseSchema: z.ZodSchema<IncrementalSkillBasedRouting> =
  incrementalSkillBasedRoutingSchema;

export const getApiV2IncrementalTicketEventsResponseSchema: z.ZodSchema<ExportIncrementalTicketEventsResponse> =
  exportIncrementalTicketEventsResponseSchema;

export const getApiV2IncrementalTicketMetricEventsResponseSchema: z.ZodSchema<TicketMetricEventsResponse> =
  ticketMetricEventsResponseSchema;

export const getApiV2IncrementalTicketsResponseSchema: z.ZodSchema<TimeBasedExportIncrementalTicketsResponse> =
  timeBasedExportIncrementalTicketsResponseSchema;

export const getApiV2IncrementalTicketsCursorResponseSchema: z.ZodSchema<CursorBasedExportIncrementalTicketsResponse> =
  cursorBasedExportIncrementalTicketsResponseSchema;

export const getApiV2IncrementalUsersResponseSchema: z.ZodSchema<TimeBasedExportIncrementalUsersResponse> =
  timeBasedExportIncrementalUsersResponseSchema;

export const getApiV2IncrementalUsersCursorResponseSchema: z.ZodSchema<CursorBasedExportIncrementalUsersResponse> =
  cursorBasedExportIncrementalUsersResponseSchema;

export const getApiV2JobStatusesResponseSchema: z.ZodSchema<JobStatusesResponse> =
  jobStatusesResponseSchema;

export const getApiV2JobStatusesByJobStatusIdResponseSchema: z.ZodSchema<JobStatusResponse> =
  jobStatusResponseSchema;

export const getApiV2JobStatusesShowManyResponseSchema: z.ZodSchema<JobStatusesResponse> =
  jobStatusesResponseSchema;

export const getApiV2LocalesResponseSchema: z.ZodSchema<LocalesResponse> =
  localesResponseSchema;

export const getApiV2LocalesByLocaleIdResponseSchema: z.ZodSchema<LocaleResponse> =
  localeResponseSchema;

export const getApiV2LocalesAgentResponseSchema: z.ZodSchema<LocalesResponse> =
  localesResponseSchema;

export const getApiV2LocalesCurrentResponseSchema: z.ZodSchema<LocaleResponse> =
  localeResponseSchema;

export const getApiV2LocalesDetectBestLocaleResponseSchema: z.ZodSchema<LocaleResponse> =
  localeResponseSchema;

export const getApiV2LocalesPublicResponseSchema: z.ZodSchema<LocalesResponse> =
  localesResponseSchema;

export const getApiV2MacrosResponseSchema: z.ZodSchema<MacrosResponse> =
  macrosResponseSchema;

export const getApiV2MacrosByMacroIdResponseSchema: z.ZodSchema<MacroResponse> =
  macroResponseSchema;

export const getApiV2MacrosByMacroIdApplyResponseSchema: z.ZodSchema<MacroApplyTicketResponse> =
  macroApplyTicketResponseSchema;

export const getApiV2MacrosByMacroIdAttachmentsResponseSchema: z.ZodSchema<MacroAttachmentsResponse> =
  macroAttachmentsResponseSchema;

export const getApiV2MacrosActionsResponseSchema: z.ZodSchema<{
  actions: Record<string, unknown>[];
}> = z.object({ actions: z.array(z.object({}).passthrough()) });

export const getApiV2MacrosActiveResponseSchema: z.ZodSchema<MacrosResponse> =
  macrosResponseSchema;

export const getApiV2MacrosAttachmentsByAttachmentIdResponseSchema: z.ZodSchema<MacroAttachmentResponse> =
  macroAttachmentResponseSchema;

export const getApiV2MacrosCategoriesResponseSchema: z.ZodSchema<MacroCategoriesResponse> =
  macroCategoriesResponseSchema;

export const getApiV2MacrosDefinitionsResponseSchema: z.ZodSchema<{
  definitions: {
    actions: Record<string, unknown>[];
  };
}> = z.object({
  definitions: z.object({ actions: z.array(z.object({}).passthrough()) }),
});

export const getApiV2MacrosNewResponseSchema: z.ZodSchema<MacroResponse> =
  macroResponseSchema;

export const getApiV2MacrosSearchResponseSchema: z.ZodSchema<MacrosResponse> =
  macrosResponseSchema;

export const getApiV2OrganizationFieldsResponseSchema: z.ZodSchema<OrganizationFieldsResponse> =
  organizationFieldsResponseSchema;

export const getApiV2OrganizationFieldsByOrganizationFieldIdResponseSchema: z.ZodSchema<OrganizationFieldResponse> =
  organizationFieldResponseSchema;

export const getApiV2OrganizationMembershipsResponseSchema: z.ZodSchema<OrganizationMembershipsResponse> =
  organizationMembershipsResponseSchema;

export const getApiV2OrganizationMembershipsByOrganizationMembershipIdResponseSchema: z.ZodSchema<OrganizationMembershipResponse> =
  organizationMembershipResponseSchema;

export const getApiV2OrganizationSubscriptionsResponseSchema: z.ZodSchema<OrganizationSubscriptionsResponse> =
  organizationSubscriptionsResponseSchema;

export const getApiV2OrganizationSubscriptionsByOrganizationSubscriptionIdResponseSchema: z.ZodSchema<OrganizationSubscriptionResponse> =
  organizationSubscriptionResponseSchema;

export const getApiV2OrganizationsResponseSchema: z.ZodSchema<OrganizationsResponse> =
  organizationsResponseSchema;

export const getApiV2OrganizationsByOrganizationIdResponseSchema: z.ZodSchema<OrganizationResponse> =
  organizationResponseSchema;

export const getApiV2OrganizationsByOrganizationIdRelatedResponseSchema: z.ZodSchema<OrganizationsRelatedResponse> =
  organizationsRelatedResponseSchema;

export const getApiV2OrganizationsAutocompleteResponseSchema: z.ZodSchema<OrganizationsResponse> =
  organizationsResponseSchema;

export const getApiV2OrganizationsCountResponseSchema: z.ZodSchema<CountOrganizationResponse> =
  countOrganizationResponseSchema;

export const getApiV2OrganizationsSearchResponseSchema: z.ZodSchema<OrganizationsResponse> =
  organizationsResponseSchema;

export const getApiV2OrganizationsShowManyResponseSchema: z.ZodSchema<OrganizationsResponse> =
  organizationsResponseSchema;

export const getApiV2ProblemsResponseSchema: z.ZodSchema<ListTicketProblemsResponse> =
  listTicketProblemsResponseSchema;

export const getApiV2QueuesResponseSchema: z.ZodSchema<QueuesResponse> =
  queuesResponseSchema;

export const getApiV2QueuesByQueueIdResponseSchema: z.ZodSchema<QueueResponse> =
  queueResponseSchema;

export const getApiV2QueuesDefinitionsResponseSchema: z.ZodSchema<DefinitionsResponse> =
  definitionsResponseSchema;

export const getApiV2RecipientAddressesResponseSchema: z.ZodSchema<SupportAddressesResponse> =
  supportAddressesResponseSchema;

export const getApiV2RecipientAddressesBySupportAddressIdResponseSchema: z.ZodSchema<SupportAddressResponse> =
  supportAddressResponseSchema;

export const getApiV2RelationshipsDefinitionsByTargetTypeResponseSchema: z.ZodSchema<RelationshipFilterDefinitionResponse> =
  relationshipFilterDefinitionResponseSchema;

export const getApiV2RequestsResponseSchema: z.ZodSchema<RequestsResponse> =
  requestsResponseSchema;

export const getApiV2RequestsByRequestIdResponseSchema: z.ZodSchema<RequestResponse> =
  requestResponseSchema;

export const getApiV2RequestsByRequestIdCommentsResponseSchema: z.ZodSchema<TicketCommentsResponse> =
  ticketCommentsResponseSchema;

export const getApiV2RequestsByRequestIdCommentsByTicketCommentIdResponseSchema: z.ZodSchema<TicketCommentResponse> =
  ticketCommentResponseSchema;

export const getApiV2RequestsSearchResponseSchema: z.ZodSchema<RequestsResponse> =
  requestsResponseSchema;

export const getApiV2ResourceCollectionsResponseSchema: z.ZodSchema<ResourceCollectionsResponse> =
  resourceCollectionsResponseSchema;

export const getApiV2ResourceCollectionsByResourceCollectionIdResponseSchema: z.ZodSchema<ResourceCollectionResponse> =
  resourceCollectionResponseSchema;

export const getApiV2RoutingAgentsByUserIdInstanceValuesResponseSchema: z.ZodSchema<SkillBasedRoutingAttributeValuesResponse> =
  skillBasedRoutingAttributeValuesResponseSchema;

export const getApiV2RoutingAttributesResponseSchema: z.ZodSchema<SkillBasedRoutingAttributesResponse> =
  skillBasedRoutingAttributesResponseSchema;

export const getApiV2RoutingAttributesByAttributeIdResponseSchema: z.ZodSchema<SkillBasedRoutingAttributeResponse> =
  skillBasedRoutingAttributeResponseSchema;

export const getApiV2RoutingAttributesByAttributeIdValuesResponseSchema: z.ZodSchema<SkillBasedRoutingAttributeValuesResponse> =
  skillBasedRoutingAttributeValuesResponseSchema;

export const getApiV2RoutingAttributesByAttributeIdValuesByAttributeValueIdResponseSchema: z.ZodSchema<SkillBasedRoutingAttributeValueResponse> =
  skillBasedRoutingAttributeValueResponseSchema;

export const getApiV2RoutingAttributesDefinitionsResponseSchema: z.ZodSchema<SkillBasedRoutingAttributeDefinitions> =
  skillBasedRoutingAttributeDefinitionsSchema;

export const getApiV2RoutingRequirementsFulfilledResponseSchema: z.ZodSchema<SkillBasedRoutingTicketFulfilledResponse> =
  skillBasedRoutingTicketFulfilledResponseSchema;

export const getApiV2RoutingTicketsByTicketIdInstanceValuesResponseSchema: z.ZodSchema<SkillBasedRoutingAttributeValuesResponse> =
  skillBasedRoutingAttributeValuesResponseSchema;

export const getApiV2SatisfactionRatingsResponseSchema: z.ZodSchema<SatisfactionRatingsResponse> =
  satisfactionRatingsResponseSchema;

export const getApiV2SatisfactionRatingsBySatisfactionRatingIdResponseSchema: z.ZodSchema<SatisfactionRatingResponse> =
  satisfactionRatingResponseSchema;

export const getApiV2SatisfactionRatingsCountResponseSchema: z.ZodSchema<SatisfactionRatingsCountResponse> =
  satisfactionRatingsCountResponseSchema;

export const getApiV2SatisfactionReasonsResponseSchema: z.ZodSchema<SatisfactionReasonsResponse> =
  satisfactionReasonsResponseSchema;

export const getApiV2SatisfactionReasonsBySatisfactionReasonIdResponseSchema: z.ZodSchema<SatisfactionReasonResponse> =
  satisfactionReasonResponseSchema;

export const getApiV2SearchResponseSchema: z.ZodSchema<SearchResponse> =
  searchResponseSchema;

export const getApiV2SearchCountResponseSchema: z.ZodSchema<SearchCountResponse> =
  searchCountResponseSchema;

export const getApiV2SearchExportResponseSchema: z.ZodSchema<SearchExportResponse> =
  searchExportResponseSchema;

export const getApiV2SessionsResponseSchema: z.ZodSchema<SessionsResponse> =
  sessionsResponseSchema;

export const getApiV2SharingAgreementsResponseSchema: z.ZodSchema<SharingAgreementsResponse> =
  sharingAgreementsResponseSchema;

export const getApiV2SharingAgreementsBySharingAgreementIdResponseSchema: z.ZodSchema<SharingAgreementResponse> =
  sharingAgreementResponseSchema;

export const getApiV2SlasPoliciesResponseSchema: z.ZodSchema<SLAPoliciesResponse> =
  slaPoliciesResponseSchema;

export const getApiV2SlasPoliciesBySlaPolicyIdResponseSchema: z.ZodSchema<SLAPolicyResponse> =
  slaPolicyResponseSchema;

export const getApiV2SlasPoliciesDefinitionsResponseSchema: z.ZodSchema<SLAPolicyFilterDefinitionResponse> =
  slaPolicyFilterDefinitionResponseSchema;

export const getApiV2SuspendedTicketsResponseSchema: z.ZodSchema<SuspendedTicketsResponse> =
  suspendedTicketsResponseSchema;

export const getApiV2SuspendedTicketsByIdResponseSchema: z.ZodSchema<SuspendedTicketsResponse> =
  suspendedTicketsResponseSchema;

export const getApiV2TagsResponseSchema: z.ZodSchema<TagsResponse> =
  tagsResponseSchema;

export const getApiV2TagsCountResponseSchema: z.ZodSchema<TagCountResponse> =
  tagCountResponseSchema;

export const getApiV2TargetFailuresResponseSchema: z.ZodSchema<TargetFailuresResponse> =
  targetFailuresResponseSchema;

export const getApiV2TargetFailuresByTargetFailureIdResponseSchema: z.ZodSchema<TargetFailureResponse> =
  targetFailureResponseSchema;

export const getApiV2TargetsResponseSchema: z.ZodSchema<TargetsResponse> =
  targetsResponseSchema;

export const getApiV2TargetsByTargetIdResponseSchema: z.ZodSchema<TargetResponse> =
  targetResponseSchema;

export const getApiV2TicketAuditsResponseSchema: z.ZodSchema<TicketAuditsResponse> =
  ticketAuditsResponseSchema;

export const getApiV2TicketFieldsResponseSchema: z.ZodSchema<TicketFieldsResponse> =
  ticketFieldsResponseSchema;

export const getApiV2TicketFieldsByTicketFieldIdResponseSchema: z.ZodSchema<TicketFieldResponse> =
  ticketFieldResponseSchema;

export const getApiV2TicketFieldsByTicketFieldIdOptionsResponseSchema: z.ZodSchema<CustomFieldOptionsResponse> =
  customFieldOptionsResponseSchema;

export const getApiV2TicketFieldsByTicketFieldIdOptionsByTicketFieldOptionIdResponseSchema: z.ZodSchema<CustomFieldOptionResponse> =
  customFieldOptionResponseSchema;

export const getApiV2TicketFieldsCountResponseSchema: z.ZodSchema<TicketFieldCountResponse> =
  ticketFieldCountResponseSchema;

export const getApiV2TicketFormsResponseSchema: z.ZodSchema<TicketFormsResponse> =
  ticketFormsResponseSchema;

export const getApiV2TicketFormsByTicketFormIdResponseSchema: z.ZodSchema<TicketFormResponse> =
  ticketFormResponseSchema;

export const getApiV2TicketFormsShowManyResponseSchema: z.ZodSchema<TicketFormsResponse> =
  ticketFormsResponseSchema;

export const getApiV2TicketMetricsResponseSchema: z.ZodSchema<TicketMetricsResponse> =
  ticketMetricsResponseSchema;

export const getApiV2TicketMetricsByTicketMetricIdResponseSchema: z.ZodSchema<TicketMetricsByTicketMetricIdResponse> =
  ticketMetricsByTicketMetricIdResponseSchema;

export const getApiV2TicketsResponseSchema: z.ZodSchema<TicketsResponse> =
  ticketsResponseSchema;

export const getApiV2TicketsByTicketIdResponseSchema: z.ZodSchema<TicketResponse> =
  ticketResponseSchema;

export const getApiV2TicketsByTicketIdAuditsResponseSchema: z.ZodSchema<TicketAuditsResponseNoneCursor> =
  ticketAuditsResponseNoneCursorSchema;

export const getApiV2TicketsByTicketIdAuditsByTicketAuditIdResponseSchema: z.ZodSchema<TicketAuditResponse> =
  ticketAuditResponseSchema;

export const getApiV2TicketsByTicketIdAuditsCountResponseSchema: z.ZodSchema<TicketAuditsCountResponse> =
  ticketAuditsCountResponseSchema;

export const getApiV2TicketsByTicketIdCollaboratorsResponseSchema: z.ZodSchema<ListTicketCollaboratorsResponse> =
  listTicketCollaboratorsResponseSchema;

export const getApiV2TicketsByTicketIdCommentsResponseSchema: z.ZodSchema<TicketCommentsResponse> =
  ticketCommentsResponseSchema;

export const getApiV2TicketsByTicketIdCommentsCountResponseSchema: z.ZodSchema<TicketCommentsCountResponse> =
  ticketCommentsCountResponseSchema;

export const getApiV2TicketsByTicketIdEmailCcsResponseSchema: z.ZodSchema<ListTicketEmailCCsResponse> =
  listTicketEmailCCsResponseSchema;

export const getApiV2TicketsByTicketIdFollowersResponseSchema: z.ZodSchema<ListTicketFollowersResponse> =
  listTicketFollowersResponseSchema;

export const getApiV2TicketsByTicketIdIncidentsResponseSchema: z.ZodSchema<ListTicketIncidentsResponse> =
  listTicketIncidentsResponseSchema;

export const getApiV2TicketsByTicketIdMacrosByMacroIdApplyResponseSchema: z.ZodSchema<MacroApplyTicketResponse> =
  macroApplyTicketResponseSchema;

export const getApiV2TicketsByTicketIdRelatedResponseSchema: z.ZodSchema<TicketRelatedInformation> =
  ticketRelatedInformationSchema;

export const getApiV2TicketsByTicketIdTagsResponseSchema: z.ZodSchema<TagsByObjectIdResponse> =
  tagsByObjectIdResponseSchema;

export const getApiV2TicketsCountResponseSchema: z.ZodSchema<{
  count: {
    refreshed_at: string;
    value: number;
  };
}> = z.object({
  count: z.object({ refreshed_at: z.string(), value: z.number() }),
});

export const getApiV2TicketsShowManyResponseSchema: z.ZodSchema<TicketsResponse> =
  ticketsResponseSchema;

export const getApiV2TriggerCategoriesResponseSchema: z.ZodSchema<
  TriggerCategoriesResponse & Pagination
> = z.intersection(triggerCategoriesResponseSchema, paginationSchema);

export const getApiV2TriggerCategoriesByTriggerCategoryIdResponseSchema: z.ZodSchema<TriggerCategoryResponse> =
  triggerCategoryResponseSchema;

export const getApiV2TriggersResponseSchema: z.ZodSchema<TriggersResponse> =
  triggersResponseSchema;

export const getApiV2TriggersByTriggerIdResponseSchema: z.ZodSchema<TriggerResponse> =
  triggerResponseSchema;

export const getApiV2TriggersByTriggerIdRevisionsResponseSchema: z.ZodSchema<TriggerRevisionsResponse> =
  triggerRevisionsResponseSchema;

export const getApiV2TriggersByTriggerIdRevisionsByTriggerRevisionIdResponseSchema: z.ZodSchema<TriggerRevisionResponse> =
  triggerRevisionResponseSchema;

export const getApiV2TriggersActiveResponseSchema: z.ZodSchema<TriggersResponse> =
  triggersResponseSchema;

export const getApiV2TriggersDefinitionsResponseSchema: z.ZodSchema<TriggerDefinitionResponse> =
  triggerDefinitionResponseSchema;

export const getApiV2TriggersSearchResponseSchema: z.ZodSchema<TriggersResponse> =
  triggersResponseSchema;

export const getApiV2UserFieldsResponseSchema: z.ZodSchema<UserFieldsResponse> =
  userFieldsResponseSchema;

export const getApiV2UserFieldsByUserFieldIdResponseSchema: z.ZodSchema<UserFieldResponse> =
  userFieldResponseSchema;

export const getApiV2UserFieldsByUserFieldIdOptionsResponseSchema: z.ZodSchema<CustomFieldOptionsResponse> =
  customFieldOptionsResponseSchema;

export const getApiV2UserFieldsByUserFieldIdOptionsByUserFieldOptionIdResponseSchema: z.ZodSchema<CustomFieldOptionResponse> =
  customFieldOptionResponseSchema;

export const getApiV2UsersResponseSchema: z.ZodSchema<UsersResponse> =
  usersResponseSchema;

export const getApiV2UsersByUserIdResponseSchema: z.ZodSchema<UserResponse> =
  userResponseSchema;

export const getApiV2UsersByUserIdComplianceDeletionStatusesResponseSchema: z.ZodSchema<ComplianceDeletionStatusesResponse> =
  complianceDeletionStatusesResponseSchema;

export const getApiV2UsersByUserIdGroupMembershipsResponseSchema: z.ZodSchema<GroupMembershipsResponse> =
  groupMembershipsResponseSchema;

export const getApiV2UsersByUserIdIdentitiesResponseSchema: z.ZodSchema<UserIdentitiesResponse> =
  userIdentitiesResponseSchema;

export const getApiV2UsersByUserIdIdentitiesByUserIdentityIdResponseSchema: z.ZodSchema<UserIdentityResponse> =
  userIdentityResponseSchema;

export const getApiV2UsersByUserIdPasswordRequirementsResponseSchema: z.ZodSchema<UserPasswordRequirementsResponse> =
  userPasswordRequirementsResponseSchema;

export const getApiV2UsersByUserIdRelatedResponseSchema: z.ZodSchema<UserRelatedResponse> =
  userRelatedResponseSchema;

export const getApiV2UsersByUserIdSessionsBySessionIdResponseSchema: z.ZodSchema<SessionResponse> =
  sessionResponseSchema;

export const getApiV2UsersByUserIdSkipsResponseSchema: z.ZodSchema<TicketSkipsResponse> =
  ticketSkipsResponseSchema;

export const getApiV2UsersAutocompleteResponseSchema: z.ZodSchema<UsersResponse> =
  usersResponseSchema;

export const getApiV2UsersCountResponseSchema: z.ZodSchema<CountResponse> =
  countResponseSchema;

export const getApiV2UsersMeResponseSchema: z.ZodSchema<CurrentUserResponse> =
  currentUserResponseSchema;

export const getApiV2UsersMeSessionResponseSchema: z.ZodSchema<SessionResponse> =
  sessionResponseSchema;

export const getApiV2UsersMeSessionRenewResponseSchema: z.ZodSchema<RenewSessionResponse> =
  renewSessionResponseSchema;

export const getApiV2UsersSearchResponseSchema: z.ZodSchema<UsersResponse> =
  usersResponseSchema;

export const getApiV2UsersShowManyResponseSchema: z.ZodSchema<UsersResponse> =
  usersResponseSchema;

export const getApiV2ViewsResponseSchema: z.ZodSchema<ViewsResponse> =
  viewsResponseSchema;

export const getApiV2ViewsByViewIdResponseSchema: z.ZodSchema<ViewResponse> =
  viewResponseSchema;

export const getApiV2ViewsByViewIdCountResponseSchema: z.ZodSchema<ViewCountResponse> =
  viewCountResponseSchema;

export const getApiV2ViewsByViewIdExecuteResponseSchema: z.ZodSchema<ViewResponse> =
  viewResponseSchema;

export const getApiV2ViewsByViewIdExportResponseSchema: z.ZodSchema<ViewExportResponse> =
  viewExportResponseSchema;

export const getApiV2ViewsByViewIdTicketsResponseSchema: z.ZodSchema<TicketsResponse> =
  ticketsResponseSchema;

export const getApiV2ViewsActiveResponseSchema: z.ZodSchema<ViewsResponse> =
  viewsResponseSchema;

export const getApiV2ViewsCompactResponseSchema: z.ZodSchema<ViewsResponse> =
  viewsResponseSchema;

export const getApiV2ViewsCountResponseSchema: z.ZodSchema<ViewsCountResponse> =
  viewsCountResponseSchema;

export const getApiV2ViewsCountManyResponseSchema: z.ZodSchema<ViewCountsResponse> =
  viewCountsResponseSchema;

export const getApiV2ViewsSearchResponseSchema: z.ZodSchema<ViewsResponse> =
  viewsResponseSchema;

export const getApiV2ViewsShowManyResponseSchema: z.ZodSchema<ViewsResponse> =
  viewsResponseSchema;

export const getApiV2WorkspacesResponseSchema: z.ZodSchema<WorkspaceResponse> =
  workspaceResponseSchema;

export const getApiV2WorkspacesByWorkspaceIdResponseSchema: z.ZodSchema<{
  workspace: WorkspaceObject;
}> = z.object({ workspace: workspaceObjectSchema });

export const postApiV2AnyChannelChannelbackReportErrorResponseSchema: z.ZodSchema<string> =
  z.string().describe("Empty response");

export const postApiV2AnyChannelPushResponseSchema: z.ZodSchema<ChannelFrameworkPushResultsResponse> =
  channelFrameworkPushResultsResponseSchema;

export const postApiV2AnyChannelValidateTokenResponseSchema: z.ZodSchema<string> =
  z.string().describe("Empty response");

export const postApiV2BookmarksResponseSchema: z.ZodSchema<BookmarkResponse> =
  bookmarkResponseSchema;

export const postApiV2ChannelsVoiceAgentsByAgentIdTicketsByTicketIdDisplayResponseSchema: z.ZodSchema<string> =
  z.string().describe("empty");

export const postApiV2ChannelsVoiceAgentsByAgentIdUsersByUserIdDisplayResponseSchema: z.ZodSchema<string> =
  z.string().describe("empty");

export const postApiV2CustomRolesResponseSchema: z.ZodSchema<CustomRoleResponse> =
  customRoleResponseSchema;

export const postApiV2GroupMembershipsCreateManyResponseSchema: z.ZodSchema<JobStatusResponse> =
  jobStatusResponseSchema;

export const postApiV2ImportsTicketsCreateManyResponseSchema: z.ZodSchema<JobStatusResponse> =
  jobStatusResponseSchema;

export const postApiV2MacrosResponseSchema: z.ZodSchema<{
  macro: MacroObject;
}> = z.object({ macro: macroObjectSchema });

export const postApiV2OrganizationMembershipsCreateManyResponseSchema: z.ZodSchema<JobStatusResponse> =
  jobStatusResponseSchema;

export const postApiV2OrganizationSubscriptionsResponseSchema: z.ZodSchema<OrganizationSubscriptionResponse> =
  organizationSubscriptionResponseSchema;

export const postApiV2OrganizationsCreateManyResponseSchema: z.ZodSchema<JobStatusResponse> =
  jobStatusResponseSchema;

export const postApiV2OrganizationsCreateOrUpdateResponseSchema: z.ZodSchema<OrganizationResponse> =
  organizationResponseSchema;

export const postApiV2ProblemsAutocompleteResponseSchema: z.ZodSchema<ListTicketProblemsResponse> =
  listTicketProblemsResponseSchema;

export const postApiV2PushNotificationDevicesDestroyManyResponseSchema: z.ZodSchema<string> =
  z.string().describe("empty");

export const postApiV2ResourceCollectionsResponseSchema: z.ZodSchema<JobStatusResponse> =
  jobStatusResponseSchema;

export const postApiV2RoutingAgentsByUserIdInstanceValuesResponseSchema: z.ZodSchema<SkillBasedRoutingAttributeValuesResponse> =
  skillBasedRoutingAttributeValuesResponseSchema;

export const postApiV2RoutingTicketsByTicketIdInstanceValuesResponseSchema: z.ZodSchema<SkillBasedRoutingAttributeValuesResponse> =
  skillBasedRoutingAttributeValuesResponseSchema;

export const postApiV2SuspendedTicketsAttachmentsResponseSchema: z.ZodSchema<SuspendedTicketsAttachmentsResponse> =
  suspendedTicketsAttachmentsResponseSchema;

export const postApiV2SuspendedTicketsExportResponseSchema: z.ZodSchema<SuspendedTicketsExportResponse> =
  suspendedTicketsExportResponseSchema;

export const postApiV2TicketFieldsByTicketFieldIdOptionsResponseSchema: z.ZodSchema<CustomFieldOptionResponse> =
  customFieldOptionResponseSchema;

export const postApiV2TicketFormsByTicketFormIdCloneResponseSchema: z.ZodSchema<TicketFormResponse> =
  ticketFormResponseSchema;

export const postApiV2TicketsByTicketIdMergeResponseSchema: z.ZodSchema<JobStatusResponse> =
  jobStatusResponseSchema;

export const postApiV2TicketsByTicketIdSatisfactionRatingResponseSchema: z.ZodSchema<SatisfactionRatingResponse> =
  satisfactionRatingResponseSchema;

export const postApiV2TicketsCreateManyResponseSchema: z.ZodSchema<JobStatusResponse> =
  jobStatusResponseSchema;

export const postApiV2TriggerCategoriesResponseSchema: z.ZodSchema<TriggerCategoryResponse> =
  triggerCategoryResponseSchema;

export const postApiV2TriggerCategoriesJobsResponseSchema: z.ZodSchema<BatchJobResponse> =
  batchJobResponseSchema;

export const postApiV2UserFieldsByUserFieldIdOptionsResponseSchema: z.ZodSchema<CustomFieldOptionResponse> =
  customFieldOptionResponseSchema;

export const postApiV2UsersByUserIdPasswordResponseSchema: z.ZodSchema<string> =
  z.string().describe("Empty response");

export const postApiV2UsersCreateManyResponseSchema: z.ZodSchema<JobStatusResponse> =
  jobStatusResponseSchema;

export const postApiV2UsersCreateOrUpdateResponseSchema: z.ZodSchema<UserResponse> =
  userResponseSchema;

export const postApiV2UsersCreateOrUpdateManyResponseSchema: z.ZodSchema<JobStatusResponse> =
  jobStatusResponseSchema;

export const postApiV2UsersRequestCreateResponseSchema: z.ZodSchema<string> = z
  .string()
  .describe("Empty response");

export const postApiV2ViewsResponseSchema: z.ZodSchema<ViewResponse> =
  viewResponseSchema;

export const postApiV2ViewsPreviewResponseSchema: z.ZodSchema<ViewResponse> =
  viewResponseSchema;

export const postApiV2ViewsPreviewCountResponseSchema: z.ZodSchema<ViewCountResponse> =
  viewCountResponseSchema;

export const putApiV2AccountSettingsResponseSchema: z.ZodSchema<AccountSettingsResponse> =
  accountSettingsResponseSchema;

export const putApiV2AttachmentsByAttachmentIdResponseSchema: z.ZodSchema<AttachmentResponse> =
  attachmentResponseSchema;

export const putApiV2AutomationsByAutomationIdResponseSchema: z.ZodSchema<AutomationResponse> =
  automationResponseSchema;

export const putApiV2AutomationsUpdateManyResponseSchema: z.ZodSchema<AutomationsResponse> =
  automationsResponseSchema;

export const putApiV2BrandsByBrandIdResponseSchema: z.ZodSchema<BrandResponse> =
  brandResponseSchema;

export const putApiV2ChatFileRedactionsByTicketIdResponseSchema: z.ZodSchema<TicketChatCommentRedactionResponse> =
  ticketChatCommentRedactionResponseSchema;

export const putApiV2ChatRedactionsByTicketIdResponseSchema: z.ZodSchema<TicketChatCommentRedactionResponse> =
  ticketChatCommentRedactionResponseSchema;

export const putApiV2CommentRedactionsByTicketCommentIdResponseSchema: z.ZodSchema<TicketCommentResponse> =
  ticketCommentResponseSchema;

export const putApiV2CustomObjectsByCustomObjectKeyFieldsReorderResponseSchema: z.ZodSchema<string> =
  z.string().describe("Empty response");

export const putApiV2CustomRolesByCustomRoleIdResponseSchema: z.ZodSchema<CustomRoleResponse> =
  customRoleResponseSchema;

export const putApiV2CustomStatusDefaultResponseSchema: z.ZodSchema<BulkUpdateDefaultCustomStatusResponse> =
  bulkUpdateDefaultCustomStatusResponseSchema;

export const putApiV2CustomStatusesByCustomStatusIdResponseSchema: z.ZodSchema<CustomStatusResponse> =
  customStatusResponseSchema;

export const putApiV2DeletedTicketsByTicketIdRestoreResponseSchema: z.ZodSchema<string> =
  z.string().describe("Empty response");

export const putApiV2DeletedTicketsRestoreManyResponseSchema: z.ZodSchema<string> =
  z.string().describe("Empty response");

export const putApiV2DynamicContentItemsByDynamicContentItemIdResponseSchema: z.ZodSchema<DynamicContentResponse> =
  dynamicContentResponseSchema;

export const putApiV2DynamicContentItemsByDynamicContentItemIdVariantsByDynammicContentVariantIdResponseSchema: z.ZodSchema<DynamicContentVariantResponse> =
  dynamicContentVariantResponseSchema;

export const putApiV2DynamicContentItemsByDynamicContentItemIdVariantsUpdateManyResponseSchema: z.ZodSchema<DynamicContentVariantsResponse> =
  dynamicContentVariantsResponseSchema;

export const putApiV2GroupSlasPoliciesByGroupSlaPolicyIdResponseSchema: z.ZodSchema<GroupSLAPolicyResponse> =
  groupSlaPolicyResponseSchema;

export const putApiV2GroupSlasPoliciesReorderResponseSchema: z.ZodSchema<string> =
  z.string().describe("Empty response");

export const putApiV2GroupsByGroupIdResponseSchema: z.ZodSchema<GroupResponse> =
  groupResponseSchema;

export const putApiV2MacrosByMacroIdResponseSchema: z.ZodSchema<{
  macro: MacroObject;
}> = z.object({ macro: macroObjectSchema });

export const putApiV2MacrosUpdateManyResponseSchema: z.ZodSchema<MacrosResponse> =
  macrosResponseSchema;

export const putApiV2OrganizationFieldsByOrganizationFieldIdResponseSchema: z.ZodSchema<OrganizationFieldResponse> =
  organizationFieldResponseSchema;

export const putApiV2OrganizationFieldsReorderResponseSchema: z.ZodSchema<string> =
  z.string().describe("Empty response");

export const putApiV2OrganizationsByOrganizationIdResponseSchema: z.ZodSchema<OrganizationResponse> =
  organizationResponseSchema;

export const putApiV2OrganizationsUpdateManyResponseSchema: z.ZodSchema<JobStatusResponse> =
  jobStatusResponseSchema;

export const putApiV2QueuesByQueueIdResponseSchema: z.ZodSchema<QueueResponse> =
  queueResponseSchema;

export const putApiV2RecipientAddressesBySupportAddressIdResponseSchema: z.ZodSchema<SupportAddressResponse> =
  supportAddressResponseSchema;

export const putApiV2RecipientAddressesBySupportAddressIdVerifyResponseSchema: z.ZodSchema<string> =
  z.string().describe("Empty response");

export const putApiV2RequestsByRequestIdResponseSchema: z.ZodSchema<RequestResponse> =
  requestResponseSchema;

export const putApiV2ResourceCollectionsByResourceCollectionIdResponseSchema: z.ZodSchema<JobStatusResponse> =
  jobStatusResponseSchema;

export const putApiV2RoutingAttributesByAttributeIdResponseSchema: z.ZodSchema<SkillBasedRoutingAttributeResponse> =
  skillBasedRoutingAttributeResponseSchema;

export const putApiV2SharingAgreementsBySharingAgreementIdResponseSchema: z.ZodSchema<SharingAgreementResponse> =
  sharingAgreementResponseSchema;

export const putApiV2SlasPoliciesBySlaPolicyIdResponseSchema: z.ZodSchema<SLAPolicyResponse> =
  slaPolicyResponseSchema;

export const putApiV2SlasPoliciesReorderResponseSchema: z.ZodSchema<string> = z
  .string()
  .describe("Empty response");

export const putApiV2SuspendedTicketsByIdRecoverResponseSchema: z.ZodSchema<RecoverSuspendedTicketResponse> =
  recoverSuspendedTicketResponseSchema;

export const putApiV2SuspendedTicketsRecoverManyResponseSchema: z.ZodSchema<RecoverSuspendedTicketsResponse> =
  recoverSuspendedTicketsResponseSchema;

export const putApiV2TargetsByTargetIdResponseSchema: z.ZodSchema<TargetResponse> =
  targetResponseSchema;

export const putApiV2TicketFieldsByTicketFieldIdResponseSchema: z.ZodSchema<TicketFieldResponse> =
  ticketFieldResponseSchema;

export const putApiV2TicketFormsByTicketFormIdResponseSchema: z.ZodSchema<TicketFormResponse> =
  ticketFormResponseSchema;

export const putApiV2TicketFormsReorderResponseSchema: z.ZodSchema<TicketFormsResponse> =
  ticketFormsResponseSchema;

export const putApiV2TicketsByTicketIdResponseSchema: z.ZodSchema<TicketUpdateResponse> =
  ticketUpdateResponseSchema;

export const putApiV2TicketsByTicketIdAuditsByTicketAuditIdMakePrivateResponseSchema: z.ZodSchema<string> =
  z.string().describe("Empty response");

export const putApiV2TicketsByTicketIdCommentsByCommentIdAttachmentsByAttachmentIdRedactResponseSchema: z.ZodSchema<AttachmentResponse> =
  attachmentResponseSchema;

export const putApiV2TicketsByTicketIdCommentsByTicketCommentIdMakePrivateResponseSchema: z.ZodSchema<string> =
  z.string().describe("Empty response");

export const putApiV2TicketsByTicketIdCommentsByTicketCommentIdRedactResponseSchema: z.ZodSchema<TicketCommentResponse> =
  ticketCommentResponseSchema;

export const putApiV2TicketsByTicketIdMarkAsSpamResponseSchema: z.ZodSchema<string> =
  z.string();

export const putApiV2TicketsByTicketIdTagsResponseSchema: z.ZodSchema<TagsByObjectIdResponse> =
  tagsByObjectIdResponseSchema;

export const putApiV2TicketsMarkManyAsSpamResponseSchema: z.ZodSchema<JobStatusResponse> =
  jobStatusResponseSchema;

export const putApiV2TicketsUpdateManyResponseSchema: z.ZodSchema<JobStatusResponse> =
  jobStatusResponseSchema;

export const putApiV2TriggersByTriggerIdResponseSchema: z.ZodSchema<TriggerResponse> =
  triggerResponseSchema;

export const putApiV2TriggersReorderResponseSchema: z.ZodSchema<TriggerResponse> =
  triggerResponseSchema;

export const putApiV2TriggersUpdateManyResponseSchema: z.ZodSchema<TriggersResponse> =
  triggersResponseSchema;

export const putApiV2UserFieldsByUserFieldIdResponseSchema: z.ZodSchema<UserFieldResponse> =
  userFieldResponseSchema;

export const putApiV2UserFieldsReorderResponseSchema: z.ZodSchema<string> = z
  .string()
  .describe("Empty response");

export const putApiV2UsersByUserIdResponseSchema: z.ZodSchema<UserResponse> =
  userResponseSchema;

export const putApiV2UsersByUserIdGroupMembershipsByGroupMembershipIdMakeDefaultResponseSchema: z.ZodSchema<GroupMembershipsResponse> =
  groupMembershipsResponseSchema;

export const putApiV2UsersByUserIdIdentitiesByUserIdentityIdResponseSchema: z.ZodSchema<UserIdentityResponse> =
  userIdentityResponseSchema;

export const putApiV2UsersByUserIdIdentitiesByUserIdentityIdMakePrimaryResponseSchema: z.ZodSchema<UserIdentitiesResponse> =
  userIdentitiesResponseSchema;

export const putApiV2UsersByUserIdIdentitiesByUserIdentityIdRequestVerificationResponseSchema: z.ZodSchema<string> =
  z.string().describe("Empty response");

export const putApiV2UsersByUserIdIdentitiesByUserIdentityIdVerifyResponseSchema: z.ZodSchema<UserIdentityResponse> =
  userIdentityResponseSchema;

export const putApiV2UsersByUserIdMergeResponseSchema: z.ZodSchema<UserResponse> =
  userResponseSchema;

export const putApiV2UsersByUserIdOrganizationMembershipsByOrganizationMembershipIdMakeDefaultResponseSchema: z.ZodSchema<OrganizationMembershipsResponse> =
  organizationMembershipsResponseSchema;

export const putApiV2UsersByUserIdOrganizationsByOrganizationIdMakeDefaultResponseSchema: z.ZodSchema<OrganizationMembershipResponse> =
  organizationMembershipResponseSchema;

export const putApiV2UsersByUserIdPasswordResponseSchema: z.ZodSchema<string> =
  z.string().describe("Empty response");

export const putApiV2UsersUpdateManyResponseSchema: z.ZodSchema<JobStatusResponse> =
  jobStatusResponseSchema;

export const putApiV2ViewsByViewIdResponseSchema: z.ZodSchema<ViewResponse> =
  viewResponseSchema;

export const putApiV2ViewsUpdateManyResponseSchema: z.ZodSchema<ViewsResponse> =
  viewsResponseSchema;

export const putApiV2WorkspacesByWorkspaceIdResponseSchema: z.ZodSchema<{
  workspace: WorkspaceObject;
}> = z.object({ workspace: workspaceObjectSchema });

export const putApiV2WorkspacesReorderResponseSchema: z.ZodSchema<string> = z
  .string()
  .describe("Empty response");

export const deleteApiV2DeletedTicketsByTicketIdResponseSchema: z.ZodSchema<JobStatusResponse> =
  jobStatusResponseSchema;

export const deleteApiV2DeletedTicketsDestroyManyResponseSchema: z.ZodSchema<JobStatusResponse> =
  jobStatusResponseSchema;

export const deleteApiV2DeletedUsersByDeletedUserIdResponseSchema: z.ZodSchema<DeletedUserResponse> =
  deletedUserResponseSchema;

export const deleteApiV2GroupMembershipsDestroyManyResponseSchema: z.ZodSchema<JobStatusResponse> =
  jobStatusResponseSchema;

export const deleteApiV2OrganizationMembershipsDestroyManyResponseSchema: z.ZodSchema<JobStatusResponse> =
  jobStatusResponseSchema;

export const deleteApiV2OrganizationsDestroyManyResponseSchema: z.ZodSchema<JobStatusResponse> =
  jobStatusResponseSchema;

export const deleteApiV2ResourceCollectionsByResourceCollectionIdResponseSchema: z.ZodSchema<JobStatusResponse> =
  jobStatusResponseSchema;

export const deleteApiV2TicketsDestroyManyResponseSchema: z.ZodSchema<JobStatusResponse> =
  jobStatusResponseSchema;

export const deleteApiV2UsersByUserIdResponseSchema: z.ZodSchema<UserResponse> =
  userResponseSchema;

export const deleteApiV2UsersDestroyManyResponseSchema: z.ZodSchema<JobStatusResponse> =
  jobStatusResponseSchema;

export const deleteApiV2WorkspacesDestroyManyResponseSchema: z.ZodSchema<string> =
  z.string().describe("Empty response");
