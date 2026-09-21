export const parseGuestsCsv = (csvText) => {
  const lines = csvText.split('\n');
  const results = [];
  if (lines.length <= 1) return results;

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    
    const [nome, email, telefone, grupo, acompanhantes, cha_panela, convite_entregue] = line.split(',');
    
    results.push({
      name: nome?.trim(),
      email: email?.trim() || '',
      phone: telefone?.trim() || '',
      group: grupo?.trim() || 'Geral',
      allowed_companions: parseInt(acompanhantes) || 0,
      has_bridal_shower: (cha_panela?.trim().toLowerCase() === 'sim' || cha_panela?.trim() === 'true'),
      invitation_delivered: (convite_entregue?.trim().toLowerCase() === 'sim' || convite_entregue?.trim() === 'true')
    });
  }
  
  return results;
};