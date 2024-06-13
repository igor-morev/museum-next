import ExpoDetails from '@/features/expo-details/ExpoDetails';

export default function Page({ params }: { params: { id: string } }) {
  return <ExpoDetails params={params}></ExpoDetails>;
}
