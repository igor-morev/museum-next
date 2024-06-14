import ExpoDetails from '@/features/ExpoDetails/ExpoDetails';

export default function Page({ params }: { params: { id: string } }) {
  return <ExpoDetails params={params}></ExpoDetails>;
}
