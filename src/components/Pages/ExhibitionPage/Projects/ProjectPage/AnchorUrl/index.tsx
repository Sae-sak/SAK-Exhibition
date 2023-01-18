export default function AnchorUrl({content}) {
  const anchor = content.split("\n").filter((text: string) => {
    if (text.slice(0, 2) === "# ") {
      return text;
    }
  });
  const anchorUrls = anchor.map((text: string) => text.slice(2));

  return (
    <div className="bg-red-200 ">
      {anchorUrls.map((urls: string, indx: number) => {
        return (
          <a href={`#${urls.replaceAll(" ", "-")}`} key={urls + indx}>
            {urls}
          </a>
        );
      })}
    </div>
  );
}
