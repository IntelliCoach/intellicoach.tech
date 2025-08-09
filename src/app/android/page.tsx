import { ANDROID_LINK } from "@/lib/links";
import { redirect } from "next/navigation";

export default function iOSLink() {
  redirect(ANDROID_LINK);
}
