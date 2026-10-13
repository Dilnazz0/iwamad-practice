# Week 5 - Handoff Notes

Routes (from prototype, planned for SIS 2):
- Home → /
- Posts → /posts
- Single post → /posts/:id
- 404 → *
- Header: Home, Contact, Posts

Components → React files:
- PostCard → src/components/PostCard.tsx
- Button → src/components/ui/Button.tsx
- Tag → src/components/ui/Tag.tsx

Button variants → prop:
- variant = primary | secondary

PostCard layout:
- direction: vertical
- gap: 12px
- padding: 16px horizontal, 17px vertical
- radius: 8px
- border: 1px, color/border
- background: color/surface

Button:
- radius: 5px
- font: Inter 12px

Typography (Inter):
- title: 20px, regular (400)
- date: 14px, regular (400)
- button: 12px, regular (400)

Breakpoint change:
- phone: 1 column, header stacked
- desktop: 3 columns, header in one row
- gap between cards: 24px
- breakpoint: 640px

Tokens (all ten):
- color/primary = #1D4ED8
- color/on-primary = #FFFFFF
- color/text = #1F2937
- color/text-muted = #9CA3AF
- color/surface = #FFFFFF
- color/border = #D1D5DB
- space/2 = 8px
- space/4 = 16px
- space/6 = 24px
- radius/md = 8px

Contrast issue:
- color/text-muted = #9CA3AF fails 4.5:1 on white
- Need darker value; note old → new ratios in PR