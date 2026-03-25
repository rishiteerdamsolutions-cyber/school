export type CrmLead = {
  id: string;
  parentName: string;
  phone: string;
  email: string;
  grade: string;
  message: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  themeId: string;
  status: string;
  notes: string;
  followUpStatus: string | null;
  followUpSentAt: string | null;
  followUpError: string | null;
  createdAt: string | null;
};
