"use client";
import { Skeleton } from "@/components/ui/skeleton";

export default function CourseSkeleton() {
  return (
    <div className="w-full rounded-lg overflow-hidden shadow-md">
      <div className="p-0">
        <Skeleton className="w-full h-48 object-cover rounded-t-lg" />
        <div className="p-4 space-y-2">
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>
      </div>
      <div className="p-4 space-y-2">
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </div>
      <div className="p-4 flex justify-end">
        <Skeleton className="h-10 w-full sm:w-auto" />
      </div>
    </div>
  );
}
