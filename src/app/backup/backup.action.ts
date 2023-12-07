'use server'
import { saveClusterToYaml } from "@/utils/backup";

export async function backupHandler() {
  saveClusterToYaml();
}