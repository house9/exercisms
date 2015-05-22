defmodule Guess do
  def guess(actual, range, guess \\ -1)

  def guess(_, _, guess) when guess == 0 do
    raise "guessing 0"
  end

  def guess(actual, low..high, _) when actual < low or actual > high do
    raise "out of bounds"
  end

  def guess(actual, low..high, _) when actual == low and actual == high do
    render_found(actual)
  end

  def guess(actual, low..high, guess) when guess == -1 do
    guess(actual, low..high, next_guess(low, high))
  end

  def guess(actual, _low..high, guess) when guess < actual do
    low = guess + 1
    next_guess = next_guess(low, high)
    guess(actual, low..high, next_guess)
  end

  def guess(actual, low.._high, guess) when guess > actual do
    high = guess - 1
    next_guess = next_guess(low, high)
    guess(actual, low..high, next_guess)
  end

  def guess(actual, _range, guess) when guess == actual do
    render_found(actual)
  end

  def guess(_, _, _) do
    raise "Unhandled guess!"
  end

  defp next_guess(low, high) do
    amount = high - low
    guess = high - div(amount, 2)
    render_is_it(guess)
    guess
  end

  defp render_is_it(guess) do
    IO.puts "Is it #{guess}"
  end

  defp render_found(number) do
    IO.puts "-----------------------------"
    IO.puts number
  end
end
