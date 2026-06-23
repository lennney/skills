# Acceptance Criteria Examples

## Example 1: Given/When/Then Format

```markdown
# Acceptance Criteria: CT.ALERT.EXPIRY.1

**Requirement:** The system shall send an email alert to the responsible
lab technician when a chemical is 30 days from expiration.

---

**AC-1:** Given a chemical with an expiration date exactly 30 days from today,
and a lab technician is assigned to the chemical's storage location,
When the daily alert batch job runs at 6:00 AM,
Then an email is sent to the assigned technician containing:
chemical name, CAS number, storage location, and expiration date.

**AC-2:** Given a chemical with an expiration date exactly 30 days from today,
and no lab technician is assigned to that storage location,
When the daily alert batch job runs,
Then an email is sent to the lab manager for that department.

**AC-3:** Given a chemical with status "Disposed,"
and the expiration date is exactly 30 days from today,
When the daily alert batch job runs,
Then no alert email is generated for that chemical.

**AC-4:** Given a chemical with an expiration date 31 days from today,
When the daily alert batch job runs,
Then no alert email is generated for that chemical (boundary: not yet at 30 days).

**AC-5:** Given a chemical with an expiration date 29 days from today,
and no 30-day alert was previously sent (e.g., chemical was just added),
When the daily alert batch job runs,
Then an alert email is generated (past the 30-day mark but still pre-expiration).
```

**Why this works:**
- Covers the happy path (AC-1)
- Covers the fallback path (AC-2)
- Covers a negative case (AC-3 -- disposed chemicals)
- Covers boundary conditions (AC-4 at 31 days, AC-5 at 29 days)
- Each criterion is independently testable

---

## Example 2: Checklist Format

```markdown
# Acceptance Criteria: CT.CATALOG.SEARCH.1

**Requirement:** The system shall allow the user to search for chemicals
by name, CAS number, location, or expiration date range.

---

- [ ] Partial chemical name search returns all records containing the
      search term (case-insensitive)
- [ ] Exact CAS number search returns the matching record
- [ ] Storage location search returns all chemicals at that location
- [ ] Date range search returns chemicals expiring within the specified range
- [ ] Combining multiple search criteria uses AND logic (narrows results)
- [ ] Search with no matching results displays "No chemicals found"
- [ ] Search results include: name, CAS number, quantity, location,
      expiration date
- [ ] Results display within 2 seconds for 50,000 records with 50 users
- [ ] Empty search input (no criteria) is rejected with validation message
```

---

## Example 3: Rule-Based Format

```markdown
# Acceptance Criteria: BR-002 (Volume Discount)

**Requirement:** Volume discount is calculated per-SKU based on order quantity.

---

**Rule:** Discount tiers apply to per-SKU quantity, not total order quantity.

| SKU-A Qty | SKU-B Qty | SKU-A Discount | SKU-B Discount |
|-----------|-----------|---------------|---------------|
| 50        | 0         | 0%            | N/A           |
| 100       | 0         | 5%            | N/A           |
| 50        | 150       | 0%            | 5%            |
| 500       | 500       | 10%           | 10%           |
| 1000      | 99        | 15%           | 0%            |

**Rule:** Discount applies to pre-tax unit price.
- Example: 200 units at $10.00/unit with 5% discount =
  200 * $10.00 * 0.95 = $1,900.00

**Rule:** Discount is recalculated when order quantity changes.
- Example: Customer adds 50 more units of SKU-A (from 80 to 130),
  pushing past the 100-unit threshold. Discount changes from 0% to 5%
  on all 130 units.
```

**Why this works:**
- Table format makes boundary conditions obvious (99 vs 100, 499 vs 500)
- Examples show the actual calculation, not just the rule text
- Covers the dynamic recalculation scenario
