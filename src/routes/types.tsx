export type RootStackParamList = {
    Init: { name: string };
    Home: { name: string };
    Profile: { name: string };
    Feed: { sort: 'latest' | 'top' } | undefined;
};