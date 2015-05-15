class Hamming
  def self.compute(strand_1, strand_2)
    guard(strand_1, strand_2)
    strand_1.chars.zip(strand_2.chars).reject { |item| item[0] == item[1] }.length
  end

  def self.guard(a, b)
    unless a.length == b.length
      raise ArgumentError.new("Strands must be of the same length")
    end
  end
end
