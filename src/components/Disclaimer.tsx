type DisclaimerProps = {
  compact?: boolean;
};

export function Disclaimer({ compact = false }: DisclaimerProps) {
  return (
    <p
      className={
        compact
          ? "text-xs leading-5 text-muted"
          : "hairline rounded-lg bg-cream p-5 text-sm leading-7 text-ink/70"
      }
    >
      La información de Nutriología es educativa y no reemplaza la consulta
      médica o nutricional personalizada. Para condiciones clínicas específicas,
      consulta con un profesional de salud.
    </p>
  );
}
