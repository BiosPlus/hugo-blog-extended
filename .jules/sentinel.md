## 2024-06-17 - [Attribute Injection via safeHTML]
**Vulnerability:** The `layouts/partials/meta/post.html` partial rendered `<meta property="og:article:published_time" content={{ $ISO_date | safeHTML }} />` where the `content` attribute was unquoted and `safeHTML` disabled Go's automatic contextual escaping. This allowed for potential attribute injection/XSS if `$ISO_date` contained arbitrary input.
**Learning:** Never use `safeHTML` to render variables directly into unquoted HTML attributes, as it bypasses Go's built-in, context-aware HTML sanitization and opens the door to attribute injection.
**Prevention:** Let Hugo/Go's template engine handle escaping by removing `| safeHTML` for standard values, and always enclose HTML attributes in quotation marks (e.g., `content="{{ $value }}"`).
