import { useTranslations } from "next-intl";

export default function Login() {
  const t = useTranslations("login");

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-3xl font-bold">{t("title")}</h2>
      <p className="text-lg text-gray-500 mt-2">{t("description")}</p>
    </div>
  );
}
