interface StatCardProps {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

const StatCard = ({ value, label, icon }: StatCardProps) => {
  return (
    <div className="text-center p-6">
      {icon && <div className="mb-3 flex justify-center">{icon}</div>}
      <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">{value}</div>
      <div className="text-muted-foreground font-medium">{label}</div>
    </div>
  );
};

export default StatCard;
