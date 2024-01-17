import Image from "next/image";
import * as cron from 'node-cron';
import { startChronJobs } from "@/services/autobackup";
import { TimeIntervalsObject } from "@/services/autobackup";



export default function Home() {
  cron.schedule('*/1 * * * *', function callClock () {
    const timeInterval = TimeIntervalsObject.twoMins;
    return startChronJobs(timeInterval);
  });

  cron.schedule('0 7 * * *', function callClock () {
    const timeInterval = TimeIntervalsObject.daily;
    return startChronJobs(timeInterval);
  });

  cron.schedule('0 0 * * 0', function callClock () {
    const timeInterval = TimeIntervalsObject.weekly;
    return startChronJobs(timeInterval);
  });

  cron.schedule('0 0 28 * *', function callClock () {
    const timeInterval = TimeIntervalsObject.monthly;
    return startChronJobs(timeInterval);
  });

  cron.schedule('0 0 1 1 *', function callClock () {
    const timeInterval = TimeIntervalsObject.annually;
    return startChronJobs(timeInterval);
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello World</h1>
    </main>
  );
}
