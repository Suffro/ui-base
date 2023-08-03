<script>

	import { user } from "$lib/stores/auth";

</script>

<h1 class="text-3xl font-bold">
    {$user?"Logged in":"Logged out"}
  </h1>
  