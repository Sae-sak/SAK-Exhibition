export default function KGULinks() {
  return (
    <p className="gap-4 text-xs text-gray-500 dark:text-gray-300  row-center sm:text-left">
      <a
        href={"http://www.kyonggi.ac.kr/KyonggiUp.kgu"}
        className="text-gray-500 dark:text-gray-300"
        target="_blank"
        rel="noreferrer"
      >
        KGU
      </a>
      <a
        href={"https://kutis.kyonggi.ac.kr/webkutis/view/indexWeb.jsp"}
        className="text-gray-500 dark:text-gray-300"
        target="_blank"
        rel="noreferrer"
      >
        KUTIS
      </a>
      <a
        href={"https://lms.kyonggi.ac.kr/"}
        className="text-gray-500 dark:text-gray-300"
        target="_blank"
        rel="noreferrer"
      >
        LMS
      </a>
    </p>
  );
}
