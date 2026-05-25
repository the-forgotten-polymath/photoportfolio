import asyncio
from playwright.async_api import async_playwright
from bs4 import BeautifulSoup

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()
        url = "https://photoklickerphotography.com"
        print(f"Navigating to {url} ...")
        try:
            await page.goto(url, wait_until="networkidle", timeout=60000)
        except Exception as e:
            print(f"Error navigating: {e}")
        
        # Give it a bit more time to render animations or lazy loaded content
        await page.wait_for_timeout(5000)
        
        # Scroll to bottom to trigger lazy loading
        await page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
        await page.wait_for_timeout(3000)
        
        html = await page.content()
        await browser.close()
        
        soup = BeautifulSoup(html, "html.parser")
        
        # Architecture details
        output = []
        output.append(f"# Architecture & Data of {url}\n")
        
        output.append("## SEO Metadata")
        title = soup.title.string if soup.title else "No title"
        output.append(f"- **Title**: {title}")
        
        meta_desc = soup.find("meta", {"name": "description"})
        desc = meta_desc["content"] if meta_desc else "No description"
        output.append(f"- **Description**: {desc}")
        
        meta_keywords = soup.find("meta", {"name": "keywords"})
        keywords = meta_keywords["content"] if meta_keywords else "No keywords"
        output.append(f"- **Keywords**: {keywords}\n")
        
        # DOM Architecture
        output.append("## DOM Architecture Breakdown (Direct children of body and their direct children)")
        body = soup.body
        if body:
            # We don't assume id="root" anymore since this might not be React
            for child in body.find_all(recursive=False):
                tag = child.name
                if not tag:
                    continue
                classes = ".".join(child.get('class', []))
                id_attr = f"#{child.get('id')}" if child.get('id') else ""
                output.append(f"- `<{tag}{id_attr} class=\"{classes}\">`")
                for subchild in child.find_all(recursive=False):
                    stag = subchild.name
                    if not stag:
                        continue
                    sclasses = ".".join(subchild.get('class', []))
                    sid_attr = f"#{subchild.get('id')}" if subchild.get('id') else ""
                    output.append(f"  - `<{stag}{sid_attr} class=\"{sclasses}\">`")
        else:
            output.append("No body element found.")
                
        output.append("\n## All Text Content")
        # Extract headings and paragraphs
        for tag in ["h1", "h2", "h3", "h4", "h5", "h6", "p", "span", "a", "button", "li"]:
            elements = soup.find_all(tag)
            if elements:
                output.append(f"### <{tag}> tags")
                for i, el in enumerate(elements):
                    text = el.get_text(strip=True)
                    if text:
                        output.append(f"{i+1}. {text}")
                output.append("")
        
        output.append("\n## Images")
        images = soup.find_all("img")
        for i, img in enumerate(images):
            src = img.get("src", "No src")
            alt = img.get("alt", "No alt")
            classes = " ".join(img.get("class", []))
            output.append(f"### Image {i+1}")
            output.append(f"- **Source**: {src}")
            output.append(f"- **Alt**: {alt}")
            output.append(f"- **Classes**: {classes}")
            output.append("")

        output_file = "/Users/geu/Desktop/PHOTOGRAPHER/photoklicker_data.md"
        with open(output_file, "w", encoding="utf-8") as f:
            f.write("\n".join(output))
            
        print(f"Scraping completed. Results saved to {output_file}")

if __name__ == "__main__":
    asyncio.run(run())
