'use server'
import { saveClusterToSingleYaml, saveClusterToYaml } from "@/utils/backup";

export async function backupHandler() {
  // saveClusterToYaml();
  saveClusterToSingleYaml();
}