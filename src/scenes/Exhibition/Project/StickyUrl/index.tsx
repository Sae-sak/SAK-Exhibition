import ShareButton from "@components/ShareButton";

export default function StickyUrl() {
  return (
    <div className="gap-12 p-3 row-center border-y">
      <a href="#comment">
        <div className="w-16 h-16 col-center">
          <i className="text-3xl ri-edit-2-line"></i>
        </div>
      </a>
      <ShareButton company="CopyLink" />
    </div>
  );
}
