
type FollowUpPlatform = 'facebook' | 'twitter' | 'linkedin' | 'instagram' | 'dribbble' | 'behance';

export const FollowUpLinks: Record<FollowUpPlatform, { url: string; displayName: string }> = {
  facebook: {
    url: '',
    displayName: 'Facebook',
  },
  twitter: {
    url: '',
    displayName: 'Twitter',
  },
  linkedin: {
    url: 'https://www.linkedin.com/company/karm-creative-labs/',
    displayName: 'LinkedIn',
  },
  instagram: {
    url: 'https://www.instagram.com/karmcreativelabs/',
    displayName: 'Instagram',
  },
  dribbble: {
    url: '',
    displayName: 'Dribbble',
  },
  behance: {
    url: '',
    displayName: 'Behance',
  },
}