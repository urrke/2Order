import { useSnackbar, VariantType } from "notistack";

export function useNotifications () {

    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    const showMessage = (tekst: string, tip: VariantType) => {
        const id = enqueueSnackbar(tekst, {
            variant: tip,
            onClick: () => {
                closeSnackbar(id);
            }
        });
    }

    return [showMessage];
}