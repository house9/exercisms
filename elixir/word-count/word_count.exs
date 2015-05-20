defmodule Words do
  @doc """
  Count the number of words in the sentence.

  Words are compared case-insensitively.
  """
  @spec count(String.t) :: map()
  def count(sentence) do
    all_words = extract_words_from(sentence)
    reduce(all_words, Enum.uniq(all_words))
  end

  defp extract_words_from(sentence) do
    String.replace(sentence, ~r/\_/, " ")
    |> String.split
    |> Enum.map(&String.downcase/1)
    |> Enum.map(fn (x) -> String.replace(x, ~r/[^\pLetter\pNumber\s\-]+/u, "") end)
    |> Enum.filter(fn (x) -> x != "" end)
  end

  defp reduce(all_words, uniq_words) do
    Enum.reduce(uniq_words, %{}, fn (word, accumulator) ->
      count = Enum.count(all_words, fn (x) -> x == word end)
      Map.merge(Map.put(%{}, word, count), accumulator)
    end)
  end
end
