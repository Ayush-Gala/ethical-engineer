if [[ "$VERCEL_GIT_COMMIT_REF" == "main" ]]; then
  exit 1  # Continue with the build if on the "main" branch
else
  exit 0  # Skip the build if not on the "main" branch
fi
