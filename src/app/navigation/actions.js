export const NAVIGATE_TO_MAIN_SECTION = 'NAVIGATE_TO_MAIN_SECTION'

export const navigateToMainSection = sectionName => ({
  type: NAVIGATE_TO_MAIN_SECTION,
  navigateTo: sectionName
})
