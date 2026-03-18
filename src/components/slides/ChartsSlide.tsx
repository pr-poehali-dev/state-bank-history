import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { financialData, financialTable } from "@/data/presentationData";

interface ChartsSlideProps {
  title: string;
  subtitle: string;
  description: string;
}

interface TooltipPayloadItem {
  color: string;
  name: string;
  value: number;
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: TooltipPayloadItem[];
  label?: string;
}

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div
        className="p-3 text-sm"
        style={{
          backgroundColor: "var(--sepia-paper)",
          border: "1px solid var(--gold)",
          fontFamily: "'Crimson Text', serif",
          color: "var(--sepia-dark)",
        }}
      >
        <p className="font-bold mb-1">{label} г.</p>
        {payload.map((p: TooltipPayloadItem, i: number) => (
          <p key={i} style={{ color: p.color }}>
            {p.name}: {p.value} {p.name === "Отделения" ? "шт." : "млрд ₽"}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const ChartsSlide = ({ title, subtitle, description }: ChartsSlideProps) => {
  return (
    <div className="flex flex-col h-full px-8 py-10">
      <div className="mb-6">
        <div
          className="text-xs tracking-[0.35em] uppercase mb-2"
          style={{ color: "var(--gold)", fontFamily: "'Crimson Text', serif" }}
        >
          {subtitle}
        </div>
        <h2
          className="text-3xl md:text-4xl font-bold mb-3"
          style={{ fontFamily: "'Playfair Display', serif", color: "var(--sepia-dark)" }}
        >
          {title}
        </h2>
        <div className="ornate-divider w-48 mb-2">
          <span style={{ color: "var(--gold)" }}>✦</span>
        </div>
        <p
          className="text-sm"
          style={{ fontFamily: "'Crimson Text', serif", color: "var(--sepia-light)", fontSize: "15px" }}
        >
          {description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
        <div
          className="p-4"
          style={{ backgroundColor: "var(--sepia-paper)", border: "1px solid var(--border-ornate)" }}
        >
          <h3
            className="text-sm font-bold text-center mb-3"
            style={{ fontFamily: "'Playfair Display', serif", color: "var(--sepia-dark)" }}
          >
            Золотой запас и кредитные билеты (млрд руб.)
          </h3>
          <ResponsiveContainer width="100%" height={180}>
            <LineChart data={financialData.goldReserve.map((d, i) => ({ ...d, notes: financialData.creditNotes[i]?.value }))}>
              <CartesianGrid strokeDasharray="3 3" stroke="#c9a84c44" />
              <XAxis dataKey="year" tick={{ fontFamily: "'Crimson Text', serif", fontSize: 11, fill: "#5c3d1e" }} />
              <YAxis tick={{ fontFamily: "'Crimson Text', serif", fontSize: 11, fill: "#5c3d1e" }} />
              <Tooltip content={<CustomTooltip />} />
              <Legend wrapperStyle={{ fontFamily: "'Crimson Text', serif", fontSize: 12, color: "#5c3d1e" }} />
              <Line type="monotone" dataKey="value" name="Золотой запас" stroke="#9a7b2f" strokeWidth={2} dot={{ fill: "#9a7b2f", r: 3 }} />
              <Line type="monotone" dataKey="notes" name="Кредитные билеты" stroke="#8b3a3a" strokeWidth={2} dot={{ fill: "#8b3a3a", r: 3 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div
          className="p-4"
          style={{ backgroundColor: "var(--sepia-paper)", border: "1px solid var(--border-ornate)" }}
        >
          <h3
            className="text-sm font-bold text-center mb-3"
            style={{ fontFamily: "'Playfair Display', serif", color: "var(--sepia-dark)" }}
          >
            Основные операции (млрд руб.)
          </h3>
          <ResponsiveContainer width="100%" height={180}>
            <BarChart data={financialData.operations}>
              <CartesianGrid strokeDasharray="3 3" stroke="#c9a84c44" />
              <XAxis dataKey="year" tick={{ fontFamily: "'Crimson Text', serif", fontSize: 11, fill: "#5c3d1e" }} />
              <YAxis tick={{ fontFamily: "'Crimson Text', serif", fontSize: 11, fill: "#5c3d1e" }} />
              <Tooltip content={<CustomTooltip />} />
              <Legend wrapperStyle={{ fontFamily: "'Crimson Text', serif", fontSize: 12, color: "#5c3d1e" }} />
              <Bar dataKey="loans" name="Ссуды" fill="#9a7b2f" />
              <Bar dataKey="bills" name="Векселя" fill="#6b5420" />
              <Bar dataKey="deposits" name="Вклады" fill="#c9a84c" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div
          className="md:col-span-2 p-4 overflow-x-auto"
          style={{ backgroundColor: "var(--sepia-paper)", border: "1px solid var(--border-ornate)" }}
        >
          <h3
            className="text-sm font-bold text-center mb-3"
            style={{ fontFamily: "'Playfair Display', serif", color: "var(--sepia-dark)" }}
          >
            Сводная таблица финансовых показателей
          </h3>
          <table className="w-full text-sm" style={{ fontFamily: "'Crimson Text', serif" }}>
            <thead>
              <tr style={{ borderBottom: "2px solid var(--gold)" }}>
                {["Год", "Уставный капитал (млн ₽)", "Золотой запас (млн ₽)", "Кредитные билеты (млн ₽)", "Отделений"].map((h) => (
                  <th
                    key={h}
                    className="text-left py-2 px-3 text-xs font-bold"
                    style={{ color: "var(--gold-dark)", letterSpacing: "0.05em" }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {financialTable.map((row, i) => (
                <tr
                  key={i}
                  style={{
                    backgroundColor: i % 2 === 0 ? "rgba(201,168,76,0.08)" : "transparent",
                    borderBottom: "1px solid var(--border-ornate)30",
                  }}
                >
                  <td className="py-2 px-3 font-bold" style={{ color: "var(--sepia-dark)", fontFamily: "'IM Fell English', serif" }}>{row.year}</td>
                  <td className="py-2 px-3 text-center" style={{ color: "var(--sepia-medium)" }}>{row.capital}</td>
                  <td className="py-2 px-3 text-center" style={{ color: "var(--sepia-medium)" }}>{row.goldReserve}</td>
                  <td className="py-2 px-3 text-center" style={{ color: "var(--sepia-medium)" }}>{row.creditNotes}</td>
                  <td className="py-2 px-3 text-center" style={{ color: "var(--sepia-medium)" }}>{row.branches}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ChartsSlide;