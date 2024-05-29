import EventPage from '@/components/EventPage';
import React from 'react';

type Props = {
  id: string;
};

export async function generateStaticParams() {
  return [
    { id: "coding" },
    { id: "designing" },
    { id: "communication" },
    { id: "cyber-security" },
    { id: "data-analytics" },
    { id: "gaming" },
    { id: "technocrats" }
  ];
}

const Page = ({ params }: { params: Props }) => {
  const { id } = params;
  return (
    <EventPage id={id} />
  );
};

export default Page;
