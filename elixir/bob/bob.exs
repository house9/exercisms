defmodule Teenager do
  def hey(input) do
    cond do
      String.strip(input) == "" ->
        "Fine. Be that way!"
      String.ends_with?(input, "?") ->
        "Sure."
      String.upcase(String.replace(input, ~r/\P{L}/, "")) == String.replace(input, ~r/\P{L}/, "") && String.length(String.replace(input, ~r/\P{L}/, "")) > 0 ->
        "Whoa, chill out!"
      true ->
        "Whatever."
    end
  end
end
