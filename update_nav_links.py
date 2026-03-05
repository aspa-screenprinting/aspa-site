#!/usr/bin/env python3
"""
Script to add ASPA+ nav links and CSS to all HTML files in ASPA Site directory.
Skips discounts.html and education.html (they already have the links).
"""

import os
import re
from pathlib import Path

# Directory containing HTML files
SITE_DIR = "/sessions/amazing-dazzling-euler/mnt/ASPA Site/"

# Files to skip
SKIP_FILES = {"discounts.html", "education.html"}

# CSS to add (before closing </style> tag)
CSS_TO_ADD = """        .nav-aspa-plus {
            background: linear-gradient(135deg, #00d4ff 0%, #e91e8c 50%, #ffd400 100%) !important;
            -webkit-background-clip: text !important;
            -webkit-text-fill-color: transparent !important;
            background-clip: text !important;
            font-weight: 600 !important;
        }
        .nav-aspa-plus sup {
            font-size: 0.6em;
            -webkit-text-fill-color: #ffd400;
        }
        .nav-aspa-plus:hover {
            filter: brightness(1.3);
        }
"""

# HTML to add (the two new nav items)
NAV_ITEMS_TO_ADD = """<li><a href="discounts.html" class="nav-aspa-plus">Discounts<sup>+</sup></a></li>
                <li><a href="education.html" class="nav-aspa-plus">Education<sup>+</sup></a></li>"""

def add_css_to_file(filepath):
    """Add CSS block before closing </style> tag if not already present."""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Check if nav-aspa-plus CSS already exists
    if ".nav-aspa-plus" in content:
        print(f"  ✓ CSS already present in {filepath.name}")
        return False

    # Find the closing </style> tag
    if "</style>" not in content:
        print(f"  ✗ No </style> tag found in {filepath.name}")
        return False

    # Insert CSS before </style>
    content = content.replace("</style>", f"{CSS_TO_ADD}\n    </style>")

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f"  ✓ CSS added to {filepath.name}")
    return True

def add_nav_items_to_file(filepath):
    """Add nav items after Resources link if not already present."""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Check if nav items already exist
    if "Discounts<sup>+</sup>" in content:
        print(f"  ✓ Nav items already present in {filepath.name}")
        return False

    # Find the nav-links ul
    if 'class="nav-links"' not in content:
        print(f"  ✗ No nav-links found in {filepath.name}")
        return False

    # Pattern: Resources link followed by </ul>
    # This regex looks for: <li><a href="resources.html">Resources</a></li>
    # followed by optional whitespace and </ul>
    pattern = r'(<li><a[^>]*href="resources\.html"[^>]*>Resources</a></li>)'

    if not re.search(pattern, content):
        print(f"  ✗ Could not find Resources link pattern in {filepath.name}")
        return False

    # Replace: add the new items after Resources link
    # This adds them right after the Resources </li> tag
    replacement = r'\1\n                ' + NAV_ITEMS_TO_ADD
    content = re.sub(pattern, replacement, content)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f"  ✓ Nav items added to {filepath.name}")
    return True

def process_html_files():
    """Process all HTML files in the site directory."""
    site_path = Path(SITE_DIR)

    if not site_path.exists():
        print(f"✗ Directory not found: {SITE_DIR}")
        return

    # Find all HTML files
    html_files = sorted(site_path.glob("*.html"))

    if not html_files:
        print(f"✗ No HTML files found in {SITE_DIR}")
        return

    print(f"\nFound {len(html_files)} HTML files\n")

    css_count = 0
    nav_count = 0

    for filepath in html_files:
        filename = filepath.name

        # Skip the files that already have the links
        if filename in SKIP_FILES:
            print(f"⊘ Skipping {filename} (already updated)")
            continue

        print(f"\n📄 Processing {filename}:")

        # Add CSS
        if add_css_to_file(filepath):
            css_count += 1

        # Add nav items
        if add_nav_items_to_file(filepath):
            nav_count += 1

    print(f"\n{'='*60}")
    print(f"✓ CSS blocks added to {css_count} files")
    print(f"✓ Nav items added to {nav_count} files")
    print(f"✓ Skipped 2 files (discounts.html, education.html)")
    print(f"{'='*60}\n")

if __name__ == "__main__":
    process_html_files()
