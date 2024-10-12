export default function ReloadMe() {

    function refresh() {
        window.location.reload();
    }

    return (
        <button onClick={refresh}>Refresh</button>
    );
}