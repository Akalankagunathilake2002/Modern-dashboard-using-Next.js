// app/dashboard/(overview)/page.tsx

import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';

// ✅ CHANGED: Use CardWrapper instead of rendering <Card />s directly
import CardWrapper from '@/app/ui/dashboard/cards';

// ✅ CHANGED: Wrap groups in Suspense to stream them
import { Suspense } from 'react';

// ✅ CHANGED: Use skeletons as fallbacks while data loads
import {
  CardsSkeleton,
  RevenueChartSkeleton,
  LatestInvoicesSkeleton,
} from '@/app/ui/skeletons';

// ✅ CHANGED: Only keep the data fetch here if LatestInvoices still needs props
// (In your current setup, LatestInvoices expects latestInvoices prop)
import { fetchLatestInvoices } from '@/app/lib/data';

export default async function Page() {
  // ✅ CHANGED: Removed fetchRevenue() from here (RevenueChart will fetch inside itself)
  // ✅ CHANGED: Removed fetchCardData() from here (CardWrapper will fetch inside itself)

  // NOTE: This fetch still happens here ONLY because your LatestInvoices component expects props.
  // If you later convert LatestInvoices to fetch internally, you can remove this too.
  const latestInvoices = await fetchLatestInvoices();

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>

      {/* ✅ CHANGED: Group ALL cards and stream them together */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        {/* ✅ CHANGED: Stream only the chart */}
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>

        {/* ✅ OPTIONAL (recommended): Stream invoices too */}
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices latestInvoices={latestInvoices} />
        </Suspense>
      </div>
    </main>
  );
}
