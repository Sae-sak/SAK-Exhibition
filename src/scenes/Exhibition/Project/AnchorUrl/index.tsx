export default function AnchorUrl({ content }) {
  // "# " 가 앞에 붙은 텍스트만 필터링
  const anchor = content.split("\n").filter((text: string) => {
    if (text.slice(0, 2) === "# ") {
      return text;
    }
  });

  // "# " 삭제
  const anchorUrls = anchor.map((text: string) => text.slice(2));

  return (
    <div className="text-sm border-t col-start">
      <div className="gap-3 p-3 col-start">
        {anchorUrls.map((urls: string, indx: number) => {
          return (
            <a
              href={`#${urls.replaceAll(" ", "-")}`}
              key={urls + indx}
              className=""
            >
              - {urls}
            </a>
          );
        })}
      </div>
    </div>
  );
}
