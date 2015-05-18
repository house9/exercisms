defmodule Teenager do
  def hey(input) do
    cond do
      silent?(input) ->
        "Fine. Be that way!"
      question?(input) ->
        "Sure."
      yelling?(input) ->
        "Whoa, chill out!"
      true ->
        "Whatever."
    end
  end

  defp silent?(input) do
    String.strip(input) == ""
  end

  defp question?(input) do
    String.ends_with?(input, "?")
  end

  defp yelling?(input) do
    String.upcase(String.replace(input, ~r/\P{L}/, "")) == String.replace(input, ~r/\P{L}/, "") && String.length(String.replace(input, ~r/\P{L}/, "")) > 0
  end

end
