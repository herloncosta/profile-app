export function Technology({ name, text, bg, icon }) {
    return (
        <span
            className="flex items-center justify-center gap-1 rounded p-1 text-white font-medium cursor-pointer"
            style={{ backgroundColor: bg, color: text }}
        >
            {name} {icon}
        </span>
    )
}
