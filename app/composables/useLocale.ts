export function useLocale() {
  const locale = useState<"en" | "jp">(
    "locale",
    () => "en"
  )

  function toggle() {
    locale.value =
      locale.value === "en"
        ? "jp"
        : "en"
  }

  return {
    locale,
    toggle
  }
}