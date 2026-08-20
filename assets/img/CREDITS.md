# Image credits — TEMPORARY STOCK PHOTOS

**These are placeholder stock photos, not photos of Women's Bright Beauty Parlour and Gym.**
Replace every one of them with real photos of the parlour and of her own work when available.
The interior shots in particular show *somebody else's salon* — those are the most important
to replace, because visitors will reasonably assume they are the actual premises.

All images are from [Unsplash](https://unsplash.com) under the
[Unsplash License](https://unsplash.com/license): free to use, including commercially,
with no attribution required (credit is appreciated, so it is recorded here).

| File | Used for | Unsplash photo ID |
|------|----------|-------------------|
| `about-interior.webp` | About section portrait | `photo-1746723378067-83a345ff3160` |
| `bridal.webp` | Gallery — bridal | `photo-1610047614301-13c63f00c032` |
| `facial.webp` | Gallery — facial | `photo-1570172619644-dfd03ed5d881` |
| `hair-colour.webp` | Gallery — hair | `photo-1695527081848-1e46c06e6458` |
| `interior-wide.webp` | Gallery — interior (wide) | `photo-1706629505300-168aa1604912` |
| `mehndi.webp` | Gallery — mehndi | `photo-1623217509141-6f735087b50c` |
| `gym.webp` | Gallery — gym (equipment) | `photo-1758448756350-3d0eec02ba37` |
| `party.webp` | Services — Party Make-up | `photo-1709477542170-f11ee7d471a0` |
| `fair-polish.webp` | Services — Fair Polish | `photo-1555820585-c5ae44394b79` |
| `brows.webp` | Services — Eyebrows & Others | `photo-1674049406179-d7bf2c263e71` |
| `special-facial.webp` | Services — Special Facial | `photo-1648203276014-20f97ba1f817` |
| `straightening.webp` | Services — Straightening & Styling | `photo-1712641967071-b011e33a70f4` |
| `haircut.webp` | Services — Hair Cut | `photo-1628292180187-3bac5c5b3cb6` |
| `handfoot.webp` | Services — Hand & Foot Care | `photo-1659391542239-9648f307c0b1` |
| `massage.webp` | Services — Body Massage | `photo-1639162906614-0603b0ae95fd` |

*(The Services categories also reuse `facial.webp` and `hair-colour.webp` from the gallery.)*

## The owner's certificates (`assets/certs/`)

Real professional certificates of the owner, **Nasrin Akter** — not stock. Shown in the
About section. On the Bangladesh Technical Education Board certificate (`cert-bteb.webp`)
the SL number, registration number and parents' names were **whited-out for privacy** (matched
to the paper colour) before publishing; the qualification, her name and photo are kept.

## Not stock — the owner's own posters

The images in `assets/menu/` are the parlour's **own Bangla price posters** (supplied by the owner),
not stock. They are the real menu and do **not** need replacing. Source files were the owner's
WhatsApp images; optimised to WebP at 1000px wide.

### Choices worth keeping in mind when you replace these

- The **gym** image deliberately shows *equipment only, no people*. A stock photo of a
  Western woman in a sports bra sat badly with a women-only gym in Mirpur. If you shoot a
  real photo, the same consideration applies — think about what members are comfortable with.
- **The gym photo is the highest priority to replace.** It shows a bright, upmarket space with
  a city skyline. It is warm and on-palette, but it will set a higher expectation than a
  2nd-floor gym in Shewrapara is likely to meet. A plain, honest photo of the real machines
  will serve her better than an aspirational stock one — a member who joins expecting *that*
  and walks into the real room is a member who feels misled.
- The **bridal** and **mehndi** images were chosen as South Asian rather than generic Western
  stock, so the site looks like it belongs in Dhaka.
- Every image was checked for **other companies' branding**. One otherwise-good salon photo was
  rejected because it had "KEVIN.MURPHY" signage on the wall — putting a rival brand's name on
  your site implies a stockist deal that doesn't exist. Check for this in any photo you add.

View any original at `https://unsplash.com/photos/<photo-id>`.

## Replacing an image

Drop the new file in this folder and point the `src` at it in `index.html`. Keep the
`width`/`height` attributes matching the real pixel size of the new image — they reserve
the space so the page doesn't jump around while loading.

Recommended: export as WebP, under ~150 KB each, at roughly these sizes:

- About portrait — 640x800 (4:5)
- Gallery tall (bridal) — 560x746 (3:4)
- Gallery standard — 600x450 (4:3)
- Gallery wide (interior) — 1000x750 (4:3)
