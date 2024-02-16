export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className={"flex items-center justify-center h-screen"}>
      <span class="loading loading-ball loading-xs"></span>
      <span class="loading loading-ball loading-sm"></span>
      <span class="loading loading-ball loading-md"></span>
      <span class="loading loading-ball loading-lg"></span>
    </div>
  );
}
