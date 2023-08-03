<script>

	import { authSession } from "$lib/stores/auth";

</script>

<h1 class="text-3xl font-bold">
    {$authSession?.session?.user?.id?"Logged in":"Logged out"}
  </h1>
  