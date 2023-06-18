export default function ErrorMsg({ children }: { children: string }) {
  return (
    <span className="text-xs text-red-500 dark:text-red-500">{children}</span>
  );
}
