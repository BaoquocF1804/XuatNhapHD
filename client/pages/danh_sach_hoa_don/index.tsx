import InvoiceListTable from "@/components/table/InvoiceListTable";
import MainLayout from "@/layout/MainLayout";
import Head from "next/head";

const InvoiceList = () => {
  return (
    <MainLayout>
      <Head>
        <title>Danh sách hoá đơn</title>
      </Head>
      <InvoiceListTable />
    </MainLayout>
  );
};

export default InvoiceList;
